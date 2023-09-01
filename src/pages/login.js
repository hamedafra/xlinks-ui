import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://mylinks.ir/api/login/', {
        email,
        password,
      });

      Cookies.set('accessToken', response.data.tokens.access);
      Cookies.set('refreshToken', response.data.tokens.refresh);
      // set token expiration based on your token settings, e.g., 15 minutes from now
      const tokenExpiration = new Date(new Date().getTime() + (15 * 60 * 1000));
      Cookies.set('tokenExpiration', tokenExpiration);

      router.push('/');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error);
    }
  };
  
  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
}
