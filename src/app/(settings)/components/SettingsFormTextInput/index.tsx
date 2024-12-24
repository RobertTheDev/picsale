'use client';

import { FieldError, UseFormRegister } from 'react-hook-form';

interface SettingsFormTextInputProps {
  id: string;
  label: string;
  placeholder: string;
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

export default function SettingsFormTextInput({
  id,
  label,
  placeholder,
  error,
  register,
}: SettingsFormTextInputProps) {
  return (
    <div className="mt-8 flex w-full flex-col">
      <label htmlFor={id} className="text-sm font-semibold text-white">
        {label}
      </label>
      <div className="mt-3">
        <input
          id={id}
          type="text"
          {...register(id)}
          placeholder={placeholder}
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
