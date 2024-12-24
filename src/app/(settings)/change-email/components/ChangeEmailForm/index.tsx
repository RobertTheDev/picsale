'use client';

import FormEmailInput from '@/app/layout/Form/FormEmailInput';
import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import FormSuccessMessage from '@/app/layout/Form/FormSuccessMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { changeEmailSchema, ChangeEmailSchemaType } from './schema';

export default function ChangeEmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailSchemaType>({
    resolver: zodResolver(changeEmailSchema),
  });

  const onSubmit = (data: ChangeEmailSchemaType) => {
    alert(JSON.stringify(data));
  };

  const formSuccess = false;

  return (
    <div>
      {formSuccess ? (
        <FormSuccessMessage messageText="Email successfully changed" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col p-12"
        >
          <div>
            <h3 className="text-3xl font-bold">Change Email</h3>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">
              <FormEmailInput register={register} error={errors.email} />
            </div>
            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton labelText="Change Email" loading={false} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
