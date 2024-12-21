'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuX } from 'react-icons/lu';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

export default function Page() {
  const router = useRouter();

  const [formState, setFormState] = useState('signIn');

  function handleForm(formType: string) {
    setFormState(formType);
  }

  const pathName = usePathname();

  useEffect(() => {
    if (pathName) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [pathName]);

  return (
    <div className="fixed left-0 top-0 z-[66] flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="h-3/4 w-3/4 bg-white p-8">
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-gray-200"
          onClick={() => {
            router.back();
          }}
        >
          <LuX size={16} />
        </button>
        {formState === 'signIn' && <SignInForm handleForm={handleForm} />}
        {formState === 'signUp' && <SignUpForm handleForm={handleForm} />}
        {formState === 'forgotPassword' && (
          <ForgotPasswordForm handleForm={handleForm} />
        )}
      </div>
    </div>
  );
}
