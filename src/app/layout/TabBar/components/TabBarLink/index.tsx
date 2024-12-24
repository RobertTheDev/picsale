'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ITabBarLink from '../../interfaces/TabBarLink';

export default function TabBarLink({
  tabBarLink,
}: {
  tabBarLink: ITabBarLink;
}) {
  const pathName = usePathname();

  return (
    <Link className="flex flex-1" href={tabBarLink.href}>
      <div className="flex w-full flex-col items-center">
        <div className="relative">
          <div
            className={`${pathName === tabBarLink.href ? 'text-blue-500' : 'text-white'}`}
          >
            {tabBarLink.icon}
          </div>
          {tabBarLink.name === 'basket' && (
            <div className="absolute right-[-8px] top-[-6px] flex size-5 items-center justify-center rounded-full bg-blue-500">
              <p className="text-sm font-medium text-white">9</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
