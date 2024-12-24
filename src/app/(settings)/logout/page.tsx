import { Metadata } from 'next';
import LogoutForm from './components/LogoutForm';

export const metadata: Metadata = {
  title: 'Logout',
};

export default function CloseAccountPage() {
  return <LogoutForm />;
}
