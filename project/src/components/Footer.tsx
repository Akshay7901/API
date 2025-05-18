import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
  <a href="#" className="flex-shrink-0">
    <img className="h-10 w-auto" src="/src/assests/Tricona.jpg" alt="Logo" />
  </a>
  <span className="ml-2 text-gray-500 text-sm">
            © {currentYear} Tricona. All rights reserved.
          </span>
  <div className="hidden md:ml-6 md:flex md:space-x-8">
    {/* your existing nav links */}
  </div>
</div>
        
        <div className="mt-4 flex justify-center md:mt-0">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Privacy Policy</span>
            <span className="text-sm">Privacy Policy</span>
          </a>
          <a href="#" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Terms of Service</span>
            <span className="text-sm">Terms of Service</span>
          </a>
          <a href="#" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Contact</span>
            <span className="text-sm">Contact</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;