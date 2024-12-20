'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';
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
    control,
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
    console.log('Form Submitted:', data);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Upload Image and Form Data</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <Controller
            name="category"
            control={control}
            defaultValue="wildlife"
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="wildlife">Wildlife</option>
                <option value="landscape">Landscape</option>
                <option value="urban">Urban</option>
              </select>
            )}
          />
          {errors.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue="Golf Course in Portugal"
            render={({ field }) => (
              <input
                {...field}
                id="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            )}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue="This is the description"
            render={({ field }) => (
              <textarea
                {...field}
                id="description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={4}
              />
            )}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700"
            >
              Currency
            </label>
            <Controller
              name="price.currency"
              control={control}
              defaultValue="GBP"
              render={({ field }) => (
                <input
                  {...field}
                  id="currency"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              )}
            />
            {errors.price?.currency && (
              <p className="text-sm text-red-500">
                {errors.price.currency?.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <Controller
              name="price.amount"
              control={control}
              defaultValue={1099}
              render={({ field }) => (
                <input
                  {...field}
                  id="amount"
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              )}
            />
            {errors.price?.amount && (
              <p className="text-sm text-red-500">
                {errors.price.amount?.message}
              </p>
            )}
          </div>
        </div>

        {/* Image Upload */}
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

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
