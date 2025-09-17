import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Icon = ({ name, className = "" }) => {
  const icons = {
    Home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    Mail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    Users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    Ticket: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M2 10h20" />
        <path d="M2 14h20" />
        <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 2v20" />
      </svg>
    ),
    BarChart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    MessageSquare: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    FileText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
    Bell: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    User: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    Search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    ChevronDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    ),
    X: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    Plus: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
    Minus: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M5 12h14" />
      </svg>
    ),
    TrendingUp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    TrendingDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </svg>
    ),
    Download: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    Settings: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    Filter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M22 3H2l8 9.46V19l4 3v-8.54L22 3z" />
      </svg>
    ),
    Edit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
      </svg>
    ),
  };
  return icons[name] || null;
};


//////////////////////////////////////////////////////////////DATE RANGE SELECTOR COMPONENT ////////////////////////////////////////////


const DateRangeSelector = () => {
  // State to manage the currently active time period button
  const [activePeriod, setActivePeriod] = useState('3M'); // Default to '3M' as per the image

  // Define the time periods
  const timePeriods = ['1W', '1M', '3M', '6M', '1Y', '3Y', '5Y', 'All'];

  // Helper component for the up-down arrows icon
  const UpDownArrowsIcon = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );

  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 font-sans text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Left section: NSE button and Time Period buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-0">
        {/* NSE Button */}
        <button className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-800 transition-colors duration-200">
          RBI
        </button>

        {/* Time Period Buttons */}
        {timePeriods.map((period) => (
          <button
            key={period}
            className={`
              px-4 py-2 rounded-full border 
              ${activePeriod === period
                ? 'bg-blue-100 border-blue-400 text-blue-800 font-semibold shadow-inner' // Active state
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50' // Inactive state
              }
              transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-blue-800
            `}
            onClick={() => setActivePeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Right section: Terminal button */}
      <button className="flex items-center px-4 py-2 rounded-xl bg-green-500 text-white font-medium shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-200">
        Export CSV
        <UpDownArrowsIcon className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const instruments = [
  { id: "callmoney", label: "Call Money" },
  { id: "market repo", label: "Market Repo" },
  { id: "triparty repo", label: "Triparty Repo" },
];

const ChartSection = () => {
  const [data, setData] = useState([]);
  const [instrumentIndex, setInstrumentIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const currentInstrument = instruments[instrumentIndex];

  useEffect(() => {
    fetch("/segment_data.json")
      .then((res) => res.json())
      .then((json) => {
        const parsed = json.map((item) => ({
          ...item,
          date: new Date(item.date),
          dateLabel: item.date,
          weighted_avg_rate: +item.weighted_avg_rate,
        }));
        setData(parsed);
      });
  }, []);

  useEffect(() => {
    const filtered = data
      .filter((item) => item.instrument === currentInstrument.id)
      .sort((a, b) => a.date - b.date);
    setFilteredData(filtered);
  }, [data, instrumentIndex]);

  const handlePrev = () => {
    setInstrumentIndex(
      (prev) => (prev - 1 + instruments.length) % instruments.length
    );
  };

  const handleNext = () => {
    setInstrumentIndex((prev) => (prev + 1) % instruments.length);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-8xl mx-auto">
      {/* Title + Buttons */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{currentInstrument.label}</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Chart */}
      {filteredData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid stroke="#e0e0e0" strokeOpacity={0} />
            <XAxis dataKey="dateLabel" tick={{ fontSize: 12 }} hide />
            <YAxis domain={["dataMin", "dataMax"]} tick={{ fontSize: 12 }} hide />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const rate = payload[0].value.toFixed(2) + "%";
                  const date = label;
                  return (
                    <div className="bg-white border border-gray-300 p-2 rounded shadow text-sm">
                      <strong>
                        {rate} | {date}
                      </strong>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="weighted_avg_rate"
              stroke="#020076"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center">Loading chart data...</p>
      )}

      {/* DateRangeSelector inserted below the chart */}
      <div className="mt-12">
        <DateRangeSelector />
      </div>
    </div>
  );
};


export default ChartSection;
