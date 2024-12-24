import { Metadata } from 'next';
import ChangePasswordForm from './components/ChangePasswordForm';

export const metadata: Metadata = {
  title: 'Change Password',
};

export default function ChangePasswordPage() {
  return <ChangePasswordForm />;
}
