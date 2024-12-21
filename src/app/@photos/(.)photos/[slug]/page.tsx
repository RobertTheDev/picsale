import { photos } from '@/app/data/photos';
import Image from 'next/image';
import Link from 'next/link';
import { LuHeart, LuShoppingBasket } from 'react-icons/lu';
import BackButton from './components/BackButton';
import ModalOverlay from './components/ModalOverlay';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  if (!slug) {
    throw new Error('Slug parameter is required');
  }

  const photo = photos.find((p) => p.id === slug);

  return (
    <ModalOverlay>
      <div className="flex h-full w-full flex-col overflow-hidden overflow-y-scroll rounded-xl bg-white md:h-full md:flex-row">
        <div className="relative aspect-square w-full md:w-1/2">
          <Image
            fill
            className="object-cover"
            alt=""
            src={`/photos/${photo?.url}`}
          />
        </div>
        <div className="flex w-full flex-col p-8 md:w-1/2">
          <div className="flex w-full items-center justify-end bg-white">
            <BackButton />
          </div>
          <div className="mt-2">
            <h2 className="text-4xl font-bold">{photo?.title}</h2>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">
              £{photo!.price.amount / 100}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="flex items-center justify-center gap-4 rounded-lg bg-black px-4 py-4 text-white">
              <LuHeart size={20} /> Save to wishlist
            </button>
            <button className="flex items-center justify-center gap-4 rounded-lg bg-black px-4 py-4 text-white">
              <LuShoppingBasket size={20} /> Add to basket
            </button>
          </div>
          <div className="mt-8">
            <Link href={`/sellers/${photo?.seller.id}`}>
              <div className="flex items-center gap-2">
                <div className="relative size-12 overflow-hidden rounded-full">
                  <Image
                    className="object-cover"
                    fill
                    src={photo!.seller.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-bold">
                    {photo?.seller.firstName} {photo?.seller.lastName}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-base font-bold">Description</p>
            <p className="mt-2">{photo?.description}</p>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}
