'use client';

import { useRouter } from 'next/navigation';
import { LuX } from 'react-icons/lu';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="flex size-10 items-center justify-center rounded-full bg-gray-200"
      onClick={() => {
        router.back();
      }}
    >
      <LuX size={20} />
    </button>
  );
}
