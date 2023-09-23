import { RequireAdmin } from '@/components/utils';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return <RequireAdmin>{children}</RequireAdmin>;
}
