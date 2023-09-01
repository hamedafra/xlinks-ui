import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';

export default function Dashboard() {
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [group, setGroup] = useState('');
  const [downloadLink, setDownloadLink] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false); // New state variable
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, []);

  useEffect(() => {
    if (group && isDownloading) { // Added isDownloading check
      const ws = new WebSocket(`wss://mylinks.ir/ws/progress/${group}/`);

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'send.progress') {
          if (data.progress === 'Download complete') {
            console.log('Download complete');  // Log in console
            setDownloadLink(data.file_link);
            setIsDownloading(false);  // Set to false when download is complete
            ws.close();  // Close the WebSocket
          } else if (data.progress === 'error') {
            console.log('An error occurred');  // Log in console
            setIsDownloading(false);  // Set to false on error
            ws.close();  // Close the WebSocket
          } else {
            setProgress(data.progress);
          }
        }
      };

      ws.onclose = () => {
        console.log('WebSocket closed');  // Log in console
      };

      return () => {
        ws.close();
      };
    }
  }, [group, isDownloading]); // Added isDownloading as dependency

  const isTokenExpired = () => {
    const expiration = Cookies.get('tokenExpiration');
    return expiration && new Date(expiration).getTime() < new Date().getTime();
  };

  const refreshToken = async () => {
    try {
      const refresh = Cookies.get('refreshToken');
      const response = await axios.post('https://mylinks.ir/api/token/refresh/', { refresh });
      const { access } = response.data;
      Cookies.set('accessToken', access);
      const newExpiration = new Date(new Date().getTime() + (15 * 60 * 1000));
      Cookies.set('tokenExpiration', newExpiration);
    } catch (error) {
      console.error('Failed to refresh token:', error);
      router.push('/');
    }
  };

  const initiateDownload = async () => {
    if (isTokenExpired()) {
      await refreshToken();
    }

    try {
      const response = await axios.post('https://mylinks.ir/api/leecher/download/initiate/', { url }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
        },
      });
      const data = response.data;
      setGroup(data.group_name);
      setIsDownloading(true);  // Set to true when download starts
    } catch (error) {
      console.error('Download initiation error:', error);
    }
  };

  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Download URLs</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="btn btn-primary" onClick={initiateDownload}>
              Download
            </button>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
          {downloadLink && <a href={downloadLink} download>Click here to download</a>}
        </div>
      </div>
    </Layout>
  );
}