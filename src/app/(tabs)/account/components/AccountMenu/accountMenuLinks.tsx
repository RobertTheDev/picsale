import { LuLock, LuMail, LuMailCheck, LuTrash } from 'react-icons/lu';

const accountMenuLinks = [
  {
    name: 'Change Email',
    href: '/change-email',
    icon: <LuMail size={24} />,
  },
  {
    name: 'Change Password',
    href: '/change-password',
    icon: <LuLock size={24} />,
  },
  {
    name: 'Verify Email',
    href: '/verify-email',
    icon: <LuMailCheck size={24} />,
  },
  {
    name: 'Close Account',
    href: '/close-account',
    icon: <LuTrash size={24} />,
  },
];

export default accountMenuLinks;
