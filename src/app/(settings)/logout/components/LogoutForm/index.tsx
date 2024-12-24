'use client';

import SettingsFormSubmitButton from '@/app/(settings)/components/SettingsFormSubmitButton';
import SettingsFormSuccessMessage from '@/app/(settings)/components/SettingsFormSuccessMessage';

export default function LogoutForm() {
  const formSuccess = false;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert('Signed out');
  }

  return (
    <div>
      {formSuccess ? (
        <SettingsFormSuccessMessage messageText="Account successfully closed" />
      ) : (
        <form onSubmit={handleSubmit} className="flex h-auto flex-col p-12">
          <div>
            <h3 className="text-3xl font-bold">Logout</h3>
            <p className="mt-4">
              This action will log you out of your account and you will need to
              sign in again.
            </p>
          </div>

          <div className="mt-8 flex flex-1 flex-col">
            <SettingsFormSubmitButton labelText="Logout" loading={false} />
          </div>
        </form>
      )}
    </div>
  );
}
