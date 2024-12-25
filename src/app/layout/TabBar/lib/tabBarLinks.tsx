import {
  LuHouse,
  LuImages,
  LuShoppingBasket,
  LuTag,
  LuUser,
} from 'react-icons/lu';
import type ITabBarLink from '../interfaces/TabBarLink';

export const tabBarLinks: ITabBarLink[] = [
  {
    href: '/',
    icon: <LuHouse size={28} />,
    name: 'home',
  },
  {
    href: '/purchases',
    icon: <LuImages size={28} />,
    name: 'purchases',
  },
  {
    href: '/basket',
    icon: <LuShoppingBasket size={28} />,
    name: 'basket',
  },
  {
    href: '/listings',
    icon: <LuTag size={28} />,
    name: 'listings',
  },
  {
    href: '/account',
    icon: <LuUser size={28} />,
    name: 'account',
  },
];
