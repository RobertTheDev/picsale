import { LuCog, LuHeart, LuHistory, LuImages } from 'react-icons/lu';

const profileMenuLinks = [
  {
    href: '/purchases',
    icon: <LuHistory size={20} />,
    name: 'Purchases',
  },
  {
    href: '/edit-profile',
    icon: <LuCog size={20} />,
    name: 'Account Settings',
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
];

export default profileMenuLinks;
