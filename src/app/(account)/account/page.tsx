import Image from 'next/image';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import profileMenuLinks from '../../layout/Header/components/HeaderProfileMenu/profileMenuLinks';
import TabBar from '../../layout/TabBar';

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
                    className="flex h-12 w-full items-center justify-between rounded-lg bg-neutral-800 px-4 hover:bg-gray-800"
                    href={link.href}
                  >
                    <div className="flex items-center gap-5">
                      {link.icon}
                      <p>{link.name}</p>
                    </div>
                    <div>
                      <LuChevronRight size={28} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <TabBar />
    </main>
  );
}
