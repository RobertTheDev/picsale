'use client';

import SettingsFormImageInput from '@/app/(settings)/components/SettingsFormImageInput';
import SettingsFormSubmitButton from '@/app/(settings)/components/SettingsFormSubmitButton';
import SettingsFormSuccessMessage from '@/app/(settings)/components/SettingsFormSuccessMessage';
import SettingsFormTextInput from '@/app/(settings)/components/SettingsFormTextInput';
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
        <SettingsFormSuccessMessage messageText="Profile successfully updated" />
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
            <SettingsFormImageInput
              id="avatar"
              label="Avatar"
              placeholderIcon="LuUser"
              error={errors.avatar}
              register={register}
              setValue={setValue}
            />

            {/* First Name */}
            <SettingsFormTextInput
              id="firstName"
              label="First Name"
              placeholder="Please enter your first name"
              error={errors.firstName}
              register={register}
            />

            {/* Last Name */}
            <SettingsFormTextInput
              id="lastName"
              label="Last Name"
              placeholder="Please enter your last name"
              error={errors.lastName}
              register={register}
            />

            {/* Submit Button */}
            <div className="mt-8 flex flex-1 flex-col">
              <SettingsFormSubmitButton
                labelText="Update Profile"
                loading={false}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
