import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link href="/about">About</Link>
    </div>
  );
}
