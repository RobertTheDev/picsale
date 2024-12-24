import { ReactNode } from 'react';
import SettingsMenu from './components/SettingsMenu';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex w-full">
      <aside className="fixed top-0 hidden h-screen pt-16 md:flex md:w-80">
        <SettingsMenu />
      </aside>
      <div className="mt-8 flex w-full flex-1 flex-col items-center px-4 md:ml-80">
        <div className="w-full overflow-hidden rounded-lg bg-neutral-900 md:w-3/5">
          {children}
        </div>
      </div>
    </main>
  );
}
