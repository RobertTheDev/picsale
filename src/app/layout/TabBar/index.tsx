import TabBarLink from './components/TabBarLink';
import { tabBarLinks } from './lib/tabBarLinks';

export default function TabBar() {
  return (
    <div className="fixed bottom-0 flex h-16 w-full items-center bg-[rgba(0,0,0,1)] lg:hidden">
      {tabBarLinks.map((tabBarLink) => {
        return <TabBarLink key={tabBarLink.href} tabBarLink={tabBarLink} />;
      })}
    </div>
  );
}
