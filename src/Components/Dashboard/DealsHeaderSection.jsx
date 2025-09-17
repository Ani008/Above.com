import React from 'react';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// Dummy color values — replace with your actual theme or Tailwind config
const colors = {
  'gray-dark': '#4B5563',
  'gray-medium': '#D1D5DB',
  'green-primary': '#10B981',
  'green-dark': '#047857',
  'green-light': '#D1FAE5',
};

const DealsHeaderSection = () => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      {/* Search + Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <MagnifyingGlassIcon
            className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: colors['gray-dark'] }}
          />
          <input
            type="text"
            placeholder="Keyword"
            className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-1"
            style={{
              borderColor: colors['gray-medium'],
              '--tw-ring-color': colors['green-primary'],
            }}
          />
        </div>

        <button
          className="px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-dark transition-colors"
          style={{ backgroundColor: colors['green-primary'], color: 'white' }}
        >
          <span>Filters</span>
        </button>
      </div>

      {/* Sort Section */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm" style={{ color: colors['gray-dark'] }}>
          We've found{' '}
          <span className="font-semibold" style={{ color: colors['green-dark'] }}>
            1
          </span>
        </p>
        <div className="flex items-center space-x-2" style={{ color: colors['gray-dark'] }}>
          <span>Sort by</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border rounded-lg px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-1"
              style={{
                borderColor: colors['gray-medium'],
                '--tw-ring-color': colors['green-primary'],
              }}
            >
              <option>Date</option>
              <option>Interest Rate</option>
              <option>Relevance</option>
            </select>
            <ChevronDownIcon className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

        {/* Borrowers & Lenders Buttons */}
      <div className="flex gap-4 mb-6 mt-10">
        <button
          className="px-30 py-2 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: colors['green-light'],
            color: colors['green-dark'],
          }}
        >
          Borrowers
        </button>
        <button
          className="px-30 py-2 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: colors['gray-medium'],
            color: colors['gray-dark'],
          }}
        >
          Lenders
        </button>
      </div>
    </div>
  );
};

export default DealsHeaderSection;
