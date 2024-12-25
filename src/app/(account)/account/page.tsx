import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import TabBar from '../../layout/TabBar';
import accountMenuLinks from './accountMenuLinks';

export default function AccountPage() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="relative size-32 overflow-hidden rounded-full">
            <Image fill className="object-cover" alt="" src={'/avatar.jpg'} />
          </div>
          <p className="mt-4 text-2xl font-bold text-white">Robert Hawker</p>
        </div>
        <div className="mt-8 flex w-full flex-col items-center overflow-hidden rounded-lg">
          <ul className="flex w-full flex-col items-center bg-neutral-800">
            {accountMenuLinks.map((link) => {
              return (
                <li
                  key={link.href}
                  className="w-full border-b-[1px] border-b-neutral-600 last:border-b-0"
                >
                  <Link
                    className="flex h-12 w-full items-center justify-between px-4"
                    href={link.href}
                  >
                    <div className="flex items-center gap-5">
                      {link.icon}
                      <p>{link.name}</p>
                    </div>
                    <div>
                      <LuChevronRight size={24} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button type="button" className="mt-8 text-red-500">
            Log out
          </button>
        </div>
      </div>
      <TabBar />
    </main>
  );
}
