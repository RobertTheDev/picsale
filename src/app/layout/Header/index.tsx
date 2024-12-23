import company from '@/app/lib/company';
import Image from 'next/image';
import Link from 'next/link';
import { LuShoppingBasket } from 'react-icons/lu';
import HeaderProfileMenu from './components/HeaderProfileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center bg-[rgba(0,0,0,0.85)] shadow-md">
      <div className="flex w-full items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
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
          <div className="hidden md:flex">
            <Link href="/about">How it works</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Link href="/basket">
              <div className="relative">
                <div className="absolute right-[-8px] top-[-8px] flex size-5 items-center justify-center rounded-full bg-[#0d95e1]">
                  <p className="text-sm font-medium text-white">9</p>
                </div>

                <div>
                  <LuShoppingBasket size={28} />
                </div>
              </div>
            </Link>
          </div>
          <HeaderProfileMenu />
          <div>
            <Link
              href="/sign-in"
              className="flex items-center justify-center rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
