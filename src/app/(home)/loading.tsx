import Spinner from '../layout/Spinner';

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center pt-16">
      <Spinner />
    </div>
  );
}
