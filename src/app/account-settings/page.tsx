import { Metadata } from 'next';
import Link from 'next/link';
import {
  LuChevronRight,
  LuLock,
  LuMail,
  LuMailCheck,
  LuPencil,
  LuTrash,
} from 'react-icons/lu';

const accountSettingsLinks = [
  {
    id: 1,
    name: 'Edit Profile',
    slug: 'edit-profile',
    icon: <LuPencil size={20} />,
  },
  {
    id: 2,
    name: 'Change Email',
    slug: 'change-email',
    icon: <LuMail size={20} />,
  },
  {
    id: 3,
    name: 'Change Password',
    slug: 'change-password',
    icon: <LuLock size={20} />,
  },
  {
    id: 4,
    name: 'Verify Email',
    slug: 'verify-email',
    icon: <LuMailCheck size={20} />,
  },
  {
    id: 5,
    name: 'Close Account',
    slug: 'close-account',
    icon: <LuTrash size={20} />,
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
