'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const categories = [
  {
    name: 'Wildlife',
    href: 'wildlife',
  },
  {
    name: 'Home',
    href: 'home',
  },
];

export default function PhotoFilterMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex flex-col">
      {categories.map((category) => {
        return (
          <button
            key={category.href}
            onClick={() => {
              router.push(
                pathname + '?' + createQueryString('category', category.href),
              );
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
