'use client';

import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import Image from 'next/image';
import Link from 'next/link';
import { LuCog, LuHeart, LuHistory, LuImages, LuUser } from 'react-icons/lu';

export default function HeaderProfileMenu() {
  const { targetActive, toggleTarget, toggleRef, targetRef } =
    useOutsideClick();

  return (
    <div className="relative">
      <button ref={toggleRef} onClick={toggleTarget}>
        <LuUser size={24} />
      </button>
      {targetActive && (
        <div
          ref={targetRef}
          className="absolute right-0 top-20 flex w-64 flex-col items-center rounded-lg bg-white p-8 shadow-md"
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image fill alt="" src="/avatar.jpg" />
              </div>
              <p className="mt-2">Robert</p>
            </div>
            <div className="mt-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link className="flex items-center" href="/purchases">
                    <div className="flex items-center gap-2">
                      <LuHistory size={20} />
                      <p>Purchases</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center" href="/edit-profile">
                    <div className="flex items-center gap-2">
                      <LuCog size={20} />
                      <p>Account Settings</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center" href="/wishlist">
                    <div className="flex items-center gap-2">
                      <LuHeart size={20} />
                      <p>Wishlist</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center" href="/my-listings">
                    <div className="flex items-center gap-2">
                      <LuImages size={20} />
                      <p>My Listings</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="underline">Sign Out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
