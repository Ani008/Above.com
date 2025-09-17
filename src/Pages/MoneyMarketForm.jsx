import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const MoneyMarketForm = ({ onPostDeal }) => {
  const [instrumentType, setInstrumentType] = useState('');
  const [dealAmount, setDealAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [interestRateType, setInterestRateType] = useState('');
  const [negotiable, setNegotiable] = useState(false);
  const [collateralType, setCollateralType] = useState('');
  const [collateralDescription, setCollateralDescription] = useState('');
  const [preClosureAllowed, setPreClosureAllowed] = useState(false);
  const [comments, setComments] = useState('');

  // Contact details are now state variables, allowing user input
  const [contactPerson, setContactPerson] = useState('');
  const [designation, setDesignation] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isPosted, setIsPosted] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  
   const formData = {
      instrumentType,
      dealAmount,
      tenure,
      interestRate,
      interestRateType,
      negotiable,
      collateralType,
      collateralDescription,
      preClosureAllowed,
      comments,
      contactPerson,
      designation,
      contactEmail,
    };
    
    console.log("Form data saved locally:", formData);

    onPostDeal(formData);
    setIsPosted(true);

    alert("Form data saved successfully (frontend only)!");
  };


  const handlePreviewTermsheet = () => {
    alert('Termsheet preview would be displayed here!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
  <div className="w-64 bg-white shadow-md h-full">
    <Sidebar />
  </div>
   <div className="flex-1 p-8">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl border border-blue-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Post Deal Request</h2>
        <p className="text-sm text-gray-600 mb-8 text-center">Fill in the details below to post your deal request on the money market platform.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Instrument Details */}
          <div>
            <h3 className="text-xl font-medium text-blue-700 mb-4 pb-2 border-b border-blue-200">1. Instrument Details</h3>
            <p className="text-sm text-gray-500 mb-4">Define what kind of deal this is.</p>

            <div className="mb-4">
              <label htmlFor="instrumentType" className="block text-sm font-medium text-gray-700 mb-1">
                Instrument Type <span className="text-red-500">*</span>
              </label>
              <select
                id="instrumentType"
                value={instrumentType}
                onChange={(e) => setInstrumentType(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                required
              >
                <option value="">Select an instrument</option>
                <option value="Call Money">Call Money</option>
                <option value="Notice Money">Notice Money</option>
                <option value="Term Money">Term Money</option>
                <option value="Repo">Repo</option>
                <option value="Reverse Repo">Reverse Repo</option>
                <option value="CD">CD</option>
                <option value="CP">CP</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="dealAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Deal Amount (in Cr) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="dealAmount"
                value={dealAmount}
                onChange={(e) => setDealAmount(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                placeholder="e.g., 100"
                required
              />
              <p className="mt-1 text-xs text-gray-500">Fixed value, banker enters manually.</p>
            </div>

            <div className="mb-4">
              <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">
                Tenure (Days) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="tenure"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                placeholder="e.g., 7"
                required
              />
              <p className="mt-1 text-xs text-gray-500">e.g., 1 day, 7 days, 30 days.</p>
            </div>

            <div className="mb-4">
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                step="0.01" // Allows for decimal values like 6.8%
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                placeholder="e.g., 6.80"
                required
              />
              <p className="mt-1 text-xs text-gray-500">Banker enters rate (e.g., 6.8%).</p>
            </div>

            <div className="mb-4">
              <label htmlFor="interestRateType" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate Type <span className="text-red-500">*</span>
              </label>
              <select
                id="interestRateType"
                value={interestRateType}
                onChange={(e) => setInterestRateType(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                required
              >
                <option value="">Select type</option>
                <option value="Fixed">Fixed</option>
                <option value="Floating">Floating</option>
              </select>
            </div>

            <div className="flex items-center justify-between mb-4 mt-8">
              <span className="flex-grow text-sm font-medium text-gray-700">Negotiable Interest Rate?</span>
              <label htmlFor="negotiable" className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="negotiable"
                  checked={negotiable}
                  onChange={(e) => setNegotiable(e.target.checked)}
                  className="sr-only peer"
                />
                {/* Visual toggle switch */}
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">{negotiable ? 'YES' : 'NO'}</span>
              </label>
              <p className="absolute mt-10 ml-0 text-xs text-gray-500">If YES, counter-offer allowed.</p>
            </div>
          </div>

          {/* Collateral & Compliance Details */}
          <div>
            <h3 className="text-xl font-medium text-blue-700 mb-4 pb-2 border-b border-blue-200">2. Collateral & Compliance Details</h3>
            <p className="text-sm text-gray-500 mb-4">Show how the deal is secured.</p>

            <div className="mb-4">
              <label htmlFor="collateralType" className="block text-sm font-medium text-gray-700 mb-1">
                Collateral Type <span className="text-red-500">*</span>
              </label>
              <select
                id="collateralType"
                value={collateralType}
                onChange={(e) => setCollateralType(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                required
              >
                <option value="">Select collateral type</option>
                <option value="G-Sec">G-Sec</option>
                <option value="T-Bill">T-Bill</option>
                <option value="Corporate Bond">Corporate Bond</option>
                <option value="FD">FD</option>
                <option value="No Collateral">No Collateral</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="collateralDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Collateral Description
              </label>
              <textarea
                id="collateralDescription"
                rows="3"
                value={collateralDescription}
                onChange={(e) => setCollateralDescription(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                placeholder='e.g., “7.26% G-Sec, maturing 2032, worth ₹120Cr”'
              ></textarea>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="flex-grow text-sm font-medium text-gray-700">Pre-Closure Allowed?</span>
              <label htmlFor="preClosureAllowed" className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="preClosureAllowed"
                  checked={preClosureAllowed}
                  onChange={(e) => setPreClosureAllowed(e.target.checked)}
                  className="sr-only peer"
                />
                {/* Visual toggle switch */}
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">{preClosureAllowed ? 'YES' : 'NO'}</span>
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="settlementMode" className="block text-sm font-medium text-gray-700 mb-1">
                Settlement Mode
              </label>
              <input
                type="text"
                id="settlementMode"
                value="RTGS (Fixed)"
                readOnly
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600 sm:text-sm cursor-not-allowed"
              />
              <p className="mt-1 text-xs text-gray-500">RTGS only (for now, others later).</p>
            </div>

            <div className="mb-4">
              <label htmlFor="supportingDocs" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Supporting Docs (Optional)
              </label>
              <input
                type="file"
                id="supportingDocs"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-1 text-xs text-gray-500">Optional for regulators.</p>
            </div>
          </div>

          {/* Contact & Compliance Person */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium text-blue-700 mb-4 pb-2 border-b border-blue-200">3. Contact & Compliance Person</h3>
            <p className="text-sm text-gray-500 mb-4">Help deal counterparties reach out for clarifications.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mb-4">
              {/* Contact Person Input */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                  placeholder="e.g., Rajesh Kumar"
                  required
                />
              </div>
              {/* Designation Input */}
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                  placeholder="e.g., Head of Treasury"
                  required
                />
              </div>
              {/* Contact Email Input */}
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                  placeholder="e.g., rajesh.kumar@bank.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Add Comments
              </label>
              <textarea
                id="comments"
                rows="3"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-blue-50"
                placeholder='Optional — e.g., "Need funds urgently", etc.'
              ></textarea>
            </div>
          </div>

          {/* Submission & Preview */}
          <div className="md:col-span-2 flex justify-end items-center space-x-4 pt-6 border-t border-blue-200">
            <button
              type="button"
              onClick={handlePreviewTermsheet}
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Preview Termsheet
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Post Deal
            </button>
          </div>
        </form>
      </div>

   </div>
      
    </div>
  );
};

export default MoneyMarketForm;
