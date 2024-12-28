import { Metadata } from 'next';
import { Suspense } from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Reset Password',
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center">
      <Suspense>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
