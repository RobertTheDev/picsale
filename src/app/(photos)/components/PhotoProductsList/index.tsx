'use client';

import { photos } from '@/app/data/photos';
import { useSearchParams } from 'next/navigation';
import PhotoProductCard from '../PhotoProductCard';

export default function PhotoProductsList() {
  const searchParams = useSearchParams();

  const filteredPhotos = searchParams.get('category')
    ? photos.filter((photo) => photo.category === searchParams.get('category'))
    : photos;

  return (
    <ul className="grid grid-cols-3 gap-8 p-8">
      {filteredPhotos.map((photo) => {
        return <PhotoProductCard key={photo.id} photo={photo} />;
      })}
    </ul>
  );
}
