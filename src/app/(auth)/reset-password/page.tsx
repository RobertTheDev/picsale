'use client';

import { Suspense } from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center">
      <Suspense>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
