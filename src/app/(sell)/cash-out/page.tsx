'use client';

import { FormEvent, useState } from 'react';

export default function CashOutPage() {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(1000); // Example balance
  const [message, setMessage] = useState('');
  const [account, setAccount] = useState({ name: '', number: '', bank: '' });

  const handleCashOut = () => {
    if (amount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }

    if (amount > balance) {
      setMessage('Insufficient balance.');
      return;
    }

    setBalance(balance - amount);
    setMessage(`Successfully cashed out $${amount}.`);
    setAmount(0);
  };

  const handleAccountSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!account.name || !account.number || !account.bank) {
      setMessage('Please fill out all account details.');
      return;
    }
    setMessage(`Account added successfully: ${account.name}, ${account.bank}`);
    setAccount({ name: '', number: '', bank: '' });
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Cash Out</h1>

      <div className="mb-4">
        <p className="text-lg">
          Available Balance: <span className="font-semibold">${balance}</span>
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="cashOutAmount"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Enter Amount to Cash Out:
        </label>
        <input
          type="number"
          id="cashOutAmount"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={handleCashOut}
      >
        Cash Out
      </button>

      {message && (
        <div className="mt-4 rounded-md border border-gray-300 bg-gray-100 p-3">
          <p>{message}</p>
        </div>
      )}

      <div className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">Add Account</h2>
        <form onSubmit={handleAccountSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="accountName"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Account Holder Name:
            </label>
            <input
              type="text"
              id="accountName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={account.name}
              onChange={(e) => setAccount({ ...account, name: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="accountNumber"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Account Number:
            </label>
            <input
              type="text"
              id="accountNumber"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={account.number}
              onChange={(e) =>
                setAccount({ ...account, number: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="bankName"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Bank Name:
            </label>
            <input
              type="text"
              id="bankName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={account.bank}
              onChange={(e) => setAccount({ ...account, bank: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Add Account
          </button>
        </form>
      </div>
    </div>
  );
}
