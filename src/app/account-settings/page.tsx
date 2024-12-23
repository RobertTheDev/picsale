import { Metadata } from 'next';
import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';

const accountSettingsLinks = [
  {
    id: 1,
    title: 'Edit Profile',
    slug: 'edit-profile',
  },
  {
    id: 2,
    title: 'Change Email',
    slug: 'change-email',
  },
  {
    id: 3,
    title: 'Change Password',
    slug: 'change-password',
  },
  {
    id: 4,
    title: 'Verify Email',
    slug: 'verify-email',
  },
  {
    id: 5,
    title: 'Close Account',
    slug: 'close-account',
  },
];

export const metadata: Metadata = {
  title: 'Account Settings',
};

export default function BasketPage() {
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
              <p className="text-center">{link.title}</p>
              <LuChevronRight size={28} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
