import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Image from 'next/image';
import { LuDownload } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Edit Photo',
};

export default async function PurchasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) {
    throw new Error('Id parameter is required');
  }

  const photo = photos.find((photo) => photo.id === id);

  if (!photo) {
    return;
  }

  return (
    <div>
      <div className="relative aspect-square w-full">
        <Image
          className="object-cover"
          fill
          src={`/photos/${photo.url}`}
          alt=""
        />
      </div>
      <h1 className="font-bold text-white">{photo.title}</h1>
      <div className="fixed bottom-0 flex h-20 w-full items-center bg-[rgba(0,0,0,1)] px-4 lg:hidden">
        <button
          type="button"
          //   onClick={handleDownload}
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-800 text-sm font-medium text-white"
        >
          <LuDownload size={20} />
          Download
        </button>
      </div>
    </div>
  );
}
