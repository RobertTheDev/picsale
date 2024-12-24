import PhotoProductCard from '@/app/(home)/components/PhotoProductCard';
import { photos } from '@/app/data/photos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wishlist',
};

export default function WishlistPage() {
  return (
    <main className="flex flex-col px-4 pb-8">
      <div className="mt-8">
        <h1 className="text-3xl font-bold">Wishlist</h1>
      </div>
      <div className="mt-8 flex w-full flex-col">
        <ul className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {photos.map((photo) => {
            return <PhotoProductCard key={photo.id} photo={photo} />;
          })}
        </ul>
      </div>
    </main>
  );
}
