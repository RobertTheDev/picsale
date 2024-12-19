'use client';

import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 z-[66] flex min-h-screen min-w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white">
        <h1>Photos {params.slug}</h1>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
