import { LuCog, LuHeart, LuHistory, LuImages, LuLogOut } from 'react-icons/lu';

const profileMenuLinks = [
  {
    href: '/purchases',
    icon: <LuHistory size={20} />,
    name: 'Purchases',
  },
  {
    href: '/wishlist',
    icon: <LuHeart size={20} />,
    name: 'Wishlist',
  },
  {
    href: '/my-listings',
    icon: <LuImages size={20} />,
    name: 'My Listings',
  },
  {
    href: '/account-settings',
    icon: <LuCog size={20} />,
    name: 'Account Settings',
  },
  {
    href: '/logouts',
    icon: <LuLogOut size={20} />,
    name: 'Logout',
  },
];

export default profileMenuLinks;
