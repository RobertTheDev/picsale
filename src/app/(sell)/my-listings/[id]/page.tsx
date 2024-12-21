import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Photo',
};

export default async function EditPhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) {
    throw new Error('Id parameter is required');
  }

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Photo {id}</h1>
        <div>
          <button className="bg-red-600 text-white">Delete Photo</button>
        </div>
      </div>
    </main>
  );
}
