import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { isAuthenticated } from '../utils/auth';

export default function Home() {
  const router = useRouter();

  if (isAuthenticated()) {
    router.push('/dashboard'); // Redirect to dashboard if authenticated
  }

  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Welcome to My Website</h2>
          <p className="card-text">
            Please <a href="/register">register</a> or <a href="/login">login</a> to access the dashboard.
          </p>
        </div>
      </div>
    </Layout>
  );
}
