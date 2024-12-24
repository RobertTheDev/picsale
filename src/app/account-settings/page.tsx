import { Metadata } from 'next';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import accountSettingsLinks from './lib/accountSettingsLinks';

export const metadata: Metadata = {
  title: 'Account Settings',
};

export default function AccountSettingsPage() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Account Settings</h1>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        {accountSettingsLinks.map((link) => {
          return (
            <Link
              className="flex items-center justify-between rounded-xl bg-neutral-800 p-4"
              key={link.id}
              href={`/${link.slug}`}
            >
              <div className="flex items-center gap-5">
                {link.icon}
                <p>{link.name}</p>
              </div>

              <LuChevronRight size={28} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
