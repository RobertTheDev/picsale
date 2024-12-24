'use client';

import FormImageInput from '@/app/layout/Form/FormImageInput';
import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import FormSuccessMessage from '@/app/layout/Form/FormSuccessMessage';
import FormTextInput from '@/app/layout/Form/FormTextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { editProfileSchema, EditProfileSchemaType } from './schema';

export default function EditProfileForm() {
  const profile = {
    avatar: null,
    firstName: 'Sean',
    lastName: 'Moses',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditProfileSchemaType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      avatar: undefined, // Start with no File selected
    },
  });

  const onSubmit = (data: EditProfileSchemaType) => {
    const avatarFileName =
      typeof data.avatar === 'string'
        ? data.avatar // Use the string URL if it's not a File
        : data.avatar?.name || undefined;

    alert(
      JSON.stringify({
        ...data,
        avatar: avatarFileName, // Replace the File object with the file name
      }),
    );
  };

  const formSuccess = false;

  useEffect(() => {
    if (typeof profile.avatar === 'string') {
      setValue('avatar', profile.avatar, { shouldValidate: false });
    }
  }, [profile.avatar, setValue]);

  return (
    <div>
      {formSuccess ? (
        <FormSuccessMessage messageText="Profile successfully updated" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col p-12"
        >
          <div>
            <h3 className="text-3xl font-bold">Update Profile</h3>
          </div>
          <div className="flex flex-col">
            {/* Avatar Upload */}
            <FormImageInput
              id="avatar"
              label="Avatar"
              placeholderIcon="LuUser"
              error={errors.avatar}
              register={register}
              setValue={setValue}
            />

            {/* First Name */}
            <FormTextInput
              id="firstName"
              label="First Name"
              placeholder="Please enter your first name"
              error={errors.firstName}
              register={register}
            />

            {/* Last Name */}
            <FormTextInput
              id="lastName"
              label="Last Name"
              placeholder="Please enter your last name"
              error={errors.lastName}
              register={register}
            />

            {/* Submit Button */}
            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton labelText="Update Profile" loading={false} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
