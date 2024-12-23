import Image from 'next/image';
import Link from 'next/link';
import { LuSearch } from 'react-icons/lu';

export default function MobileSearchHeader() {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between bg-[rgba(0,0,0,0.8)] px-4 lg:hidden">
      <div className="flex items-center gap-2">
        <div className="relative size-9">
          <Image fill src="/logo.png" alt="" />
        </div>
        <div>
          <p className="text-lg font-bold text-white">Picsale</p>
        </div>
      </div>
      <div>
        <Link href="/categories">
          <LuSearch size={28} />
        </Link>
      </div>
    </div>
  );
}
