import MobileHeader from '@/app/layout/MobileHeader';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col">
        <MobileHeader basket />
        <main className="flex w-full flex-col">{children}</main>
      </div>
    </div>
  );
}
