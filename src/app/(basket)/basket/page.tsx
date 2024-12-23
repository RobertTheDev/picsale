import { photos } from '@/app/data/photos';
import TabBar from '@/app/layout/TabBar';
import { Metadata } from 'next';
import BasketItemCard from './components/BasketItemCard';

export const metadata: Metadata = {
  title: 'Basket',
};

export default function BasketPage() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="w-full bg-neutral-900 px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Basket</h1>
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-8">
          {photos.map((photo) => {
            return <BasketItemCard key={photo.id} basketItem={photo} />;
          })}
        </div>
      </div>
      <TabBar />
    </main>
  );
}
