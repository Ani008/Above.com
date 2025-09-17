import { useState } from 'react';
import Sidebar from '../Components/Sidebar';

import {
  User,
  Banknote,
  Building2,
  Mail,
  Phone,
  MapPin,
  IdCard,
  CreditCard,
  List,
  Crown,
  ChevronDown,
  Edit,
  Rocket
} from 'lucide-react';

const ProfilePage = () => {
  // ✅ Hardcoded user data instead of backend
  const [userData] = useState({
    organizationProfileName: "State Bank of India",
    bankType: "Public Sector Bank",
    clientId: "SBI123456",
    regulatoryLicenseId: "LIC987654",
    primaryContactName: "Aniket Chakke",
    primaryContactRole: "Treasury Head",
    primaryContactEmail: "aniketchakke63@gmail.com",
    primaryContactPhone: "+91 8767886270",
    headquartersAddress: "State Bank Bhavan, Madame Cama Road, Nariman Point, Mumbai - 400021",
  });

  const [productions] = useState([
    { title: "HDFC Bank", timing: "01/25 - 04/25", listens: "5.2%", actions: "" },
    { title: "ICICI Bank", timing: "01/24 - 12/24", listens: "4.7%", actions: "" },
    { title: "Kotak Mahindra Bank", timing: "03/25 - 05/25", listens: "5%", actions: "" },
    { title: "TATA Capital", timing: "05/25 - 06/25", listens: "3%", actions: "" },
  ]);

  const [isProductionsExpanded, setIsProductionsExpanded] = useState(true);

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 p-6 bg-white rounded-xl shadow-sm">
          <div className="flex items-center space-x-4">
            <User className="text-blue-600 h-10 w-10" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
              <p className="text-gray-500">View and manage your information and activity here.</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* User/Bank Information Card */}
          <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            {/* ✅ SBI Logo instead of generic circle */}
            <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden flex items-center justify-center border-4 border-blue-200">
              <img
                src="https://imgs.search.brave.com/31D1jbRWnFBoa4KFTH8PaaABrw64ruzgW65n5okoq3U/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2NjL1NC/SS1sb2dvLnN2Zy8x/MjAwcHgtU0JJLWxv/Z28uc3ZnLnBuZw"
                alt="SBI Logo"
                className="object-contain w-full h-full p-4"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800">{userData.organizationProfileName}</h2>
            <div className="flex items-center space-x-2 mt-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
              <Crown size={14} />
              <span>Premium User</span>
            </div>

            <div className="mt-6 w-full space-y-4 text-left">
              <div className="flex items-center space-x-3 text-gray-600">
                <Building2 size={20} className="text-blue-500" />
                <span className="font-medium">Type: {userData.bankType}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <IdCard size={20} className="text-blue-500" />
                <span className="font-medium">Client ID: {userData.clientId}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <CreditCard size={20} className="text-blue-500" />
                <span className="font-medium">Licence No: {userData.regulatoryLicenseId}</span>
              </div>
            </div>

            <div className="w-full mt-6 flex flex-col space-y-3">
              <button className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                <Rocket size={20} className="mr-2" />
                Post a Deal
              </button>
              <button className="flex items-center justify-center w-full px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition">
                <Edit size={20} className="mr-2" />
                Edit Information
              </button>
            </div>
          </div>

          {/* Other Details and Productions */}
          <div className="lg:w-2/3 space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Contact & Headquarter Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Primary Contact</p>
                  <div className="flex items-center text-gray-700">
                    <User size={18} className="mr-2 text-blue-500" />
                    <span className="font-medium">{userData.primaryContactName}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Contact Role</p>
                  <p className="text-gray-700 font-medium">{userData.primaryContactRole}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Email Address</p>
                  <div className="flex items-center text-gray-700">
                    <Mail size={18} className="mr-2 text-blue-500" />
                    <a href={`mailto:${userData.primaryContactEmail}`} className="font-medium hover:underline">{userData.primaryContactEmail}</a>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Primary Phone</p>
                  <div className="flex items-center text-gray-700">
                    <Phone size={18} className="mr-2 text-blue-500" />
                    <a href={`tel:${userData.primaryContactPhone}`} className="font-medium hover:underline">{userData.primaryContactPhone}</a>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold text-gray-500 mb-1">Headquarter Address</p>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={18} className="mr-2 text-blue-500" />
                    <p className="font-medium">{userData.headquartersAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Productions */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <List size={24} className="text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">My Deals</h3>
                </div>
                <button
                  onClick={() => setIsProductionsExpanded(!isProductionsExpanded)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-transform duration-200"
                >
                  <ChevronDown size={24} className={`${isProductionsExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isProductionsExpanded && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timing</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Interest Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {productions.map((prod, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{prod.title}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{prod.timing}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{prod.listens}</td>
                          <td className="px-6 py-4 text-sm font-medium">
                            <a href="#" className="text-blue-600 hover:text-blue-900">View Details</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
