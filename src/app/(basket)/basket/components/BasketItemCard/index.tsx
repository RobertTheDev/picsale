import IPhoto from '@/app/interfaces/Photo';
import Image from 'next/image';
import { LuTrash2 } from 'react-icons/lu';

export default function BasketItemCard({ basketItem }: { basketItem: IPhoto }) {
  return (
    <div className="flex w-full items-start gap-4">
      <div className="relative aspect-square size-16 overflow-hidden rounded-lg">
        <Image
          className="object-cover"
          src={`/photos/${basketItem.url}`}
          fill
          alt=""
        />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-lg font-bold">Mountain Landscape</p>
        <p className="text-base font-medium">£215.00</p>
      </div>
      <div>
        <button type="button">
          <LuTrash2 />
        </button>
      </div>
    </div>
  );
}
