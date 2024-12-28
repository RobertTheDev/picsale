import PhotoProductCard from '@/app/(tabs)/(search)/components/PhotoProductCard';
import ISeller from '@/app/interfaces/Seller';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

export default function SellerDetail({
  seller,
}: {
  seller: ISeller | undefined;
}) {
  if (!seller) {
    return (
      <div className="mt-16 flex w-full flex-col items-center p-8">
        <p className="text-base font-medium">Seller not found</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col p-8">
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
      <div className="mt-16 flex w-full flex-col items-center">
        {seller.photos.length < 1 ? (
          <div>
            <p>{`${seller.firstName} ${seller.lastName} has not listed any photos yet`}</p>
          </div>
        ) : (
          <ul className="grid w-full grid-cols-4 gap-2">
            {seller.photos.map((photo) => {
              return <PhotoProductCard key={photo.id} photo={photo} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
