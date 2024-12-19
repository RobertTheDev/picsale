import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order',
};

export default function OrderPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <div className="relative h-96 w-96">
        <h1>{params.id}</h1>
      </div>
    </main>
  );
}
