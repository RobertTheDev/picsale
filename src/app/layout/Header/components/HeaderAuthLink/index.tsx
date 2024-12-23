'use client';

import { AuthModalContext } from '@/app/contexts/AuthModal';
import { useContext } from 'react';

export default function HeaderAuthLink() {
  const { setAuthModal } = useContext(AuthModalContext);

  return (
    <button
      onClick={() => setAuthModal({ active: true, formType: 'signIn' })}
      type="button"
      className="flex h-12 w-32 items-center justify-center rounded-full bg-neutral-800 text-base font-medium text-white hover:bg-neutral-900"
    >
      Log In
    </button>
  );
}
