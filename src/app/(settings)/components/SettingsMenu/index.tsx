import Link from 'next/link';
import { settingsMenuLinks } from './settingsMenuLinks';

export default function SettingsMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      {settingsMenuLinks.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-5 rounded-lg px-5 py-3 hover:bg-neutral-800"
        >
          {icon}
          <p className="text-base font-medium">{label}</p>
        </Link>
      ))}
    </div>
  );
}
