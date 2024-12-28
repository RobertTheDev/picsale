import { Metadata } from 'next';
import AccountMenu from './components/AccountMenu';

export const metadata: Metadata = {
  title: 'Account',
};

export default function AccountPage() {
  return (
    <main className="flex w-full flex-col items-center">
      <AccountMenu />
    </main>
  );
}
