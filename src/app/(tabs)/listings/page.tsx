import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Link from 'next/link';
import { LuPlus } from 'react-icons/lu';
import ListingCard from './components/ListingCard';

export const metadata: Metadata = {
  title: 'Listings',
};

export default function PurchasesPage() {
  return (
    <main className="flex w-full flex-col px-4">
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Listings</h2>
        <Link
          href="/"
          className="flex size-12 items-center justify-center rounded-full bg-neutral-800 text-white"
        >
          <LuPlus size={24} />
        </Link>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <Link href="/" className="rounded-full bg-neutral-800 p-3 text-sm">
          Current Listings
        </Link>
        <Link href="/" className="rounded-full bg-neutral-800 p-3 text-sm">
          Sales Summary
        </Link>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="mt-4 grid w-full grid-cols-1 gap-8">
          {photos.map((photo) => (
            <ListingCard key={photo.id} props={photo} />
          ))}
        </div>
      </div>
    </main>
  );
}
