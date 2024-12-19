import { photos } from '@/app/data/photos';
import Image from 'next/image';

export default function PhotoPage({ params }: { params: { slug: string } }) {
  const photo = photos.find((photo) => photo.id === params.slug);

  return (
    <main>
      <div className="relative h-96 w-96">
        <Image fill objectFit="cover" alt="" src={`/photos/${photo?.url}`} />
      </div>
    </main>
  );
}
