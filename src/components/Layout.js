import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-primary text-white p-4">
        <h1>My Fancy Website</h1>
        <nav>
          <Link href="/">Home</Link> | <Link href="/profile">Profile</Link>
        </nav>
      </header>
      <main className="container my-4">{children}</main>
      <footer className="bg-secondary text-white p-4">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}
