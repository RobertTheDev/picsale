import PhotoProductCard from '@/app/(home)/(search)/components/PhotoProductCard';
import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { LuRefreshCcw } from 'react-icons/lu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  if (!slug) {
    throw new Error('Slug parameter is required');
  }

  return {
    title: slug ? slug : 'Category',
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  if (!slug) {
    throw new Error('Slug parameter is required');
  }

  const filteredPhotos = photos.filter((photo) => photo.category === slug);

  if (filteredPhotos.length < 1) {
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
      {filteredPhotos.map((photo) => {
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
