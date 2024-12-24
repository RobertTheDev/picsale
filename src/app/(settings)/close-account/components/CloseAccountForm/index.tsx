'use client';

import FormPasswordInput from '@/app/layout/Form/FormPasswordInput';
import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import FormSuccessMessage from '@/app/layout/Form/FormSuccessMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { closeAccountSchema, CloseAccountSchemaType } from './schema';

export default function CloseAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CloseAccountSchemaType>({
    resolver: zodResolver(closeAccountSchema),
  });

  const onSubmit = (data: CloseAccountSchemaType) => {
    alert(JSON.stringify(data));
  };

  const formSuccess = false;

  return (
    <div>
      {formSuccess ? (
        <FormSuccessMessage messageText="Account successfully closed" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col p-12"
        >
          <div>
            <h3 className="text-3xl font-bold">Close Account</h3>
            <p className="mt-4">
              Your account will be permanently deleted along with its data. You
              will lose all of your progresses, favorites, certificates, history
              and profile information.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">
              <FormPasswordInput
                id="currentPassword"
                label="Current password"
                placeholder="Enter your password"
                autoComplete="current-password"
                register={register}
                error={errors.password}
              />
            </div>

            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton
                destructive
                labelText="Close Account"
                loading={false}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
