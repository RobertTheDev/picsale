'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export default function ProgressBar() {
  return (
    <AppProgressBar
      color="#0d95e1"
      delay={80}
      height="4px"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
