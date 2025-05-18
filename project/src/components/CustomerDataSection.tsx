import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  User,
  Calendar,
  AtSign,
  MapPin,
  PhoneCall,
  Hash
} from 'lucide-react';

interface CustomerAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface CustomerData {
  id: string;
  name: string;
  dateofBirth: string;
  panNumber: string;
  mobilenumber: string;
  email: string;
  createdAt: string;
  lastUpdated: string;
  drivingLicense: string;
  address: CustomerAddress;
}

interface CustomerDataSectionProps {
  customer: CustomerData;
}

const CustomerDataSection: React.FC<CustomerDataSectionProps> = ({ customer }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  

  return (
    <div className="mb-6  pb-5">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4 className="text-lg font-semibold text-gray-900">Customer Input Data</h4>
        <span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>

      {isExpanded && (
        <div className="mt-4 animate-fadeIn">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Customer ID</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.createdAt}</dd>
            </div>
            <div className="sm:col-span-1">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.name}</dd>
            </div>

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.dateofBirth}</dd>
            </div>

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <Hash className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">PAN Number</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.panNumber}</dd>
            </div>

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Mobile Number</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.mobilenumber}</dd>
            </div>
            <div className="sm:col-span-1">
              <div className="flex items-center">
                <Calendar  className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Age on Network</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.ageonnetwork}</dd>
            </div>

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <AtSign className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Email</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.email}</dd>
            </div>

            

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <Hash className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Driving License</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">{customer.drivingLicense}</dd>
            </div>

            <div className="sm:col-span-1">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <dt className="text-sm font-medium text-gray-500">Address</dt>
              </div>
              <dd className="mt-1 text-sm text-gray-900">
                {customer.address.street}, {customer.address.city}, {customer.address.state}{" "}
                {customer.address.zipCode}, {customer.address.country}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
};

export default CustomerDataSection;
