import React, { useState, useEffect } from 'react';
import { Check, X, AlertTriangle, Info } from 'lucide-react';

interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, type, message, duration = 5000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);
  
  const getToastConfig = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-400',
          iconColor: 'text-green-400',
          icon: <Check className="h-5 w-5" />,
          title: 'Success'
        };
      case 'error':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-400',
          iconColor: 'text-red-400',
          icon: <X className="h-5 w-5" />,
          title: 'Error'
        };
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-400',
          iconColor: 'text-yellow-400',
          icon: <AlertTriangle className="h-5 w-5" />,
          title: 'Warning'
        };
      case 'info':
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-400',
          iconColor: 'text-blue-400',
          icon: <Info className="h-5 w-5" />,
          title: 'Information'
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-400',
          iconColor: 'text-gray-400',
          icon: <Info className="h-5 w-5" />,
          title: 'Notification'
        };
    }
  };
  
  const { bgColor, borderColor, iconColor, icon, title } = getToastConfig();
  
  return (
    <div className={`max-w-sm w-full ${bgColor} shadow-lg rounded-lg pointer-events-auto border-l-4 ${borderColor}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${iconColor}`}>
            {icon}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => onClose(id)}
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Toaster: React.FC = () => {
  const [toasts, setToasts] = useState<Array<Pick<ToastProps, 'id' | 'type' | 'message' | 'duration'>>>([]);
  
  // Example method to add toast - this would be called from a context in a real app
  const addToast = (type: ToastProps['type'], message: string, duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, type, message, duration }]);
  };
  
  // For testing purposes, show a sample toast on component mount
  useEffect(() => {
    // Uncomment to test
    // addToast('success', 'Your changes have been saved successfully!');
  }, []);
  
  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };
  
  return (
    <div className="fixed top-0 right-0 p-4 w-full md:max-w-sm z-50 space-y-4">
      {toasts.map((toast) => (
        <div key={toast.id} className="transition transform duration-300 ease-in-out">
          <Toast
            id={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={removeToast}
          />
        </div>
      ))}
    </div>
  );
};

export default Toaster;