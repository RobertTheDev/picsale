'use client';

import FormEmailInput from '@/app/layout/Form/FormEmailInput';
import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormSuccessMessage from '../../../layout/Form/FormSuccessMessage';
import { verifyEmailSchema, VerifyEmailSchemaType } from './schema';

export default function VerifyEmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailSchemaType>({
    resolver: zodResolver(verifyEmailSchema),
  });

  const onSubmit = (data: VerifyEmailSchemaType) => {
    alert(JSON.stringify(data));
  };

  const formSuccess = false;

  return (
    <div>
      {formSuccess ? (
        <FormSuccessMessage messageText="Email successfully verified" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col p-12"
        >
          <div>
            <h3 className="text-3xl font-bold">Verify Email</h3>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">
              <FormEmailInput register={register} error={errors.email} />
            </div>
            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton labelText="Verify Email" loading={false} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
