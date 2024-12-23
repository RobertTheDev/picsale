'use client';

import SettingsFormEmailInput from '@/app/(settings)/components/SettingsFormEmailInput';
import SettingsFormPasswordInput from '@/app/(settings)/components/SettingsFormPasswordInput';
import SettingsFormSubmitButton from '@/app/(settings)/components/SettingsFormSubmitButton';
import { AuthModalContext } from '@/app/contexts/AuthModal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LuX } from 'react-icons/lu';
import { SignUpFormSchema, SignUpFormSchemaType } from './login.schema';

export default function SignUpForm() {
  const { authModal, setAuthModal } = useContext(AuthModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = (data: SignUpFormSchemaType) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-1 items-center justify-start" />

        <div className="items-center justify-center">
          <p className="text-2xl font-bold">Sign Up</p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <button
            className="flex items-center justify-center rounded-full bg-neutral-800 p-2"
            onClick={() => setAuthModal({ active: false, formType: null })}
          >
            <LuX size={20} />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 flex h-auto flex-col px-12"
        >
          <div className="flex flex-col">
            <div className="mt-8">
              <SettingsFormEmailInput
                register={register}
                error={errors.email}
              />
            </div>

            <div className="mt-8">
              <SettingsFormPasswordInput
                id="password"
                label="Password"
                placeholder="Enter your password"
                autoComplete="current-password"
                register={register}
                error={errors.password}
              />
            </div>

            <div className="mt-8">
              <SettingsFormSubmitButton loading={false} labelText="Sign Up" />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4 flex w-full flex-col items-center">
        <div className="mt-8 flex items-center justify-center">
          <p>
            Already have an account?{' '}
            <button
              onClick={() => {
                setAuthModal({ ...authModal, formType: 'signIn' });
              }}
              className="font-medium text-blue-400 hover:text-blue-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
