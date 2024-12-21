import { Metadata } from 'next';
import SignInForm from './components/SignInForm';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
    <main>
      <h1>Sign In</h1>
      <SignInForm />
    </main>
  );
}
