'use client';

import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import Link from 'next/link';
import { LuLogOut, LuUser } from 'react-icons/lu';
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
          className="absolute right-0 top-12 flex flex-col items-center rounded-lg bg-neutral-900 p-3 shadow-md"
        >
          <div className="flex flex-col items-center">
            <div>
              <ul className="flex flex-col items-center gap-2">
                {profileMenuLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className="flex h-12 w-56 items-center rounded-lg px-4 hover:bg-gray-800"
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
                <li>
                  <button
                    type="button"
                    className="flex h-12 w-56 items-center px-4 hover:bg-gray-800"
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
        </div>
      )}
    </div>
  );
}
