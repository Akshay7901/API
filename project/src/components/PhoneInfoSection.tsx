import React, { useState } from "react";
import VerificationStatusBadge from "./VerificationStatusBadge";

type PhoneStatus = "verified" | "pending" | "invalid";

interface PhoneRecord {
  number: string;
  type: string;
  status: PhoneStatus;
  verifiedAt: string | null;
  carrier: string;
  countryCode: string;
}

interface PhoneInfo {
  primary: PhoneRecord;
  secondary: PhoneRecord[];
}

const PhoneInfoSection: React.FC<{ phoneInfo: PhoneInfo }> = ({
  phoneInfo,
}) => {
  const [isExpanded] = useState(true);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  return (
    <div>
      <div className="p-6 border bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Phone Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Trust Score */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Trust Score</h3>
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-xl font-bold">770</span>
                <span className="absolute bottom-[-1rem] text-xs">HIGH</span>
              </div>
              <div>
                <p>
                  <span className="font-medium">Type:</span> MOBILE
                </p>
                <p>
                  <span className="font-medium">Country:</span> IN
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  <span className="bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                    Connected
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Identity */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Identity</h3>
            <p>
              <span className="font-medium">Name:</span> Rahul
            </p>
            <p>
              <span className="font-medium">Confidence:</span>{" "}
              <span className="bg-black text-white text-xs px-2 py-1 rounded">
                MEDIUM
              </span>
            </p>
            <p>
              <span className="font-medium">First Seen:</span> Mar 27, 2014
            </p>
            <p>
              <span className="font-medium">Telegram:</span> Rahul
            </p>
            <p>
              <span className="font-medium">Age Range:</span> 52–58
            </p>
          </div>

          {/* Validation */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-2">Validation</h3>
            <div className="flex items-center justify-between">
              <span>Valid Format:</span>
              <span className="text-green-600 text-xl">✔</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Suspicious:</span>
              <span className="text-red-600 text-xl">✘</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Disposable:</span>
              <span className="text-red-600 text-xl">✘</span>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <div className="p-6 border bg-white shadow-md rounded-lg text-xl font-bold mb-2">
        Profile Image{" "}
        <br></br><br></br>
        <img
          src="/src/assests/image1.jpg"
          alt="Description"
          className="h-60 w-70"
        />
      </div>
      <br></br>

      {/* <button 
        type="button"
        className="flex w-full items-center justify-between text-left focus:outline-none p-6 border bg-white shadow-md rounded-lg  "
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4 className="text-xl font-bold text-gray-900 ">Carrier Information</h4>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button> */}

      {isExpanded && (
        <div className=" animate-fadeIn p-6 border bg-white shadow-md rounded-lg ">
          <h4 className="text-xl font-bold text-gray-900 ">
            Carrier Information
          </h4>
          <br></br>

          {/* Primary Phone Info */}
          <div className="border-b border-gray-200 pb-5 mb-5">
            <h5 className="text-md font-medium text-gray-700 mb-4 flex items-center">
              <div className="h-5 w-5 text-indigo-500 mr-2" />
              Primary Phone
            </h5>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="px-4 py-5 sm:p-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl  text-gray-900">
                      {phoneInfo.primary.number}
                    </span>
                    <span className="ml-3">
                      <VerificationStatusBadge
                        status={phoneInfo.primary.status}
                      />
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Current Network:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {phoneInfo.primary.carrier}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Original Network:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {phoneInfo.primary.carrier}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      First Ported:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {phoneInfo.primary.verifiedAt}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Last Ported:
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formatDate(phoneInfo.primary.verifiedAt)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Ported Times:
                    </dt>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border bg-white shadow-md rounded-lg max-w-full">
  <h2 className="text-xl font-semibold mb-4">Digital Footprint</h2>

  <div className="mb-10">
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>✅WhatsApp</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>✅Telegram</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>Facebook</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>✅Amazon</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>✅Flipkart</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>Apple</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>✅Google</p>
      </div>
      <div className="min-w-[150px] flex-1 sm:flex-none border rounded-lg p-4 bg-gray-50">
        <p>Office 365</p>
      </div>
    </div>
  </div>
</div>


          <br></br>

          {/* Address Info */}
          <div className="">
            <h2 className="text-xl font-bold mb-4">Address Information</h2>

            {/* Source Address */}
            <div className="">
              <div className="max-w-18xl mx-auto">
                {/* Source Address (Input) */}
                <div className="border rounded-xl bg-white shadow-md p-5  mb-1">
                  <h3 className="text-lg font-semibold mb-3">
                    Source Address (Input)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Address Details
                      </h4>
                      <p>
                        <strong>Original Input Address:</strong> RISHI
                        BHAWAN,,SOTI GANJ,MEERUT,250001
                      </p>
                      <p>
                        <strong>Formatted Input:</strong> RISHI BHAWAN,SOTI
                        GANJ,MEERUT,250001, India
                      </p>
                      <p>
                        <strong>Formatted Address:</strong> Bombay Bazar, Rajban
                        Bazaar, Meerut, Uttar Pradesh 250001, India
                      </p>
                      <p>
                        <strong>Coordinates:</strong> 28.9983172, 77.6993608
                      </p>
                      <p>
                        <strong>Valid Address:</strong> ✅
                      </p>
                    </div>
                    <div>
                      <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=28.9983172,77.6993608&z=15&output=embed"
                        width="100%"
                        height="250"
                        className="rounded-md border"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className="mt-6 border rounded-xl shadow-md p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-3">Location Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col">
                        <span className="font-normal">Locality:</span>
                        <span>Meerut</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal">Admin Area:</span>
                        <span>Uttar Pradesh</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal">Country:</span>
                        <span>India</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal">Postal Code:</span>
                        <span>250001</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <br></br>

            {/* Derived Address */}
            <div className="">
              <div className="max-w-15xl mx-auto">
                {/* Derived Address Section */}
                <div className="border rounded-xl shadow-md p-5 bg-white">
                  <h3 className="text-lg font-semibold mb-3">
                    Derived Address (Found)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Address Details
                      </h4>
                      <p>
                        <strong>Original Input Address:</strong> RISHI
                        BHAWAN,,SOTI GANJ,MEERUT,250001
                      </p>
                      <p>
                        <strong>Formatted Input:</strong> RISHI BHAWAN,SOTI
                        GANJ,MEERUT,250001, India
                      </p>
                      <p>
                        <strong>Formatted Address:</strong> Bombay Bazar, Rajban
                        Bazaar, Meerut, Uttar Pradesh 250001, India
                      </p>
                      <p>
                        <strong>Coordinates:</strong> 28.9983172, 77.6993608
                      </p>
                      <p>
                        <strong>Valid Address:</strong> ✅
                      </p>
                    </div>
                    <div>
                      <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=28.9983172,77.6993608&z=15&output=embed"
                        width="100%"
                        height="250"
                        className="rounded-md border"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className="mt-6 border rounded-xl shadow-md p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-3">Location Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col">
                        <span className="font-normal">Locality:</span>
                        <span>Meerut</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal">Admin Area:</span>
                        <span>Uttar Pradesh</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal">Country:</span>
                        <span>India</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal">Postal Code:</span>
                        <span>250001</span>
                      </div>
                    </div>
                    
                  </div>
                  <div className="mt-6 border rounded-xl shadow-md p-4 bg-white">
                    <h2 className="font-semibold text-lg mb-3">
                      Comparison with Source Address
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="mb-2">
                          <span className="font-medium">Precision:</span>{" "}
                          <span className="bg-gray-100 text-sm text-black px-3 py-1 rounded-full">
                            Very Approximate
                          </span>
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Distance (km):</span>
                          <div>13.82494865831442</div>
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Same Apartment:</span>
                          <div className="text-red-500 text-xl">✘</div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-2">
                          <span className="font-medium">
                            Distance Description:
                          </span>
                          <div>Different Locations (13.82km)</div>
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Text Similarity:</span>
                          <div>0.25</div>
                        </div>
                        <div className="mb-2">
                          <span className="font-medium">Close Location:</span>
                          <div className="text-red-500 text-xl">✘</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
              </div>
            </div>
          </div>

          {/* Digital Footprint */}
          <div className="p-6 border bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-xl font-semibold mb-4">Digital Footprint</h2>

            <div className="mb-6">
              <h3 className="text-md font-semibold mb-2">
                Social Media Profiles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="">✅WhatsApp</p>
                  <p className="text-sm text-gray-500">Privacy: public</p>
                </div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="">✅Telegram</p>
                  <p className="text-sm text-gray-500">Privacy: private</p>
                  <p className="text-sm text-gray-500">Name: Rahul</p>
                </div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="">Facebook</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-2">
                E-commerce & Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-gray-50">✅Amazon</div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  ✅Flipkart
                </div>
                <div className="border rounded-lg p-4 bg-gray-50">Apple</div>
                <div className="border rounded-lg p-4 bg-gray-50">✅Google</div>
                <div className="border rounded-lg p-4 bg-gray-50">
                  Office 365
                </div>
              </div>
            </div>
          </div>

          {/* Security Information */}
          <div className="p-6 border bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-xl font-semibold mb-4">Security Information</h2>
            <p className="text-gray-600 text-sm">
              No data breach information available for this phone number.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneInfoSection;
