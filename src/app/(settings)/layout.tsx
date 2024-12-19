import SettingsMenu from './components/SettingsMenu';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex min-h-full w-full">
        <div className="h-full bg-gray-50">
          <SettingsMenu />
        </div>
        <div className="min-h-full flex-1 flex-col bg-white">{children}</div>
      </div>
    </div>
  );
}
