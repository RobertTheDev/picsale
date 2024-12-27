import TabBar from '@/app/layout/TabBar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col">{children}</div>
      <TabBar />
    </div>
  );
}
