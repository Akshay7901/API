import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, X, UserCircle, Check } from 'lucide-react';

interface CustomerOption {
  id: string;
  name: string;
  email: string;
}

interface CustomerSelectorProps {
  onCustomerChange: (customerId: string | null) => void;
}

const CustomerSelector: React.FC<CustomerSelectorProps> = ({ onCustomerChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerOption | null>(null);
  const [filteredCustomers, setFilteredCustomers] = useState<CustomerOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Mock customer data
  const customerOptions: CustomerOption[] = [
    { id: '1', name: 'Rahul', email: 'rahul@gmail.com' },
    { id: '2', name: 'Ankit ', email: 'ankit@gmail.com' },
    { id: '3', name: 'Sachin', email: 'sachin@gmail.com' },
    { id: '4', name: 'Rohan', email: 'rohan@gmail.com' },
    { id: '5', name: 'Akshay', email: 'akshay@gmail.com' }
  ];
  
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredCustomers(customerOptions);
    } else {
      const filtered = customerOptions.filter(
        customer =>
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCustomers(filtered);
    }
  }, [searchTerm]);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleCustomerSelect = (customer: CustomerOption) => {
    setSelectedCustomer(customer);
    setIsOpen(false);
    setSearchTerm('');
    onCustomerChange(customer.id);
  };
  
  const clearSelection = () => {
    setSelectedCustomer(null);
    onCustomerChange(null);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="relative w-full md:w-64 rounded-md shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {selectedCustomer ? (
            <UserCircle className="h-5 w-5 text-gray-400" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <div
          className="block w-full pl-10 pr-10 py-2 sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
        >
          {selectedCustomer ? (
            <div className="truncate text-gray-900">{selectedCustomer.name}</div>
          ) : (
            <div className="text-gray-500">Select customer</div>
          )}
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          {selectedCustomer && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <ChevronDown
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm max-h-60">
          <div className="px-3 py-2 border-b border-gray-200">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search customers"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          
          {filteredCustomers.length === 0 ? (
            <div className="py-3 px-3 text-gray-500 text-sm text-center">No customers found</div>
          ) : (
            filteredCustomers.map((customer) => (
              <div
                key={customer.id}
                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-50 transition duration-150 ease-in-out ${
                  selectedCustomer?.id === customer.id ? 'bg-indigo-50' : ''
                }`}
                onClick={() => handleCustomerSelect(customer)}
              >
                <div className="flex items-center">
                  <span className="text-indigo-600 flex-shrink-0">
                    <UserCircle className="h-5 w-5" />
                  </span>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                    <p className="text-xs text-gray-500">{customer.email}</p>
                  </div>
                  {selectedCustomer?.id === customer.id && (
                    <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                      <Check className="h-5 w-5" />
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CustomerSelector;