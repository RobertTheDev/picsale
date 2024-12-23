import Link from 'next/link';
import { LuHouse, LuImages, LuShoppingBasket, LuUser } from 'react-icons/lu';

const tabLinks = [
  {
    href: '/',
    icon: <LuHouse size={28} />,
  },
  {
    href: '/purchases',
    icon: <LuImages size={28} />,
  },
  {
    href: '/basket',
    icon: <LuShoppingBasket size={28} />,
  },
  {
    href: '/account',
    icon: <LuUser size={28} />,
  },
];

export default function TabBar() {
  return (
    <div className="fixed bottom-0 flex h-16 w-full items-center bg-[rgba(0,0,0,1)]">
      {tabLinks.map((link) => {
        return (
          <Link className="flex flex-1" href={link.href} key={link.href}>
            <div className="flex w-full flex-col items-center">
              <div>{link.icon}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
