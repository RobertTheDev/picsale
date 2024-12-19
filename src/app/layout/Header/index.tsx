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
              <LuShoppingBasket size={20} />
            </Link>
          </div>

          <HeaderProfileMenu />
        </div>
      </div>
    </header>
  );
}
