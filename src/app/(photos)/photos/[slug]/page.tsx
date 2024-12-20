import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LuHeart, LuShoppingBasket } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Photo',
};

export default function PhotoPage({ params }: { params: { slug: string } }) {
  const photo = photos.find((photo) => photo.id === params.slug);

  return (
    <main className="flex gap-8 p-8">
      <div className="relative aspect-square w-1/2">
        <Image fill objectFit="cover" alt="" src={`/photos/${photo?.url}`} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold">{photo?.title}</h2>
        <p>{photo?.description}</p>
        <p>£{photo?.price.amount}</p>
        <Link href={`/sellers/${photo?.seller.id}`}>
          <div className="flex items-center gap-4">
            <div className="relative size-16 overflow-hidden rounded-full">
              <Image
                objectFit="cover"
                fill
                src={photo!.seller.imageUrl}
                alt=""
              />
            </div>
            <div>
              <p>
                {photo?.seller.firstName} {photo?.seller.lastName}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center gap-4 rounded-lg bg-black px-4 py-4 text-white">
            <LuHeart size={20} /> Save to wishlist
          </button>
          <button className="flex items-center justify-center gap-4 rounded-lg bg-black px-4 py-4 text-white">
            <LuShoppingBasket size={20} /> Add to basket
          </button>
        </div>
      </div>
    </main>
  );
}
