'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LuDownload } from 'react-icons/lu';

export default function PurchaseCard({
  props,
}: {
  props: { id: string; url: string };
}) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/photos/${props.url}`;
    link.download = props.url.split('/').pop() || 'download';
    link.click();
  };

  return (
    <Link href={`/purchases/${props.id}`}>
      <div className="flex w-full gap-6">
        <div className="relative aspect-square h-28 overflow-hidden rounded-xl">
          <Image
            fill
            src={`/photos/${props.url}`}
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
            onClick={handleDownload}
            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-800 text-sm font-medium text-white"
          >
            <LuDownload size={20} />
            Download
          </button>
        </div>
      </div>
    </Link>
  );
}
