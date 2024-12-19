import IPhoto from '@/app/interfaces/Photo';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotoProductCard({ photo }: { photo: IPhoto }) {
  return (
    <li className="w-full">
      <Link href={`/photos/${photo.id}`}>
        <div className="relative aspect-square w-full">
          <Image fill objectFit="cover" alt="" src={`/photos/${photo.url}`} />
        </div>
      </Link>
    </li>
  );
}
