'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignInFormValues = z.infer<typeof signInSchema>;

type EmailInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  name: string;
  error?: string;
};

function EmailInput({ register, name, error }: EmailInputProps) {
  return (
    <div className="mt-8 flex w-full flex-col">
      <div className="flex w-full flex-col">
        <div>
          <label htmlFor={name} className="text-sm font-semibold text-white">
            Email address
          </label>
        </div>
        <div className="mt-3">
          <input
            id={name}
            type="email"
            {...register(name)}
            autoComplete="email"
            placeholder="name@placeholder.com"
            className={`w-full rounded-md border-2 ${error ? 'border-red-500' : 'border-neutral-500'} bg-neutral-950 p-3 outline-none hover:border-neutral-400 focus:border-neutral-200`}
          />
        </div>
        {error && (
          <div className="mt-3">
            <p className="text-sm font-medium text-red-500">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md"
      >
        <h1 className="mb-4 text-xl font-semibold text-gray-800">Sign In</h1>

        {/* Email Field */}
        <EmailInput
          register={register}
          name="email"
          error={errors.email?.message}
        />

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Sign In
        </button>

        {/* Links */}
        <div className="mt-4 text-center text-sm">
          <Link href="/" className="text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="mt-2 text-center text-sm">
          <span className="text-gray-600">Don’t have an account? </span>
          <Link href="/" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
