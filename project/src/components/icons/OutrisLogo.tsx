import React from 'react';
import { Box, Square as BoxSquare } from 'lucide-react';

interface OutrisLogoProps {
  className?: string;
}

export const OutrisLogo: React.FC<OutrisLogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center justify-center">
        <BoxSquare className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
        <Box className="w-4 h-4 text-gray-800 absolute" strokeWidth={2} />
      </div>
      <span className="ml-2 text-xl font-semibold text-gray-900">outris</span>
    </div>
  );
};