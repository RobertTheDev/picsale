import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Listings',
};

export default function MyListingsPage() {
  return (
    <main className="flex flex-col px-8">
      <div className="mt-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Listings</h1>
        <div className="flex items-center gap-4">
          <Link
            href="/sales-summary"
            className="rounded-full bg-black px-6 py-3 font-medium text-white"
          >
            Sales Summary
          </Link>
          <Link
            href="/sell-photo"
            className="rounded-full bg-black px-6 py-3 font-medium text-white"
          >
            Upload Listing
          </Link>
        </div>
      </div>

      <div className="mt-8 flex w-full flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Product
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Upload Date
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total Sales
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {photos.map((photo) => (
                <Link href={`/my-listings/${photo.id}`} key={photo.id}>
                  <tr className="hover:bg-gray-50">
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
                    <td className="border border-gray-300 px-4 py-2">£24.00</td>
                    <td className="border border-gray-300 px-4 py-2">
                      232 sales
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Active</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
