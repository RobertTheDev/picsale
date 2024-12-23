import { LuCog, LuHeart, LuHistory, LuImages } from 'react-icons/lu';

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
    href: '/edit-profile',
    icon: <LuCog size={20} />,
    name: 'Account Settings',
  },
];

export default profileMenuLinks;
