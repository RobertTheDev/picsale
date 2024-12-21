'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export default function ModalOverlay({ children }: { children: ReactNode }) {
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
    <div className="fixed left-0 top-0 z-[66] flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,0.5)] p-8">
      {children}
    </div>
  );
}
