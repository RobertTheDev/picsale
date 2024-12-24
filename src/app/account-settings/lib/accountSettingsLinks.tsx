import { LuLock, LuMail, LuMailCheck, LuPencil, LuTrash } from 'react-icons/lu';

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

export default accountSettingsLinks;
