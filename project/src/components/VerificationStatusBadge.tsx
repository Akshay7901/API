import React from 'react';
import { Check, X, Clock } from 'lucide-react';

interface VerificationStatusBadgeProps {
  status: 'verified' | 'invalid' | 'pending';
}

const VerificationStatusBadge: React.FC<VerificationStatusBadgeProps> = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'verified':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          icon: <Check className="h-4 w-4 text-green-500 mr-1.5" />,
          label: 'Verified'
        };
      case 'invalid':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          icon: <X className="h-4 w-4 text-red-500 mr-1.5" />,
          label: 'Invalid'
        };
      case 'pending':
        return {
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          icon: <Clock className="h-4 w-4 text-yellow-500 mr-1.5" />,
          label: 'Pending'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: null,
          label: 'Unknown'
        };
    }
  };
  
  const { bgColor, textColor, icon, label } = getStatusConfig();
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      {icon}
      {label}
    </span>
  );
};

export default VerificationStatusBadge;