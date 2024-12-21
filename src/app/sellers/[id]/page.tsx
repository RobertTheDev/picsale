import PhotoProductCard from '@/app/(home)/components/PhotoProductCard';
import { sellers } from '@/app/data/sellers';
import { Metadata } from 'next';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  if (!id) {
    throw new Error('Id parameter is required');
  }

  const seller = sellers.find((seller) => seller.id === id);

  return {
    title: seller ? `${seller.firstName} ${seller.lastName}` : 'Seller',
  };
}

export default async function SellersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) {
    throw new Error('Id parameter is required');
  }

  const seller = sellers.find((seller) => seller.id === id);

  if (!seller) {
    return (
      <div className="mt-16 flex w-full flex-col items-center p-8">
        <p className="text-base font-medium">Seller not found</p>
      </div>
    );
  }

  return (
    <main className="flex w-full flex-col items-center p-8">
      <div className="mt-8 flex flex-col items-center">
        {seller.imageUrl ? (
          <div className="relative size-40 overflow-hidden rounded-full">
            <Image className="object-cover" src={seller.imageUrl} alt="" fill />
          </div>
        ) : (
          <div className="flex size-40 items-center justify-center overflow-hidden rounded-full bg-gray-200">
            <LuUser size={80} />
          </div>
        )}
        <h1 className="mt-4 text-2xl font-bold">
          {seller.firstName} {seller.lastName}
        </h1>
      </div>
      <div className="mt-8 flex w-full flex-col items-center">
        {seller.photos.length < 1 ? (
          <div>
            <p>{`${seller.firstName} ${seller.lastName} has not listed any photos yet`}</p>
          </div>
        ) : (
          <ul className="grid w-full grid-cols-4 gap-2 p-8">
            {seller.photos.map((photo) => {
              return <PhotoProductCard key={photo.id} photo={photo} />;
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
