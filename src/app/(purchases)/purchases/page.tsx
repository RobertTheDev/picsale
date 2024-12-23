import { photos } from '@/app/data/photos';
import { Metadata } from 'next';
import Image from 'next/image';
import { LuDownload } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Purchases',
};

export default function PurchasesPage() {
  return (
    <main className="flex flex-col px-8 pb-8">
      <h1 className="mt-8 text-3xl font-bold">Purchases</h1>
      <div className="mt-8 flex w-full flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-700">
            <thead className="bg-neutral-900">
              <tr>
                <th className="border border-neutral-950 px-4 py-2 text-left">
                  Product
                </th>
                <th className="border border-neutral-950 px-4 py-2 text-left">
                  Purchase Date
                </th>
                <th className="border border-neutral-950 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-neutral-950 px-4 py-2 text-left">
                  Download Photo
                </th>
              </tr>
            </thead>
            <tbody>
              {photos.map((photo) => (
                <tr key={photo.id} className="hover:bg-neutral-950">
                  <td className="border border-neutral-900 px-4 py-2">
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
                  <td className="border border-neutral-900 px-4 py-2">
                    21 October 2024
                  </td>
                  <td className="border border-neutral-900 px-4 py-2">
                    £245.00
                  </td>
                  <td className="border border-neutral-900 px-4 py-2">
                    <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-700 font-bold text-white">
                      <LuDownload size={20} /> Download
                    </button>
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
