import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-24 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-emerald-200 p-4 flex items-start gap-3 animate-in slide-in-from-top-4 duration-300">
      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h5 className="text-xs font-bold text-slate-900">Success</h5>
        <p className="text-xs text-slate-600 mt-0.5">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
