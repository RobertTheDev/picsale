import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Profile',
};

export default function EditProfilePage() {
  return (
    <div>
      <form className="mt-4 flex h-auto flex-col rounded-lg p-8">
        <h3 className="text-base font-bold">Update Profile</h3>
        <div className="mt-4 flex flex-1 flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-900"
          >
            Avatar
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
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-900"
          >
            Name
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
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 p-3 text-base font-bold text-white"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
