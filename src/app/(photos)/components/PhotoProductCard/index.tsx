'use client';

import IPhoto from '@/app/interfaces/Photo';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LuEye, LuHeart, LuShoppingBasket } from 'react-icons/lu';

export default function PhotoProductCard({ photo }: { photo: IPhoto }) {
  const [mouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <Link href={`/photos/${photo.id}`}>
      <li
        className="relative w-full"
        onBlur={handleMouseOut}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onMouseOver={handleMouseOver}
      >
        {mouseOver && (
          <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-4">
              <button className="flex size-12 items-center justify-center rounded-full bg-white text-black hover:bg-neutral-300">
                <LuHeart size={20} />
              </button>
              <button className="flex size-12 items-center justify-center rounded-full bg-white text-black hover:bg-neutral-300">
                <LuEye size={24} />
              </button>
              <button className="flex size-12 items-center justify-center rounded-full bg-white text-black hover:bg-neutral-300">
                <LuShoppingBasket size={24} />
              </button>
            </div>
          </div>
        )}
        <div className="relative aspect-square w-full">
          <Image fill objectFit="cover" alt="" src={`/photos/${photo.url}`} />
        </div>
      </li>
    </Link>
  );
}
