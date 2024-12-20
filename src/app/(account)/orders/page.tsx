import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Orders',
};

export default function OrdersPage() {
  return (
    <main className="flex flex-col px-8">
      <h1 className="mt-8 text-3xl font-bold">Orders</h1>
      <div className="mt-8 flex w-full flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Sale Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Download Photo
                </th>
              </tr>
            </thead>
            <tbody>
              {photos.map((photo) => (
                <tr key={photo.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="relative size-20 overflow-hidden rounded-lg">
                        <Image
                          fill
                          src={`/photos/${photo.url}`}
                          alt="Photo preview"
                          className="h-20 w-20 object-cover"
                        />
                      </div>
                      Image of a gorilla lying down
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    21 October 2024
                  </td>
                  <td className="border border-gray-300 px-4 py-2">£245.00</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button>Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
