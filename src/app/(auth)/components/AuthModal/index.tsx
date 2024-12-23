'use client';

import { AuthModalContext } from '@/app/contexts/AuthModal';
import { useContext, useEffect } from 'react';
import ForgotPasswordForm from '../ForgotPasswordForm';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';

export default function AuthModal() {
  const { authModal } = useContext(AuthModalContext);

  useEffect(() => {
    if (authModal.active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [authModal]);

  if (!authModal.active) return null;

  return (
    <div className="fixed left-0 top-0 z-[999] flex min-h-screen min-w-full flex-col items-center bg-[rgba(0,0,0,0.4)] pt-20">
      <div className="flex w-3/5 flex-col items-center rounded-2xl bg-neutral-950 p-16">
        {authModal.formType === 'forgotPassword' && <ForgotPasswordForm />}
        {authModal.formType === 'signUp' && <SignUpForm />}
        {authModal.formType === 'signIn' && <LoginForm />}
      </div>
    </div>
  );
}
