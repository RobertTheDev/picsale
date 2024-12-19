import IPhoto from '@/app/interfaces/Photo';
import Image from 'next/image';

export default function PhotoProductCard({ photo }: { photo: IPhoto }) {
  return (
    <li className="w-full">
      <div className="relative aspect-square w-full">
        <Image fill objectFit="cover" alt="" src={`/photos/${photo.url}`} />
      </div>
    </li>
  );
}
