'use client';

import { photos } from '@/app/data/photos';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LuTrash2, LuX } from 'react-icons/lu';

export default function Page() {
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

  return (
    <div className="fixed left-0 top-0 z-[66] flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="fixed bottom-[8px] right-[8px] top-[8px] max-h-screen w-96 overflow-hidden overflow-x-scroll overflow-y-scroll rounded-lg bg-white px-8 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Your Basket</h1>
          <button
            className="flex size-8 items-center justify-center rounded-full bg-gray-200"
            onClick={() => {
              router.back();
            }}
          >
            <LuX size={16} />
          </button>
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-8 pb-20">
          {photos.map((photo) => {
            return (
              <div key={photo.id} className="flex w-full items-start gap-4">
                <div className="relative aspect-square size-16 overflow-hidden rounded-lg">
                  <Image
                    objectFit="cover"
                    src={`/photos/${photo.url}`}
                    fill
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-lg font-bold">Mountain Landscape</p>
                  <p className="text-base font-medium">£215.00</p>
                </div>
                <div>
                  <button>
                    <LuTrash2 />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="fixed bottom-0 bg-white py-4">
          <div className="flex flex-col">
            <div className="flex h-12 items-center justify-between">
              <div>
                <p className="font-bold">Subtotal</p>
              </div>
              <div>
                <p className="font-bold">£430.00</p>
              </div>
            </div>
            <div className="mt-4 flex w-full items-center gap-4">
              <button className="h-12 w-40 overflow-hidden rounded-md bg-black font-medium text-white">
                View Basket
              </button>
              <button className="h-12 w-40 overflow-hidden rounded-md bg-green-500 font-medium text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
