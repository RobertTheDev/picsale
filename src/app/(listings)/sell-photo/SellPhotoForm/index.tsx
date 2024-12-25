'use client';

import FormSubmitButton from '@/app/layout/Form/FormSubmitButton';
import FormSuccessMessage from '@/app/layout/Form/FormSuccessMessage';
import FormTextInput from '@/app/layout/Form/FormTextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Define the Zod schema for validation
const schema = z.object({
  category: z.string().min(1, 'Category is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.object({
    currency: z.string().min(1, 'Currency is required'),
    amount: z.number().min(1, 'Amount must be greater than 0'),
  }),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'File size should be less than 5MB',
    })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'Only JPEG and PNG images are allowed',
    })
    .optional(),
});

// Type for the form data
type FormData = z.infer<typeof schema>;

export default function SellPhotoForm() {
  const {
    // control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setImagePreview(URL.createObjectURL(acceptedFiles[0]));
      }
    },
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  const formSuccess = false;

  return (
    <div>
      {formSuccess ? (
        <FormSuccessMessage messageText="Photo successfully uploaded" />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-auto flex-col p-12"
        >
          <div>
            <h3 className="text-3xl font-bold">Sell Photo</h3>
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <div
              {...getRootProps()}
              className="cursor-pointer border-2 border-dashed p-6 text-center"
            >
              <input {...getInputProps()} />
              <p className="text-gray-500">
                Drag and drop an image, or click to select one
              </p>
            </div>
            {imagePreview && (
              <div className="relative size-20">
                <Image
                  fill
                  src={imagePreview}
                  alt="Preview"
                  className="mx-auto mt-4 max-w-xs"
                />
              </div>
            )}
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* TITLE */}
          <div className="flex flex-col">
            <div className="mt-8">
              <FormTextInput
                id="title"
                label="Name"
                placeholder="Enter name"
                register={register}
                error={errors.title}
              />
            </div>
            {/* DESCRIPTION */}
            <div className="mt-8 flex w-full flex-col">
              <label
                htmlFor={'description'}
                className="text-sm font-semibold text-white"
              >
                Description
              </label>
              <div className="mt-3">
                <textarea
                  id={'description'}
                  {...register('description')}
                  placeholder={'Enter description'}
                  className={`w-full rounded-md border-2 bg-neutral-800 ${
                    errors.description ? 'border-red-500' : 'border-neutral-500'
                  } p-3 outline-none hover:border-neutral-400 ${
                    errors.description
                      ? 'focus:border-red-500'
                      : 'focus:border-neutral-200'
                  }`}
                />
              </div>
              {errors.description && (
                <p className="mt-3 text-sm font-medium text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
            {/* CATEGORY */}
            <div className="mt-8 flex w-full flex-col">
              <label
                htmlFor={'description'}
                className="text-sm font-semibold text-white"
              >
                Category
              </label>
              <div className="mt-3">
                <select
                  id={'category'}
                  {...register('category')}
                  className={`w-full rounded-md border-2 bg-neutral-800 ${
                    errors.category ? 'border-red-500' : 'border-neutral-500'
                  } h-12 p-3 outline-none hover:border-neutral-400 ${
                    errors.category
                      ? 'focus:border-red-500'
                      : 'focus:border-neutral-200'
                  }`}
                >
                  <option>Hello</option>
                  <option>You</option>
                </select>
              </div>
              {errors.category && (
                <p className="mt-3 text-sm font-medium text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* AMOUNT */}
            <div className="mt-8 flex w-full flex-col">
              <label
                htmlFor={'currency'}
                className="text-sm font-semibold text-white"
              >
                Currency
              </label>
              <div className="mt-3">
                <select
                  id={'currency'}
                  {...register('price.currency')}
                  className={`w-full rounded-md border-2 bg-neutral-800 ${
                    errors.price?.currency
                      ? 'border-red-500'
                      : 'border-neutral-500'
                  } h-12 p-3 outline-none hover:border-neutral-400 ${
                    errors.price?.currency
                      ? 'focus:border-red-500'
                      : 'focus:border-neutral-200'
                  }`}
                >
                  <option>GBP</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              {errors.price?.currency && (
                <p className="mt-3 text-sm font-medium text-red-500">
                  {errors.price?.currency.message}
                </p>
              )}
            </div>

            {/* PRICE AMOUNT */}
            <div className="mt-8 flex w-full flex-col">
              <label
                htmlFor={'amount'}
                className="text-sm font-semibold text-white"
              >
                Amount
              </label>
              <div className="mt-3">
                <input
                  id={'amount'}
                  type="number"
                  {...register('price.amount', { valueAsNumber: true })}
                  placeholder={'Enter amount'}
                  className={`w-full rounded-md border-2 bg-neutral-800 ${
                    errors.price?.amount
                      ? 'border-red-500'
                      : 'border-neutral-500'
                  } p-3 outline-none hover:border-neutral-400 ${
                    errors.price?.amount
                      ? 'focus:border-red-500'
                      : 'focus:border-neutral-200'
                  }`}
                />
              </div>
              {errors.price?.amount && (
                <p className="mt-3 text-sm font-medium text-red-500">
                  {errors.price?.amount.message}
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-1 flex-col">
              <FormSubmitButton labelText="Upload Photo" loading={false} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
