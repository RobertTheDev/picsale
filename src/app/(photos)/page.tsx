import { photos } from '../data/photos';
import PhotoProductCard from './components/PhotoProductCard';

export default function PhotosPage() {
  return (
    <main className="w-full bg-gray-50">
      <ul className="grid w-full grid-cols-4 gap-8 p-8">
        {photos.map((photo) => {
          return <PhotoProductCard key={photo.id} photo={photo} />;
        })}
      </ul>
    </main>
  );
}
