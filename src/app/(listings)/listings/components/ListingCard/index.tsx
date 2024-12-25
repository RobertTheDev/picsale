import Image from 'next/image';
import Link from 'next/link';

export default function ListingCard({
  props,
}: {
  props: { id: string; url: string };
}) {
  return (
    <Link href={`/purchases/${props.id}`}>
      <div className="flex w-full gap-6">
        <div className="relative aspect-square h-20 overflow-hidden rounded-xl">
          <Image
            fill
            src={`/photos/${props.url}`}
            alt="Photo preview"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-lg font-bold text-white">
            Image of a gorilla lying down
          </p>
        </div>
      </div>
    </Link>
  );
}
