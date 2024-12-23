'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

// Define the shape of the context
interface AuthModalContextType {
  authModal: { active: boolean; formType: string | null };
  setAuthModal: Dispatch<
    SetStateAction<{ active: boolean; formType: string | null }>
  >;
}

// Create the context with a default value
export const AuthModalContext = createContext<AuthModalContextType>({
  authModal: { active: false, formType: null },
  setAuthModal: () => {},
});

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [authModal, setAuthModal] = useState<{
    active: boolean;
    formType: string | null;
  }>({
    active: false,
    formType: null,
  });

  return (
    <AuthModalContext.Provider value={{ authModal, setAuthModal }}>
      {children}
    </AuthModalContext.Provider>
  );
}
