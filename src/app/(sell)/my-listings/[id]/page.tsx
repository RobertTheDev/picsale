import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Photo',
};

export default function EditPhotoPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1>Photo {params.id}</h1>
        <div>
          <button className="bg-red-600 text-white">Delete Photo</button>
        </div>
      </div>
    </main>
  );
}
