import { Metadata } from 'next';
import CashOutForm from './components/CashOutForm';

export const metadata: Metadata = {
  title: 'Cash Out',
};

export default function CashOutPage() {
  return (
    <div>
      <CashOutForm />
    </div>
  );
}
