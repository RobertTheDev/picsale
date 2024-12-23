'use client';

import SettingsFormSubmitButton from '@/app/(settings)/components/SettingsFormSubmitButton';
import SettingsFormSuccessMessage from '@/app/(settings)/components/SettingsFormSuccessMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuUser } from 'react-icons/lu';
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

  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to the hidden file input
  const [image, setImage] = useState<string | null>(profile.avatar); // State to hold the preview image URL

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setValue('avatar', file, { shouldValidate: true }); // Set the File object
    }
  };

  useEffect(() => {
    if (typeof profile.avatar === 'string') {
      setValue('avatar', profile.avatar, { shouldValidate: false });
      setImage(profile.avatar); // Display the URL string
    }
  }, [profile.avatar, setValue]);

  const handlePlaceholderClick = () => {
    fileInputRef.current?.click(); // Trigger the hidden file input click
  };

  return (
    <div>
      {formSuccess ? (
        <SettingsFormSuccessMessage messageText="Email successfully changed" />
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
            <div className="mt-8">
              <div className="flex w-full flex-col">
                <label
                  htmlFor="avatar"
                  className="text-sm font-semibold text-white"
                >
                  Avatar
                </label>
                <button
                  type="button"
                  onClick={handlePlaceholderClick}
                  className={`relative mt-4 h-32 w-32 cursor-pointer rounded-full border-2 ${
                    errors.avatar ? 'border-red-600' : 'border-neutral-600'
                  }`}
                >
                  {!image ? (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-600 text-white">
                      <LuUser size={60} />
                    </div>
                  ) : (
                    <Image
                      fill
                      src={image}
                      alt="Uploaded"
                      className="h-full w-full rounded-full object-cover"
                    />
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                {errors.avatar && (
                  <p className="mt-3 text-sm font-medium text-red-500">
                    {errors.avatar.message}
                  </p>
                )}
              </div>
            </div>

            {/* First Name */}
            <div className="mt-8">
              <div className="flex w-full flex-col">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-white"
                >
                  First Name
                </label>
                <div className="mt-3">
                  <input
                    id="firstName"
                    type="text"
                    {...register('firstName')}
                    placeholder="Please enter your first name"
                    className={`w-full rounded-md border-2 bg-neutral-800 ${
                      errors.firstName ? 'border-red-500' : 'border-neutral-500'
                    } p-3 outline-none hover:border-neutral-400 ${
                      errors.firstName
                        ? 'focus:border-red-500'
                        : 'focus:border-neutral-200'
                    }`}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-3 text-sm font-medium text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Last Name */}
            <div className="mt-8">
              <div className="flex w-full flex-col">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-white"
                >
                  Last Name
                </label>
                <div className="mt-3">
                  <input
                    id="lastName"
                    type="text"
                    {...register('lastName')}
                    placeholder="Please enter your last name"
                    className={`w-full rounded-md border-2 bg-neutral-800 ${
                      errors.lastName ? 'border-red-500' : 'border-neutral-500'
                    } p-3 outline-none hover:border-neutral-400 ${
                      errors.lastName
                        ? 'focus:border-red-500'
                        : 'focus:border-neutral-200'
                    }`}
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-3 text-sm font-medium text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

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
