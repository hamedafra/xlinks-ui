'use client';

import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useDownloadInitiateMutation } from '@/redux/features/authApiSlice';
import { setProgress, setIsDownloading } from '@/redux/features/downloadSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { List, Spinner } from '@/components/common';
import { useState, useEffect } from 'react';

export default function Page() {
    const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

	const config = [
		{
			label: 'First Name',
			value: user?.first_name,
		},
		{
			label: 'Last Name',
			value: user?.last_name,
		},
		{
			label: 'Email',
			value: user?.email,
		},
	];

    const [url, setUrl] = useState('');
    const [group, setGroup] = useState('');
    const [downloadLink, setDownloadLink] = useState(null);

    const { progress, isDownloading } = useAppSelector(state => state.download);
    const dispatch = useAppDispatch();

    const [downloadInitiate] = useDownloadInitiateMutation();

    useEffect(() => {
        if (group && isDownloading) {
            const ws = new WebSocket(`wss://mylinks.ir/ws/progress/${group}/`);

            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'send.progress') {
                    if (data.progress === 'Download complete') {
                        setDownloadLink(data.file_link);
                        dispatch(setIsDownloading(false));
                        ws.close();
                    } else if (data.progress === 'error') {
                        dispatch(setIsDownloading(false));
                        ws.close();
                    } else {
                        dispatch(setProgress(data.progress));
                    }
                }
            };

            ws.onclose = () => {
                console.log('WebSocket closed');
            };

            return () => {
                ws.close();
            };
        }
    }, [group, isDownloading, dispatch]);

    const initiateDownload = async () => {
        try {
            const result = await downloadInitiate({ url });

            if ('data' in result) {
                setGroup(result.data.group_name);
                dispatch(setIsDownloading(true));
            } else {
                console.error('Download initiation error:', result.error);
            }
        } catch (error) {
            console.error('Download initiation error:', error);
        }
    };

	if (isLoading || isFetching) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner lg />
            </div>
        );
    }

    return (
        <>
            <header className='bg-white shadow-sm'>
                <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                        Dashboard
                    </h1>
                </div>
            </header>

            <main className='mx-auto max-w-7xl p-6 bg-gray-100 rounded-lg shadow-sm'>
                {/* Download Section */}
                <section className="mt-10 p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Download URLs</h2>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            className="flex-grow p-2 mr-2 border rounded-lg"
                            placeholder="Enter URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            className="btn bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                            onClick={initiateDownload}
                        >
                            Download
                        </button>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-gray-200">
                                    {progress}%
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-gray-600">
                                    {progress}/100
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                    </div>
                    {downloadLink && 
                        <a
                            href={downloadLink}
                            download
                            className="text-blue-500 hover:text-blue-600 hover:underline"
                        >
                            Click here to download
                        </a>
                    }
                </section>
				<List config={config} />
            </main>
        </>
    );
}