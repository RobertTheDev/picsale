'use client';

import { useRef, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';

interface PasswordInputProps {
  id: string;
  label: string;
  placeholder: string;
  autoComplete: 'current-password' | 'new-password';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function FormPasswordInput({
  id,
  label,
  placeholder,
  autoComplete,
  register,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref: hookFormRef, ...restRegister } = register(id); // Extract ref from react-hook-form

  function toggleShowPassword() {
    const cursorPosition = inputRef.current?.selectionStart || 0; // Get current cursor position
    setShowPassword((prev) => !prev);
    setTimeout(() => {
      inputRef.current?.setSelectionRange(cursorPosition, cursorPosition); // Restore cursor position
    }, 0);
  }

  return (
    <div className="flex w-full flex-col">
      <label htmlFor={id} className="text-sm font-semibold text-white">
        {label}
      </label>
      <div className="mt-3">
        <div className="flex items-center gap-4">
          <input
            id={id}
            ref={(el) => {
              inputRef.current = el; // Assign ref to local inputRef
              hookFormRef(el); // Assign ref to react-hook-form
            }}
            type={showPassword ? 'text' : 'password'}
            autoComplete={autoComplete}
            placeholder={placeholder}
            {...restRegister} // Spread remaining props from register
            className={`w-full rounded-md border-2 bg-neutral-800 ${
              error ? 'border-red-500' : 'border-neutral-500'
            } p-3 outline-none hover:border-neutral-400 ${
              error ? 'focus:border-red-500' : 'focus:border-neutral-200'
            }`}
          />
          <button
            onClick={toggleShowPassword}
            onMouseDown={(e) => e.preventDefault()}
            type="button"
            className="flex size-8 items-center justify-center"
          >
            {showPassword ? <LuEyeOff size={24} /> : <LuEye size={24} />}
          </button>
        </div>
      </div>
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500">{error.message}</p>
      )}
    </div>
  );
}
