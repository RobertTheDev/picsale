import { Metadata } from 'next';
import SellPhotoForm from './SellPhotoForm';

export const metadata: Metadata = {
  title: 'Sell Photo',
};

export default function SellPhotoPage() {
  return (
    <main>
      <h1>Sell Photo</h1>
      <SellPhotoForm />
    </main>
  );
}
