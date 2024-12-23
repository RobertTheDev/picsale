import Image from 'next/image';
import Link from 'next/link';
import { LuLogOut } from 'react-icons/lu';
import profileMenuLinks from '../layout/Header/components/HeaderProfileMenu/profileMenuLinks';

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
        <div className="mt-8 w-full">
          <ul className="flex w-full flex-col items-center gap-4">
            {profileMenuLinks.map((link) => {
              return (
                <li key={link.href} className="w-full">
                  <Link
                    className="flex h-12 w-full items-center rounded-lg bg-neutral-800 px-4 hover:bg-gray-800"
                    href={link.href}
                  >
                    <div className="flex items-center gap-5">
                      {link.icon}
                      <p>{link.name}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
            <li className="w-full">
              <button
                type="button"
                className="flex h-12 w-full items-center rounded-lg bg-neutral-800 px-4 hover:bg-gray-800"
              >
                <div className="flex items-center gap-5">
                  <LuLogOut size={20} />
                  <p>Sign Out</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
