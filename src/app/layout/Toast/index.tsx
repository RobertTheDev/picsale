'use client';

import { useEffect } from 'react';
import { LuCheck, LuInfo, LuShieldAlert } from 'react-icons/lu';

export const SuccessToast = ({
  show,
  onClose,
  labelText,
}: {
  show: boolean;
  onClose: () => void;
  labelText: string;
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white shadow-md">
        <LuCheck className="mr-2 h-5 w-5" />
        <span className="text-base font-medium text-white">{labelText}</span>
      </div>
    </div>
  );
};

export const InfoToast = ({
  show,
  onClose,
  labelText,
}: {
  show: boolean;
  onClose: () => void;
  labelText: string;
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md">
        <LuInfo className="mr-2 h-5 w-5" />
        <span className="text-base font-medium text-white">{labelText}</span>
      </div>
    </div>
  );
};

export const WarningToast = ({
  show,
  onClose,
  labelText,
}: {
  show: boolean;
  onClose: () => void;
  labelText: string;
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center rounded-lg bg-orange-600 px-4 py-2 text-white shadow-md">
        <LuShieldAlert className="mr-2 h-5 w-5" />
        <span className="text-base font-medium text-white">{labelText}</span>
      </div>
    </div>
  );
};

export const DangerToast = ({
  show,
  onClose,
  labelText,
}: {
  show: boolean;
  onClose: () => void;
  labelText: string;
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="flex items-center rounded-lg bg-red-600 px-4 py-2 text-white shadow-md">
        <LuShieldAlert className="mr-2 h-5 w-5" />
        <span className="text-base font-medium text-white">{labelText}</span>
      </div>
    </div>
  );
};
