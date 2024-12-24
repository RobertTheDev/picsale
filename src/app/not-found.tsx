import { Metadata } from 'next';
import Link from 'next/link';
import { LuHouse } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center p-8">
      <div className="mt-16">
        <h1 className="text-4xl font-bold">Oops... No Page Was Found</h1>
      </div>
      <div className="mt-16">
        <Link
          href="/"
          className="flex items-center justify-center gap-4 rounded-full bg-neutral-800 px-8 py-4 text-white shadow-md"
        >
          <LuHouse size={20} />
          Go Home
        </Link>
      </div>
    </main>
  );
}
