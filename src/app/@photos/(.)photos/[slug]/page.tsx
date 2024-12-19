'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [pathName]);

  return (
    <div className="fixed left-0 top-0 z-[66] flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white">
        <h1>Photos {params.slug}</h1>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
