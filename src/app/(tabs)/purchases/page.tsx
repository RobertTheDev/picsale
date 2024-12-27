import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import PurchaseCard from './components/PurchaseCard';

export const metadata: Metadata = {
  title: 'Purchases',
};

export default function PurchasesPage() {
  return (
    <main className="flex w-full flex-col px-4">
      <div className="sticky top-0 z-40 flex h-16 w-full items-center justify-center bg-black">
        <h2 className="text-lg font-bold text-white">My Photos</h2>
      </div>
      <div className="mt-8 grid w-full grid-cols-1 gap-8">
        {photos.map((photo) => (
          <PurchaseCard key={photo.id} props={photo} />
        ))}
      </div>
    </main>
  );
}
