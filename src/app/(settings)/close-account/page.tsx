import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Close Account',
};

export default function CloseAccountPage() {
  return (
    <div>
      <form className="mt-4 flex h-auto flex-col rounded-lg p-8">
        <h3 className="text-base font-bold">Close Account</h3>
        <p className="mt-4">
          Your account will be permanently deleted along with its data. You will
          lose all of your progresses, favorites, certificates, history and
          profile information.
        </p>

        <div className="mt-4 flex flex-1 flex-col">
          <button className="w-full rounded-md bg-red-500 p-3 text-base font-bold text-white">
            Close Account
          </button>
        </div>
      </form>
    </div>
  );
}
