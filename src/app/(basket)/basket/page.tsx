import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import BasketItemCard from './components/BasketItemCard';

export const metadata: Metadata = {
  title: 'Basket',
};

export default function BasketPage() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="w-full bg-neutral-900 px-8 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Your Basket</h1>
        </div>
        <div className="mt-8 flex w-full flex-col items-center gap-8 pb-20">
          {photos.map((photo) => {
            return <BasketItemCard key={photo.id} basketItem={photo} />;
          })}
        </div>
        <div className="fixed bottom-0 bg-white py-4">
          <div className="flex flex-col">
            <div className="flex h-12 items-center justify-between">
              <div>
                <p className="font-bold">Subtotal</p>
              </div>
              <div>
                <p className="font-bold">£430.00</p>
              </div>
            </div>
            <div className="mt-4 flex w-full items-center gap-4">
              <button
                type="button"
                className="h-12 w-40 overflow-hidden rounded-md bg-black font-medium text-white"
              >
                View Basket
              </button>
              <button
                type="button"
                className="h-12 w-40 overflow-hidden rounded-md bg-green-500 font-medium text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
