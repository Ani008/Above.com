import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

// SVG Icons
const icons = {
  lend: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 14a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2z" />
      <line x1="14" y1="11" x2="14" y2="17" />
      <line x1="11" y1="14" x2="17" y2="14" />
      <path d="M22 17a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2z" />
      <line x1="19" y1="14" x2="19" y2="20" />
      <path d="M10 7a3 3 0 0 0-3-3H5a3 3 0 0 0-2 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2z" />
      <line x1="7" y1="4" x2="7" y2="10" />
    </svg>
  ),
  borrow: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 14a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2z" />
      <path d="M14 14v-2c0-1.66 1.34-3 3-3h2a3 3 0 0 1 3 3v2" />
      <path d="M10 7a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2z" />
      <path d="M7 7v-3c0-1.66 1.34-3 3-3h2a3 3 0 0 1 3 3v3" />
    </svg>
  )
};

// Utility function to format numbers with commas
const formatNumber = (num) => {
  if (num === null || num === undefined) return '';
  return parseFloat(num).toLocaleString('en-IN', {
    maximumFractionDigits: 2,
  });
};

const ReportCard = ({ deal }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">Deal #{deal.id}</h3>
        <span className="ml-auto text-xs font-medium text-gray-500">{deal.type}</span>
      </div>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Counterparty:</span> {deal.counterparty}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Amount:</span> {formatNumber(deal.amount)} Cr
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Interest Rate:</span> {deal.interestRate}%
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Maturity Date:</span> {deal.maturityDate}
      </p>
    </div>
  );
};


const Reports = () => {
  const [reportType, setReportType] = useState('lend');

  const lendDeals = [
    { id: '003', counterparty: 'PNB Bank', amount: 75, interestRate: 6, maturityDate: '2025-10-15', type: 'Lend' },
    { id: '004', counterparty: 'HDFC Bank', amount: 120, interestRate: 4.5, maturityDate: '2026-01-20', type: 'Lend' },
    { id: '005', counterparty: 'Kotak Mahindra', amount: 90, interestRate: 5.2, maturityDate: '2025-12-05', type: 'Lend' }
  ];

  const borrowDeals = [
    { id: '006', counterparty: 'ICICI Bank', amount: 200, interestRate: 7, maturityDate: '2026-03-10', type: 'Borrow' },
    { id: '007', counterparty: 'Axis Bank', amount: 150, interestRate: 6.5, maturityDate: '2026-02-28', type: 'Borrow' },
    { id: '008', counterparty: 'PNB Bank', amount: 80, interestRate: 8, maturityDate: '2026-05-22', type: 'Borrow' },
    { id: '009', counterparty: 'HSBC Bank', amount: 110, interestRate: 6.8, maturityDate: '2026-04-18', type: 'Borrow' },
    { id: '010', counterparty: 'Jio Finance', amount: 180, interestRate: 7.2, maturityDate: '2026-06-30', type: 'Borrow' }
  ];

  return (
  <div className="flex h-screen">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md border-r">
      <Sidebar />
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Deal Reports</h2>
        <div className="flex ml-auto space-x-3">
          <button
            onClick={() => setReportType('lend')}
            className={`flex items-center px-4 py-2 rounded-xl transition-colors font-medium ${
              reportType === 'lend'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            <span className="mr-2">{icons.lend}</span>
            Lend
          </button>
          <button
            onClick={() => setReportType('borrow')}
            className={`flex items-center px-4 py-2 rounded-xl transition-colors font-medium ${
              reportType === 'borrow'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            <span className="mr-2">{icons.borrow}</span>
            Borrow
          </button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportType === 'lend' &&
          lendDeals.map((deal) => <ReportCard key={deal.id} deal={deal} />)}
        {reportType === 'borrow' &&
          borrowDeals.map((deal) => <ReportCard key={deal.id} deal={deal} />)}
      </div>
    </main>
  </div>
);
};

export default Reports;
