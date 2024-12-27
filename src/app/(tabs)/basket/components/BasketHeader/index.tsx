import convertToPrice from '@/app/helpers/convertToPrice';
import Link from 'next/link';

export default function BasketHeader({
  basketAmount,
}: {
  basketAmount: number;
}) {
  return (
    <div className="sticky top-0 z-40 flex flex-col bg-black px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Your Basket</h1>
        <p>Total: £{convertToPrice(basketAmount)}</p>
      </div>
      <Link
        href="/"
        className="mt-3 flex h-12 w-full items-center justify-center rounded-lg bg-blue-500 font-semibold hover:bg-blue-600"
      >
        Go To Checkout
      </Link>
    </div>
  );
}
