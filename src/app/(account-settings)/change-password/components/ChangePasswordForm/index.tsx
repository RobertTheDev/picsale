'use client';

import FormPasswordInput from '@/app/layout/Form/FormPasswordInput';
import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import FormSuccessMessage from '@/app/layout/Form/FormSuccessMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { changePasswordSchema, ChangePasswordSchemaType } from './schema';

export default function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordSchemaType) => {
    alert(JSON.stringify(data));
  };

  const formSuccess = false;

  return (
    <div>
      {formSuccess ? (
        <FormSuccessMessage messageText="Password successfully changed" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col p-12"
        >
          <div>
            <h3 className="text-3xl font-bold">Change Password</h3>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">
              <FormPasswordInput
                id="currentPassword"
                label="Current password"
                placeholder="Enter your current password"
                autoComplete="current-password"
                register={register}
                error={errors.currentPassword}
              />
            </div>
            <div className="mt-8">
              <FormPasswordInput
                id="newPassword"
                label="New password"
                placeholder="Enter your new password"
                autoComplete="new-password"
                register={register}
                error={errors.newPassword}
              />
            </div>
            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton labelText="Change Password" loading={false} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
