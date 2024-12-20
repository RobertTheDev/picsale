import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logout',
};

export default function LogoutPage() {
  return (
    <div>
      <form className="mt-4 flex h-auto flex-col rounded-lg p-8">
        <h3 className="text-base font-bold">Logout</h3>
        <p className="mt-4">
          Your account will be permanently deleted along with its data. You will
          lose all of your progresses, favorites, certificates, history and
          profile information.
        </p>

        <div className="mt-4 flex flex-1 flex-col">
          <button
            type="submit"
            className="w-full rounded-md bg-red-500 p-3 text-base font-bold text-white"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
}
