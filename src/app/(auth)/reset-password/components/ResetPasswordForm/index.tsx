'use client';

import FormPasswordInput from '@/app/layout/Form/FormPasswordInput';
import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import FormSuccessMessage from '@/app/layout/Form/FormSuccessMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  ResetPasswordFormSchema,
  ResetPasswordFormSchemaType,
} from './resetPassword.schema';

export default function ResetPasswordForm() {
  // const searchParams = useSearchParams();
  // const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormSchemaType>({
    resolver: zodResolver(ResetPasswordFormSchema),
  });

  const onSubmit = (data: ResetPasswordFormSchemaType) => {
    alert(JSON.stringify(data));
  };

  const formSuccess = false;

  return (
    <div className="w-full">
      {formSuccess ? (
        <FormSuccessMessage messageText="Password successfully reset. You can now login again." />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-16 flex h-auto w-full flex-col px-8"
        >
          <div>
            <h3 className="text-3xl font-bold">Reset Password</h3>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">
              <FormPasswordInput
                id="password"
                label="Password"
                placeholder="Enter your new password"
                autoComplete="new-password"
                register={register}
                error={errors.password}
              />
            </div>
            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton labelText="Reset Password" loading={false} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
