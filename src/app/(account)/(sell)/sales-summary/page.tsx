import { Metadata } from 'next';
import Link from 'next/link';
import SalesChart from './components/SalesChart';
import SalesTable from './components/SalesTable';

export const metadata: Metadata = {
  title: 'Sales Summary',
};

export default function SalesSummary() {
  return (
    <div className="p-6">
      <div className="mb-4 mt-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sales Summary</h1>
        <div className="flex items-center gap-4">
          <Link
            href="/cash-out"
            className="rounded-full bg-black px-6 py-3 font-medium text-white"
          >
            Cash Out
          </Link>
        </div>
      </div>
      <SalesChart />
      <SalesTable />
    </div>
  );
}
