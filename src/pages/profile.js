import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }

    const fetchProfile = async () => {
      const token = Cookies.get('accessToken');
      try {
        const response = await axios.get('https://mylinks.ir/api/profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Fetching profile failed:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <h2>Profile</h2>
          {profile ? (
            <>
              <p>Email: {profile.email}</p>
              <p>Traffic Limit: {profile.traffic_limit}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
