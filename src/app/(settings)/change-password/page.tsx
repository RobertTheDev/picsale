import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Password',
};

export default function ChangePasswordPage() {
  return (
    <div>
      <form className="flex h-auto flex-col rounded-lg px-24 py-4">
        <h3 className="text-base font-bold">Change Password</h3>
        <div className="mt-4 flex flex-1 flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-2 border-black p-3 text-gray-900 outline-none focus:border-blue-600"
            />
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-red-600">This is an error</p>
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col">
          <button className="w-full rounded-md bg-blue-500 p-3 text-base font-bold text-white">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
