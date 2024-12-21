import { ReactNode } from 'react';
import SettingsMenu from './components/SettingsMenu';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full">
      <aside className="fixed top-0 hidden h-screen pt-16 md:flex md:w-80 2xl:w-80">
        <SettingsMenu />
      </aside>
      <div className="flex w-full flex-1 flex-col md:ml-80 2xl:ml-96">
        {children}
      </div>
    </main>
  );
}
