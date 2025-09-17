import React, { useEffect, useState } from "react";

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


const StatCard = ({ title, value, type, dropdownData, showDropdown, onToggleDropdown }) => {
  const isPositive = type === "positive";

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex-1 min-w-[220px]">
      
      {/* Title with Chevron Icon */}
      <div className="flex items-center justify-between cursor-pointer" onClick={onToggleDropdown}>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <Icon name="ChevronDown" className="h-4 w-4 text-gray-400 transform transition-transform duration-200" style={{ transform: showDropdown ? "rotate(180deg)" : "rotate(0)" }} />
      </div>

      {/* Value + Up/Down Label */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <div
          className={`flex items-center text-xs px-2 py-1 rounded-full ${
            isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          <Icon name={isPositive ? "TrendingUp" : "TrendingDown"} className="h-3 w-3 mr-1" />
          <span>{isPositive ? "+%" : "-%"}</span>
        </div>
      </div>

      {/* Dropdown Content */}
      {showDropdown && dropdownData?.length > 0 && (
        <div className="mt-4 bg-gray-50 rounded-md p-3 text-sm text-gray-700 space-y-1 border border-gray-200">
          {dropdownData.map((entry, i) => (
            <div key={i} className="flex justify-between">
              <span>{entry.label}</span>
              <span>{entry.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const StatsSection = () => {
  const [stats, setStats] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [showDropdownIndex, setShowDropdownIndex] = useState(null);

  useEffect(() => {
    fetch("/market_rates.json")
      .then((res) => res.json())
      .then((data) => {
        setFullData(data);

        const desiredTitles = [
          "Call Rates",
          "7.06% GS 2028",
          "91 day T-bills",
        ];

        const filtered = data
          .filter(item => desiredTitles.includes(item.rate_name.trim()))
          .map(item => ({
            title: item.rate_name.trim(),
            value: item.rate_value.replace(/[\r\n\*\#]/g, "").trim(),
          }));

        setStats(filtered);
      });
  }, []);

  const cleanValue = (val) => val.replace(/[\r\n\*\#]/g, "").trim();

  // Dynamically find dropdown entries for a given title
  const getDropdownData = (title) => {
    if (title === "7.06% GS 2028") {
      return fullData
        .filter(item => /^6\.\d{2}% GS \d{4}$/.test(item.rate_name.trim()))
        .map(item => ({
          label: item.rate_name.trim(),
          value: cleanValue(item.rate_value),
        }));
    }

    if (title === "91 day T-bills") {
      return fullData
        .filter(item =>
          ["182 day T-bills", "364 day T-bills"].includes(item.rate_name.trim())
        )
        .map(item => ({
          label: item.rate_name.trim(),
          value: cleanValue(item.rate_value),
        }));
    }

    return [];
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, idx) => (
        <StatCard
          key={idx}
          title={stat.title}
          value={stat.value}
          type={idx % 2 === 0 ? "positive" : "negative"}
          dropdownData={getDropdownData(stat.title)}
          showDropdown={showDropdownIndex === idx}
          onToggleDropdown={() =>
            setShowDropdownIndex(showDropdownIndex === idx ? null : idx)
          }
        />
      ))}
    </section>
  );
};

export default StatsSection;


