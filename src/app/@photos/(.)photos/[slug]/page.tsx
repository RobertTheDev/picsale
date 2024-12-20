'use client';

import { photos } from '@/app/data/photos';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LuHeart, LuShoppingBasket } from 'react-icons/lu';

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [pathName]);

  const photo = photos.find((p) => p.id === params.slug);

  return (
    <div className="fixed left-0 top-0 z-[66] flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <main className="flex gap-8 bg-white p-8">
        <div className="relative aspect-square w-1/2">
          <Image fill objectFit="cover" alt="" src={`/photos/${photo?.url}`} />
        </div>
        <div className="flex flex-col">
          <div className="bg-white">
            <button
              onClick={() => {
                router.back();
              }}
            >
              Close
            </button>
          </div>
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
    </div>
  );
}
