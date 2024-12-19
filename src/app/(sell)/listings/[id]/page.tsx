import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Photo',
};

export default function EditPhotoPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Photo {params.id}</h1>
    </main>
  );
}
