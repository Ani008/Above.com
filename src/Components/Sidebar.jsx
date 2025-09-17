import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Icon = ({ name, className = '' }) => {
   
    const icons = {
      Home: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      Mail: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      Users: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      Ticket: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2 10h20" />
          <path d="M2 14h20" />
          <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
          <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M12 2v20" />
        </svg>
      ),
      BarChart: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
      MessageSquare: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      FileText: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
      Bell: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
      User: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      Search: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      ChevronDown: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      ),
      X: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ),
      Plus: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      ),
      Minus: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M5 12h14" />
        </svg>
      ),
      TrendingUp: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      TrendingDown: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
          <polyline points="16 17 22 17 22 11" />
        </svg>
      ),
      Download: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      Settings: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      Filter: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 3H2l8 9.46V19l4 3v-8.54L22 3z" />
        </svg>
      ),
      Edit: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
        </svg>
      )
    };
    return icons[name] || null;
};


const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();


  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col rounded-tr-lg rounded-br-lg fixed z-20 overflow-y-auto no-scrollbar">
      {/* Logo */}
      <div className="flex items-center px-6 py-5 border-b border-gray-200">
        <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center text-gray-800 font-bold text-xl mr-3">
          A
        </div>
        <span className="text-xl font-bold text-gray-800">ABOVE</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="text-sm font-semibold text-gray-400 px-2 mb-2 uppercase">
          Main
        </p>
        {[
          { name: "Dashboard", icon: "Home" },
          { name: "Inbox", icon: "Mail" },
          { name: "PostADeal", icon: "Ticket"},
        ].map((item) => (
          <button
            key={item.name}
            className={`flex items-center w-full px-4 py-2.5 rounded-xl transition-colors duration-200 ${
              activeMenu === item.name
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            }`}
            onClick={() => {
              setActiveMenu(item.name);
              navigate(`/${item.name.toLowerCase()}`);
            }}
          >
            <Icon name={item.icon} className="h-5 w-5 mr-3" />
            <span>{item.name}</span>
            {item.hasDropdown && (
              <Icon name="ChevronDown" className="ml-auto h-4 w-4" />
            )}
          </button>
        ))}

        <p className="text-sm font-semibold text-gray-400 px-2 mt-8 mb-2 uppercase">
          Tools
        </p>
        {[
          { name: "News", icon: "BarChart" },
          { name: "Record", icon: "MessageSquare" },
          { name: "Report", icon: "FileText" },
        ].map((item) => (
          <button
            key={item.name}
            className={`flex items-center w-full px-4 py-2.5 rounded-xl transition-colors duration-200 ${
              activeMenu === item.name
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            }`}
            onClick={() => {
              setActiveMenu(item.name);
              navigate(`/${item.name.toLowerCase()}`);
            }}
          >
            <Icon name={item.icon} className="h-5 w-5 mr-3" />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Conversation Section */}
      <div className="px-4 py-6 border-t border-gray-200">
        <p className="text-sm font-semibold text-gray-400 px-2 mb-2 uppercase">
          Conversation
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-red-600 text-sm font-semibold">H</span>
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm">HDFC</p>
                <p className="text-gray-500 text-xs">(91) 996-3950</p>
              </div>
            </div>
            <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              15
            </span>
          </div>
          <div className="flex items-center bg-white p-3 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-pink-600 text-sm font-semibold">M</span>
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm">Maharashtra Bank</p>
                <p className="text-gray-500 text-xs">(91) 8357-9070</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
