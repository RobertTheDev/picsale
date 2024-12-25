import IPhoto from '@/app/interfaces/Photo';
import Image from 'next/image';
import Link from 'next/link';
import { LuShoppingBasket } from 'react-icons/lu';

export default function PhotoProductCard({ photo }: { photo: IPhoto }) {
  return (
    <Link href={`/purchases/${photo.id}`}>
      <div className="flex w-full gap-6">
        <div className="relative aspect-square h-28 overflow-hidden rounded-xl">
          <Image
            fill
            src={`/photos/${photo.url}`}
            alt="Photo preview"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-base font-bold text-white">
            Image of a gorilla lying down
          </p>
          <button
            type="button"
            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-800 text-sm font-medium text-white"
          >
            <LuShoppingBasket size={20} />
            Add To Basket
          </button>
        </div>
      </div>
    </Link>
  );
}
