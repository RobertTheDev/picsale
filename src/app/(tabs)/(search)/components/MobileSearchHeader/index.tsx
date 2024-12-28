import Image from 'next/image';
import Link from 'next/link';
import { LuHeart, LuSearch, LuShoppingBasket } from 'react-icons/lu';

export default function MobileSearchHeader({
  wishlist,
  categories,
  basket,
}: {
  wishlist?: boolean;
  categories?: boolean;
  basket?: boolean;
}) {
  const basketTotal = 2;

  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-[rgba(0,0,0,0.8)] px-4 lg:hidden">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-9">
            <Image fill src="/logo.png" alt="" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">Picsale</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {wishlist && (
          <Link href="/wishlist">
            <LuHeart size={28} />
          </Link>
        )}
        {categories && (
          <Link href="/categories">
            <LuSearch size={28} />
          </Link>
        )}
        {basket && (
          <Link className="flex flex-1" href="/">
            <div className="flex w-full flex-col items-center">
              <div className="relative">
                <div className="text-white">
                  <LuShoppingBasket size={28} />
                </div>
                {basketTotal > 0 && (
                  <div className="absolute right-[-8px] top-[-6px] flex size-5 items-center justify-center rounded-full bg-blue-500">
                    <p className="text-sm font-medium text-white">
                      {basketTotal}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
