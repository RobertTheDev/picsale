import { photos } from '@/app/data/photos';
import Link from 'next/link';
import { Suspense } from 'react';
import { LuRefreshCcw } from 'react-icons/lu';
import PhotoProductCard from './components/PhotoProductCard';

export default async function PhotoProductsList() {
  if (photos.length < 1) {
    return (
      <div className="mt-16 flex w-full flex-col items-center">
        <p>No photos found</p>
        <Link
          href="/"
          className="mt-8 flex w-40 items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-white"
        >
          <LuRefreshCcw size={16} /> Reset
        </Link>
      </div>
    );
  }

  return (
    <ul className="mt-2 grid w-full grid-cols-2 gap-2 px-2 py-2 md:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo) => {
        return (
          <Suspense
            key={photo.id}
            fallback={
              <div className="aspect-square w-full animate-pulse bg-gray-300" />
            }
          >
            <PhotoProductCard photo={photo} />
          </Suspense>
        );
      })}
    </ul>
  );
}
