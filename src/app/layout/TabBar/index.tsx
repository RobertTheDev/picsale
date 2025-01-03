import TabBarLink from './components/TabBarLink';
import { tabBarLinks } from './lib/tabBarLinks';

export default function TabBar() {
  return (
    <div className="fixed bottom-0 flex h-14 w-full items-center rounded-t-2xl bg-neutral-900 lg:hidden">
      {tabBarLinks.map((tabBarLink) => {
        return <TabBarLink key={tabBarLink.href} tabBarLink={tabBarLink} />;
      })}
    </div>
  );
}
