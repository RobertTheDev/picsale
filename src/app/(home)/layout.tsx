import { ReactNode } from 'react';
import TabBar from '../layout/TabBar';
import MobileSearchHeader from './components/MobileSearchHeader';
import PhotoFilterMenu from './components/PhotoFilterMenu';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <aside className="fixed top-0 hidden h-screen pt-16 md:flex md:w-80 2xl:w-80">
        <PhotoFilterMenu />
      </aside>
      <div className="flex w-full flex-col">
        <MobileSearchHeader />
        <main className="flex w-full flex-col md:ml-80 2xl:ml-96">
          {children}
        </main>
        <TabBar />
      </div>
    </div>
  );
}
