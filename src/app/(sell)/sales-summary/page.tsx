'use client';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Title,
  Tooltip,
  Legend,
);

export default function SalesSummary() {
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 190, 300, 500, 200, 300, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const latestSales = [
    {
      id: 1,
      title: 'Product A',
      date: '20 December 2024',
      total: '$200',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Product B',
      date: '19 December 2024',
      total: '$150',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Product C',
      date: '18 December 2024',
      total: '$300',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Product D',
      date: '17 December 2024',
      total: '$120',
      status: 'Failed',
    },
    {
      id: 5,
      title: 'Product E',
      date: '16 December 2024',
      total: '$250',
      status: 'Completed',
    },
  ];

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

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Sales Over Time</h2>
        <Line data={salesData} />
      </div>

      <div className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">Latest Sales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Title
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {latestSales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {sale.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sale.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sale.total}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sale.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
