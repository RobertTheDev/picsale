import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import accountMenuLinks from './accountMenuLinks';

export default function AccountMenu() {
  return (
    <div className="flex w-full flex-col items-center px-4 py-4">
      <Link className="w-full" href={`/edit-profile`}>
        <div className="mt-8 flex w-full items-center justify-between gap-4 rounded-lg bg-neutral-900 px-4 py-4">
          <div className="flex gap-4">
            <div className="relative size-16 overflow-hidden rounded-full">
              <Image fill className="object-cover" alt="" src={'/avatar.jpg'} />
            </div>
            <p className="mt-4 text-xl font-bold text-white">Robert Hawker</p>
          </div>
          <div>
            <LuChevronRight size={24} />
          </div>
        </div>
      </Link>
      <div className="mt-8 flex w-full flex-col items-center overflow-hidden rounded-lg">
        <ul className="flex w-full flex-col items-center bg-neutral-900">
          {accountMenuLinks.map((link) => {
            return (
              <li
                key={link.href}
                className="w-full border-b-[1px] border-b-neutral-800 last:border-b-0"
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
      <div className="mt-8 h-12 w-full rounded-lg bg-neutral-900 px-4">
        <button
          type="button"
          className="flex h-full w-full items-center justify-center text-red-500"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
