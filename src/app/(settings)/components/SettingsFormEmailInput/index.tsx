'use client';

import { FieldError, UseFormRegister } from 'react-hook-form';

interface EmailInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function SettingsFormEmailInput({
  register,
  error,
}: EmailInputProps) {
  return (
    <div className="flex w-full flex-col">
      <label htmlFor="email" className="text-sm font-semibold text-white">
        Email address
      </label>
      <div className="mt-3">
        <input
          id="email"
          type="email"
          {...register('email')}
          autoComplete="email"
          placeholder="name@placeholder.com"
          className={`w-full rounded-md border-2 bg-neutral-800 ${
            error ? 'border-red-500' : 'border-neutral-500'
          } p-3 outline-none hover:border-neutral-400 ${
            error ? 'focus:border-red-500' : 'focus:border-neutral-200'
          }`}
        />
      </div>
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500">{error.message}</p>
      )}
    </div>
  );
}
