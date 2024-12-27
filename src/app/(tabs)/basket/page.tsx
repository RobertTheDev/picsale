import { baskets } from '@/app/data/baskets';
import { Metadata } from 'next';
import BasketHeader from './components/BasketHeader';
import BasketItemCard from './components/BasketItemCard';

export const metadata: Metadata = {
  title: 'Basket',
};

export default function BasketPage() {
  const basket = baskets.find((basket) => basket.id === '1');

  if (!basket) {
    return (
      <main>
        <p>No basket</p>
      </main>
    );
  }

  if (basket.items.length < 1) {
    return (
      <main>
        <p>No items</p>
      </main>
    );
  }

  return (
    <main className="w-full bg-black">
      <BasketHeader basketAmount={basket.amount} />
      <div className="mt-8 flex w-full flex-col items-center gap-8 px-4">
        {basket.items.map((photo) => {
          return <BasketItemCard key={photo.id} basketItem={photo} />;
        })}
      </div>
    </main>
  );
}
