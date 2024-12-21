import IPhoto from '@/app/interfaces/Photo';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotoProductCard({ photo }: { photo: IPhoto }) {
  return (
    <Link href={`/photos/${photo.id}`}>
      <li className="relative w-full">
        <div className="relative aspect-square w-full">
          <Image
            loading="eager"
            className="object-cover"
            fill
            alt=""
            src={`/photos/${photo.url}`}
          />
        </div>
      </li>
    </Link>
  );
}
