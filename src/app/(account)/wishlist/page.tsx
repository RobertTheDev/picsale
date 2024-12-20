import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wishlist',
};

export default function WishlistPage() {
  return (
    <main className="px-8">
      <h1 className="mt-8 text-3xl font-bold">Wishlist</h1>
      <div className="mt-8 flex w-full flex-col">
        <ul className="grid w-full grid-cols-4 gap-8">
          {photos.map((photo) => {
            return (
              <li className="w-full" key={photo.id}>
                <Link href={`/photos/${photo.id}`}>
                  <div className="relative aspect-square w-full">
                    <Image
                      fill
                      objectFit="cover"
                      alt=""
                      src={`/photos/${photo.url}`}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
