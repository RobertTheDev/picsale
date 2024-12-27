import Image from 'next/image';
import { LuTrash2 } from 'react-icons/lu';

export default function BasketItemCard({
  basketItem,
}: {
  basketItem: { url: string };
}) {
  return (
    <div className="flex w-full items-start justify-between gap-4">
      <div className="flex flex-1 gap-4">
        <div className="relative aspect-square size-14 overflow-hidden rounded-lg">
          <Image
            className="object-cover"
            src={`/photos/${basketItem.url}`}
            fill
            alt=""
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold">Mountain Landscape</p>
          <p className="text-sm font-medium">£215.00</p>
        </div>
      </div>
      <div>
        <button className="mt-2" type="button">
          <LuTrash2 size={24} />
        </button>
      </div>
    </div>
  );
}
