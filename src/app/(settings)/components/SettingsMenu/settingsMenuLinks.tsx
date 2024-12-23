import { LuKey, LuMail, LuMailCheck, LuUser, LuUserX } from 'react-icons/lu';

export const settingsMenuLinks = [
  {
    href: '/edit-profile',
    icon: <LuUser size={20} />,
    label: 'Edit Profile',
  },
  {
    href: '/change-email',
    icon: <LuMail size={20} />,
    label: 'Change Email',
  },
  {
    href: '/verify-email',
    icon: <LuMailCheck size={20} />,
    label: 'Verify Email',
  },
  {
    href: '/change-password',
    icon: <LuKey size={20} />,
    label: 'Change Password',
  },
  {
    href: '/close-account',
    icon: <LuUserX size={20} />,
    label: 'Close Account',
  },
];
