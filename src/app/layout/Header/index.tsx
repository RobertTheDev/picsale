import company from '@/app/lib/company';
import Image from 'next/image';
import Link from 'next/link';
import { LuShoppingBasket } from 'react-icons/lu';
import HeaderProfileMenu from './components/HeaderProfileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center bg-white">
      <div className="flex w-full items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="relative size-8">
                  <Image fill src="/logo.png" alt="" />
                </div>
                <div>
                  <p className="text-xl font-bold">
                    {company.name.toLowerCase()}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/about">How it works</Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Link href="/basket">
              <div className="relative">
                <div className="absolute right-[-6px] top-[-6px] flex size-4 items-center justify-center rounded-full bg-blue-600">
                  <p className="text-sm text-white">4</p>
                </div>
                <div>
                  <LuShoppingBasket size={24} />
                </div>
              </div>
            </Link>
          </div>
          <HeaderProfileMenu />
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
