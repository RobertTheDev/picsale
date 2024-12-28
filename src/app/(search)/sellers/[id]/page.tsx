import { sellers } from '@/app/data/sellers';
import { Metadata } from 'next';
import SellerDetail from './components/SellerDetail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  if (!id) {
    throw new Error('ID parameter is required');
  }

  const seller = sellers.find((seller) => seller.id === id);

  return {
    title: seller ? `${seller.firstName} ${seller.lastName}` : 'Seller',
  };
}

export default async function SellersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) {
    throw new Error('ID parameter is required');
  }

  const seller = sellers.find((seller) => seller.id === id);

  return (
    <main className="flex w-full flex-col">
      <SellerDetail seller={seller} />
    </main>
  );
}
