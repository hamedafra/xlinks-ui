'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { Spinner } from '@/components/common';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';


interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
	const { data: user, isLoading } = useRetrieveUserQuery();

	if (isLoading) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

	if (!user?.is_superuser) {
		redirect('/auth/login');
	}

	return <>{children}</>;
}


