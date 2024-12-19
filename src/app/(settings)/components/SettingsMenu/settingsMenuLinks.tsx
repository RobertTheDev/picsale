import {
  LuCreditCard,
  LuKey,
  LuLink,
  LuLogOut,
  LuMail,
  LuMailCheck,
  LuShieldCheck,
  LuUser,
  LuUserX,
} from 'react-icons/lu';

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
    href: '/setup-mfa',
    icon: <LuShieldCheck size={20} />,
    label: 'Set Up MFA',
  },
  {
    href: '/connected-accounts',
    icon: <LuLink size={20} />,
    label: 'Connected Accounts',
  },
  {
    href: '/manage-payment-methods',
    icon: <LuCreditCard size={20} />,
    label: 'Payment Methods',
  },
  {
    href: '/close-account',
    icon: <LuUserX size={20} />,
    label: 'Close Account',
  },
  { href: '/logout', icon: <LuLogOut size={20} />, label: 'Log Out' },
];
