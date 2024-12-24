import Image from 'next/image';
import { useRef, useState } from 'react';
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { LuUser } from 'react-icons/lu';

interface FormImageInputProps {
  id: string;
  label: string;
  placeholderIcon: 'LuUser'; // Extend for more icons if needed
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}

export default function FormImageInput({
  id,
  label,
  placeholderIcon,
  error,
  setValue,
}: FormImageInputProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setValue(id, file, { shouldValidate: true });
    }
  };

  const handlePlaceholderClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mt-8 flex w-full flex-col">
      <label htmlFor={id} className="text-sm font-semibold text-white">
        {label}
      </label>
      <button
        type="button"
        onClick={handlePlaceholderClick}
        className={`relative mt-4 h-32 w-32 cursor-pointer rounded-full border-2 ${
          error ? 'border-red-600' : 'border-neutral-600'
        }`}
      >
        {!image ? (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-600 text-white">
            {placeholderIcon === 'LuUser' && <LuUser size={60} />}
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
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500">{error.message}</p>
      )}
    </div>
  );
}
