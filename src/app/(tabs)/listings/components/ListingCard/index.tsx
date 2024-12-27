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
          <p className="text-lg font-semibold text-white">
            Image of a gorilla lying down
          </p>

          <div className="mt-2 flex h-6 w-16 items-center justify-center rounded-md bg-green-600">
            <p className="text-sm">Active</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
