'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import {
  ResetPasswordFormSchema,
  ResetPasswordFormSchemaType,
} from './resetPassword.schema';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormSchemaType>({
    resolver: zodResolver(ResetPasswordFormSchema),
  });

  const onSubmit = (data: ResetPasswordFormSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-16 flex h-auto w-2/5 flex-col rounded-lg border-2 border-black bg-white p-8"
    >
      <h3 className="text-base font-bold">Reset Password {token}</h3>
      <div className="mt-4 flex flex-1 flex-col">
        <label
          htmlFor="password"
          className="text-sm font-semibold text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <input
              id="password"
              {...register('password')}
              type={passwordVisibility ? 'text' : 'password'}
              placeholder="Enter your password"
              autoComplete="new-password"
              className={`w-full rounded-md border-2 ${
                errors.password ? 'border-red-600' : 'border-black'
              } p-3 text-gray-900 outline-none focus:border-blue-600`}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisibility(!passwordVisibility);
              }}
              className="h-full rounded-lg bg-gray-200 p-3"
            >
              {passwordVisibility ? (
                <LuEyeOff size={20} />
              ) : (
                <LuEye size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <div>
              <p className="text-sm font-medium text-red-600">
                {errors.password.message}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <button className="w-full rounded-md bg-blue-500 p-3 text-base font-bold text-white">
          Reset Password
        </button>
      </div>
    </form>
  );
}
