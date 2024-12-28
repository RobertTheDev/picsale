import MobileSearchHeader from '@/app/(tabs)/(home)/components/MobileSearchHeader';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col">
        <MobileSearchHeader basket />
        <main className="flex w-full flex-col">{children}</main>
      </div>
    </div>
  );
}
