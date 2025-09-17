import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

// Utility function to format numbers with commas
const formatNumber = (num) => {
  if (num === null || num === undefined) return "";
  return parseFloat(num).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
};

// Custom Modal component
const Modal = ({ title, message, onClose, type }) => {
  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  }[type] || "bg-gray-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <div
          className={`text-xl font-bold mb-4 text-white text-center rounded-2xl p-2 ${bgColor}`}
        >
          {title}
        </div>
        <div className="text-gray-700 text-center mb-6">{message}</div>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// SVG Icons
const icons = {
  wallet: (
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
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M10 12a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4h-3z" />
    </svg>
  ),
  scroll: (
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
    >
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10a2 2 0 0 1-2-2v-2H10a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2z" />
    </svg>
  ),
  alertTriangle: (
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
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  ),
};

const Card = ({ title, children, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col h-full">
    <div className="flex items-center mb-4">
      {icon && <div className="text-blue-500 mr-3">{icon}</div>}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="flex-grow">{children}</div>
  </div>
);

const TimelineEntry = ({ timestamp, message, type }) => {
  const icon =
    {
      success: (
        <span className="p-1 rounded-full bg-green-200 text-green-700">+</span>
      ),
      warning: (
        <span className="p-1 rounded-full bg-yellow-200 text-yellow-700">!</span>
      ),
    }[type] || (
      <span className="p-1 rounded-full bg-gray-200 text-gray-700">...</span>
    );

  return (
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 relative mr-4">
        <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-0.5 bg-gray-200"></div>
        <div className="relative z-10 flex items-center justify-center w-6 h-6">
          {icon}
        </div>
      </div>
      <div className="flex-grow bg-gray-50 p-3 rounded-xl shadow-sm text-sm">
        <div className="font-medium text-gray-700">{message}</div>
        <div className="text-xs text-gray-400 mt-1">{timestamp}</div>
      </div>
    </div>
  );
};

const AlertEntry = ({ message, type }) => {
  const colorClass =
    {
      error: "bg-red-50 text-red-600 border-red-200",
      warning: "bg-yellow-50 text-yellow-600 border-yellow-200",
      success: "bg-green-50 text-green-600 border-green-200",
    }[type] || "bg-gray-50 text-gray-600 border-gray-200";

  return (
    <div
      className={`flex items-center p-3 rounded-xl border text-sm mb-3 ${colorClass}`}
    >
      {type === "error" && (
        <span className="mr-2 text-lg text-red-500 font-bold">!</span>
      )}
      {message}
    </div>
  );
};

export default function App() {
  const [currentBalance] = useState(250);
  const [message, setMessage] = useState(null);

  const deals = [
    {
      id: "001",
      counterparty: "ICICI Bank",
      amount: 50,
      interestRate: 4,
      expectedReturn: 52,
      maturityDate: "19-09-2025",
      status: "Active",
    },
    {
      id: "002",
      counterparty: "AXIS Bank",
      amount: 100,
      interestRate: 5,
      expectedReturn: 105,
      maturityDate: "23-09-2025",
      status: "Active",
    },
  ];

  const transactions = [
    {
      timestamp: "Today at 10:30 AM",
      message: "Amount is credited",
      type: "success",
    },
    {
      timestamp: "Today at 10:35 AM",
      message: "Amount is pledged on the deal",
      type: "warning",
    },
  ];

  const alerts = [
    {
      message: "No security alerts at this time.",
      type: "success",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Sidebar fixed on the left */}
      <aside className="w-64 bg-white shadow-md border-r">
        <Sidebar />
      </aside>

      {/* Main content on the right */}
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
        {message && (
          <Modal
            title={message.title}
            message={message.message}
            onClose={() => setMessage(null)}
            type={message.type}
          />
        )}


        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Balance Overview */}
          <Card title="Balance Overview" icon={icons.wallet}>
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-center h-full flex flex-col justify-center">
              <p className="text-sm text-blue-600 font-medium">
                Current Trading Balance
              </p>
              <p className="text-4xl font-bold text-blue-800 mt-2">
                <span className="text-2xl font-normal">₹</span>
                {formatNumber(currentBalance)} Cr
              </p>
            </div>
          </Card>

          {/* Active Deals */}
          <Card title="Active Deals" icon={icons.scroll}>
            <div className="h-80 overflow-y-auto">
              <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0">
                  <tr>
                    <th className="px-4 py-3">Deal ID</th>
                    <th className="px-4 py-3">Counterparty</th>
                    <th className="px-4 py-3">Amount (Cr)</th>
                    <th className="px-4 py-3">Rate</th>
                    <th className="px-4 py-3">Return (Cr)</th>
                    <th className="px-4 py-3">Maturity</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.length > 0 ? (
                    deals.map((deal) => (
                      <tr
                        key={deal.id}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">{deal.id}</td>
                        <td className="px-4 py-3">{deal.counterparty}</td>
                        <td className="px-4 py-3">{formatNumber(deal.amount)}</td>
                        <td className="px-4 py-3">{deal.interestRate}%</td>
                        <td className="px-4 py-3">
                          {formatNumber(deal.expectedReturn)}
                        </td>
                        <td className="px-4 py-3">{deal.maturityDate}</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {deal.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="py-4 text-center text-gray-400 italic"
                      >
                        No active deals found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Transaction Log */}
          <Card title="Transaction Log" icon={icons.scroll}>
            <div className="h-80 overflow-y-auto pr-2">
              {transactions.length > 0 ? (
                transactions.map((t, idx) => (
                  <TimelineEntry
                    key={idx}
                    timestamp={t.timestamp}
                    message={t.message}
                    type={t.type}
                  />
                ))
              ) : (
                <div className="py-4 text-center text-gray-400">
                  No transactions yet.
                </div>
              )}
            </div>
          </Card>

          {/* Security Alerts */}
          <Card title="Security Alerts" icon={icons.alertTriangle}>
            <div className="h-80 overflow-y-auto pr-2">
              {alerts.length > 0 ? (
                alerts.map((alert, idx) => (
                  <AlertEntry
                    key={idx}
                    message={alert.message}
                    type={alert.type}
                  />
                ))
              ) : (
                <div className="py-4 text-center text-gray-400">
                  No security alerts.
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
