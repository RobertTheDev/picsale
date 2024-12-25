import { photos } from '@/app/data/photos';
import TabBar from '@/app/layout/TabBar';
import { Metadata } from 'next';
import PurchaseCard from './components/PurchaseCard';

export const metadata: Metadata = {
  title: 'Purchases',
};

export default function PurchasesPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <main className="flex w-full flex-col px-4">
        <div>
          <h2 className="mt-8 text-3xl font-bold text-white">My Photos</h2>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-8">
          {photos.map((photo) => (
            <PurchaseCard key={photo.id} props={photo} />
          ))}
        </div>
      </main>
      <TabBar />
    </div>
  );
}
