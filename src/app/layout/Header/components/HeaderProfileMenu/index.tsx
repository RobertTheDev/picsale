'use client';

import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import Image from 'next/image';
import Link from 'next/link';
import { LuUser } from 'react-icons/lu';
import profileMenuLinks from './profileMenuLinks';

export default function HeaderProfileMenu() {
  const { isActive, toggleActive, toggleRef, targetRef } = useOutsideClick();

  return (
    <div className="relative">
      <button ref={toggleRef} onClick={toggleActive}>
        <LuUser size={28} />
      </button>
      {isActive && (
        <div
          ref={targetRef}
          className="absolute right-0 top-12 flex w-80 flex-col items-center rounded-lg bg-white p-8 shadow-md"
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image fill alt="" src="/avatar.jpg" />
              </div>
              <p className="mt-2">Robert</p>
            </div>
            <div className="mt-8">
              <ul className="flex flex-col gap-8">
                {profileMenuLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link className="flex items-center" href={link.href}>
                        <div className="flex items-center gap-4">
                          {link.icon}
                          <p>{link.name}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-8">
              <p className="underline">Sign Out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
