import React, { useState } from "react";
import {
  Search,
  Download,
  Printer,
  Plus,
  Check,
  Shield,
  Zap,
  Globe,
  Database,
} from "lucide-react";
import CustomerSelector from "../components/CustomerSelector";
import CustomerDataSection from "../components/CustomerDataSection";
import PhoneInfoSection from "../components/PhoneInfoSection";

const PhoneVerificationReport: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showFeatures] = useState(true);

  const handleCustomerChange = (customerId: string | null) => {
    if (!customerId) return;
    setIsLoading(true);
    setSelectedCustomerId(customerId);
    setTimeout(() => setIsLoading(false), 800);
  };

  const handlePrint = () => window.print();
  const handleExport = () => alert("Export functionality would go here");

  const tabs = [
    { id: "overview", label: "Overview", icon: Shield },
    // { id: "history", label: "History", icon: Clock },
    // { id: "settings", label: "Settings", icon: Phone },
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Real-time Verification",
      description:
        "Instant phone number verification with live carrier data and validation checks.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Global Coverage",
      description:
        "Support for international phone numbers across 200+ countries and regions.",
    },
    {
      icon: <Database className="h-8 w-8 text-purple-500" />,
      title: "Detailed Analytics",
      description:
        "Comprehensive reporting and insights on verification patterns and trends.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm border-l-8 border-indigo-500">
  <div className="mb-6">
    <h1 className="text-2xl font-semibold text-gray-800 mb-2">
      Phone Verification Report
    </h1>
    <p className="text-gray-600 max-w-2xl">
      Secure and reliable phone verification system with real-time validation and
      comprehensive reporting.
    </p>
  </div>
  <div className="flex gap-3">
    <button
      onClick={handlePrint}
      className="bg-indigo-500 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-600 transition-colors flex items-center"
    >
      <Printer className="h-4 w-4 mr-2" />
      Print
    </button>
    <button
      onClick={handleExport}
      className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors hover:text-white flex items-center"
    >
      <Download className="h-4 w-4 mr-2" />
      Export
    </button>
  </div>
</div>

      {/* Features Section */}
      {showFeatures && !selectedCustomerId && (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="bg-gray-50 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <CustomerSelector onCustomerChange={handleCustomerChange} />
            </div>
            <nav className="flex space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-indigo-100 text-indigo-700 shadow-sm"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {selectedCustomerId ? (
          <div
            className={`p-6 ${
              isLoading ? "opacity-50" : ""
            } transition-opacity duration-200`}
          >
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Customer Data Section */}
                <div className="border rounded-lg p-4 bg-white shadow-md">
                  <h2 className="text-lg font-semibold mb-2"></h2>
                  <CustomerDataSection customer={mockCustomerData} />
                </div>

                {/* Phone Info Section */}
                <div className="">
                  <h2 className="text-lg font-semibold mb-2"></h2>
                  <PhoneInfoSection phoneInfo={mockPhoneInfo} />
                </div>

                {/* Profile Image Section */}
              </div>
            )}

            {activeTab === "history" && (
              <div className=" bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Verification Timeline
                </h3>
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {verificationHistory.map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-8">
                          {eventIdx !== verificationHistory.length - 1 && (
                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                          )}
                          <div className="relative flex items-center space-x-3">
                            <div>
                              <span
                                className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                  event.type === "verification"
                                    ? "bg-green-500"
                                    : "bg-gray-500"
                                }`}
                              >
                                <Check className="h-5 w-5 text-white" />
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-gray-500">
                                {event.content}{" "}
                                <span className="font-medium text-gray-900">
                                  {event.target}
                                </span>
                              </div>
                              <div className="mt-1 text-sm text-gray-500">
                                <time dateTime={event.datetime}>
                                  {event.date}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="max-w-2xl">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Verification Settings
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Configure how phone numbers are verified and managed in your
                    account.
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        id: "auto-verify",
                        label: "Auto-verify new numbers",
                        description:
                          "Automatically initiate verification for newly added phone numbers",
                      },
                      {
                        id: "notifications",
                        label: "Email notifications",
                        description:
                          "Receive email updates about verification status changes",
                      },
                    ].map((setting) => (
                      <div key={setting.id} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={setting.id}
                            name={setting.id}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3">
                          <label
                            htmlFor={setting.id}
                            className="font-medium text-gray-900"
                          >
                            {setting.label}
                          </label>
                          <p className="text-sm text-gray-500">
                            {setting.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <div className="rounded-full bg-gray-100 p-6 mx-auto w-fit mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              No customer selected
            </h3>
            <p className="mt-2 text-gray-600 max-w-md mx-auto">
              Select a customer from the dropdown above or create a new customer
              to get started.
            </p>
            <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Plus className="h-5 w-5 mr-2" />
              Add New Customer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Mock data remains unchanged
const mockCustomerData = {
  id: "CUST-12345",
  name: "Rahul",
  email: "rahul@gmail.com",
  dateofBirth: "1990-01-01", // <-- move here
  panNumber: "ABCDE1234F", // <-- move here
  mobilenumber: "+919999999999", // <-- move here
  createdAt: "CUST-12345",
  lastUpdated: "2024-05-20T14:25:00Z",
  ageonnetwork: "1-2 years",
  drivingLicense: "ABC",
  address: {
    street: "RISHI BHAWAN, SOTI GANJ",
    state: "MEERUT",
    zipCode: "250001",
    country: "Uttar Pradesh",
  },
};

const mockPhoneInfo = {
  primary: {
    number: "+919999999999",
    type: "Mobile",
    status: "verified",
    verifiedAt: "2024-05-20T14:25:00Z",
    carrier: "Airtel",
    countryCode: "US",
    portedRecord: "1",
  },
  secondary: [
    {
      number: "+1 (415) 555-0124",
      type: "Home",
      status: "verified",
      verifiedAt: "2024-04-10T09:15:00Z",
      carrier: "AT&T",
      countryCode: "US",
    },
    {
      number: "+1 (415) 555-0125",
      type: "Work",
      status: "verified",
      verifiedAt: "2024-03-05T11:45:00Z",
      carrier: "T-Mobile",
      countryCode: "US",
    },
    {
      number: "+1 (415) 555-0126",
      type: "Other",
      status: "pending",
      verifiedAt: null,
      carrier: "Unknown",
      countryCode: "US",
    },
  ],
};

const verificationHistory = [
  {
    id: "1",
    type: "verification",
    content: "Successfully verified phone number",
    target: "+1 (415) 555-0123",
    datetime: "2024-03-15T16:00:00",
    date: "Mar 15, 2024",
  },
  {
    id: "2",
    type: "verification",
    content: "Added new phone number",
    target: "+1 (415) 555-0124",
    datetime: "2024-03-14T12:00:00",
    date: "Mar 14, 2024",
  },
  {
    id: "3",
    type: "update",
    content: "Updated carrier information for",
    target: "+1 (415) 555-0125",
    datetime: "2024-03-13T09:00:00",
    date: "Mar 13, 2024",
  },
];

export default PhoneVerificationReport;
