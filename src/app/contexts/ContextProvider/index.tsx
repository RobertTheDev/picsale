import { ReactNode } from 'react';
import { AuthModalProvider } from '../AuthModal';

export default function ContextProvider({ children }: { children: ReactNode }) {
  return <AuthModalProvider>{children}</AuthModalProvider>;
}
