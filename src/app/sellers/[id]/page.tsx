import PhotoProductCard from '@/app/(photos)/components/PhotoProductCard';
import { photos } from '@/app/data/photos';
import Image from 'next/image';

export default function SellersPage() {
  return (
    <main className="flex w-full flex-col items-center p-8">
      <div className="flex flex-col">
        <div className="relative size-40 overflow-hidden rounded-full">
          <Image objectFit="cover" src="/woman.jpg" alt="" fill />
        </div>
        <h1 className="mt-4 text-2xl font-bold">Jane Moses</h1>
      </div>

      <ul className="grid w-full grid-cols-4 gap-8 p-8">
        {photos.map((photo) => {
          return <PhotoProductCard key={photo.id} photo={photo} />;
        })}
      </ul>
    </main>
  );
}
