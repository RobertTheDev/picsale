import { Metadata } from 'next';
import VerifyEmailForm from '../components/VerifyEmailForm';

export const metadata: Metadata = {
  title: 'Verify Email',
};

export default function VerifyEmailPage() {
  return <VerifyEmailForm />;
}
