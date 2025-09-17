import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
// import NegotiationModal from "./NegotiationModal";  // adjust path


// Helper component to show label + value
const InfoItem = ({ label, value }) => (
  <div>
    <span className="font-medium text-gray-500">{label}:</span> 
    <span className="text-gray-800">{value}</span>
  </div>
);

// Tab Button Component for Visits
const TabButton = ({ text, isActive, onClick }) => (
  <button
    className={`py-2 px-4 text-sm font-medium rounded-t-lg transition duration-200 ${
      isActive
        ? "text-blue-700 border-b-2 border-blue-700"
        : "text-gray-500 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

// Visit Item Component
const VisitItem = ({ visit }) => (
  <div
    className={`flex items-center p-4 rounded-lg shadow-sm ${
      visit.status === "Scheduled" ? "bg-blue-50" : "bg-gray-100"
    }`}
  >
    <div
      className="flex-shrink-0 w-2 h-full rounded-l-lg mr-4"
      style={{
        backgroundColor: visit.status === "Scheduled" ? "#60A5FA" : "#9CA3AF",
      }}
    ></div>
    <div className="flex-grow grid grid-cols-4 gap-4 text-sm">
      <div>
        <p className="font-semibold">{visit.date}</p>
        <p className="text-gray-500">{visit.time}</p>
      </div>
      <div>
        <p className="font-semibold">Service</p>
        <p className="text-gray-700">{visit.service}</p>
      </div>
      <div>
        <p className="font-semibold">Employee</p>
        <p className="text-gray-700">{visit.doctor}</p>
      </div>
      <div className="flex items-center justify-end">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            visit.status === "Scheduled"
              ? "bg-blue-200 text-blue-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {visit.status}
        </span>
      </div>
    </div>
  </div>
);

// File Item Component
const FileItem = ({ file }) => (
  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200"> {/* Changed border-gray-950 to border-gray-200 */}
    <div className="flex items-center">
      <span className="text-xl mr-2 text-gray-500">📄</span>
      <p className="text-sm text-gray-800">{file.name}</p>
    </div>
    <p className="text-xs text-gray-500">{file.size}</p>
  </div>
);


const DealDetails = () => {
  const [activeTab, setActiveTab] = useState('future'); 
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [counterOffer, setCounterOffer] = useState("");

  const Data = {
    name: "Borrower - HDFC Bank",
    instrumentType: "T-Bills",
    DealAmount: "₹50,00,000",
    Tenure: "2 Days",
    InterestRate: "7.2%",
    Negotiable: "Yes",
    phone: "+91 8767886270",
    email: "aniketchakke63@gmail.com",
    CollateralType: "Government Bonds",
    PreClosureAllowed: "Yes",
    CollateralDescription:
      "Government-backed securities worth ₹1 Cr as collateral.",
    Comments: "Borrower prefers short tenure deals.",

    // These fields were likely copied from a patient profile, assuming static for now
    Documents: [
      { date: "2025-09-25", time: "11:30", service: "KYC Verification", doctor: "Officer Sharma", status: "Scheduled" },
      { date: "2025-09-30", time: "01:30", service: "Loan Agreement Signing", doctor: "Officer Iyer", status: "Scheduled" },
    ],
    pastVisits: [],
    plannedTreatments: [],
    files: [
      { name: "KYC Document.pdf", size: "123kb" },
      { name: "Collateral Agreement.pdf", size: "123kb" },
    ],
    notes: [
      { name: "Internal Review.pdf", size: "123kb" },
      { name: "Negotiation Notes.pdf", size: "123kb" },
    ],
  };

  const handleSubmitNegotiation = () => {
  setSubmitted(true);
  setTimeout(() => {
    setShowModal(false);
    setSubmitted(false);
    setCounterOffer("");
  }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-inter">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100 rounded-r-2xl shadow-inner pl-[20%]"> 
        {/* Header */}
        <header className="flex justify-between items-center pb-6 border-b border-gray-200 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Deal Profile</h1>
        </header>

        {/* Deal Info */}
        <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {/* Left Column: Borrower Info */}
          <div className="col-span-1 flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
            <img
              src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1720244492"
              alt="Borrower Logo"
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-blue-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/120x120/FF69B4/FFFFFF?text=HDFC";
              }}
            />
            <h2 className="text-xl font-bold text-gray-800">{Data.name}</h2>
            <p className="text-gray-600 text-sm mb-2">Private</p>
            <p className="text-blue-600 text-sm">{Data.phone}</p>
            <p className="text-blue-600 text-sm">{Data.email}</p>
          </div>

          {/* Right Columns: Deal Information & Collateral Details */}
          <div className="lg:col-span-2 md:col-span-1 space-y-6">
            {/* Deal Information */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Deal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <InfoItem label="Instrument Type" value={<strong>{Data.instrumentType}</strong>} />
                <InfoItem label="Deal Amount" value={<strong>{Data.DealAmount}</strong>} />
                <InfoItem label="Tenure" value={<strong>{Data.Tenure}</strong>} />
                <InfoItem label="Interest Rate" value={<strong>{Data.InterestRate}</strong>} />
                <InfoItem label="Negotiable" value={<strong>{Data.Negotiable}</strong>} />
              </div>
            </div>

            {/* Collateral Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Collateral Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <InfoItem label="Collateral Type" value={<strong>{Data.CollateralType}</strong>} />
                <InfoItem label="Pre Closure Allowed" value={<strong>{Data.PreClosureAllowed}</strong>} />
                {/* Collateral Description and Comments span full width for better readability */}
                <div className="col-span-full">
                  <InfoItem label="Collateral Description" value={<strong>{Data.CollateralDescription}</strong>} />
                </div>
                <div className="col-span-full">
                  <InfoItem label="Comments" value={<strong>{Data.Comments}</strong>} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visits, Files, and Notes Section */}
        <section className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {/* Visits */}
          <div className="lg:col-span-2 md:col-span-1 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex border-b border-gray-200 mb-4">
              <TabButton text="Documents (2)" isActive={activeTab === 'future'} onClick={() => setActiveTab('future')} /> {/* Added onClick */}
              <TabButton text="Past Deal Record" isActive={activeTab === 'past'} onClick={() => setActiveTab('past')} /> {/* Added onClick */}
              <TabButton text="Review" isActive={activeTab === 'planned'} onClick={() => setActiveTab('planned')} /> {/* Added onClick */}
            </div>
            <div className="space-y-4">
              {activeTab === 'future' && Data.Documents.map((visit, index) => ( // Used Data.Documents
                <VisitItem key={index} visit={visit} />
              ))}
              {activeTab === 'past' && <p className="text-gray-500">No past visits recorded.</p>}
              {activeTab === 'planned' && <p className="text-gray-500">No planned treatments.</p>}
            </div>
          </div>

          {/* Files and Notes */}
          <div className="col-span-1 space-y-6">
            {/* Files */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Files</h3>
                <button className="text-blue-600 text-sm font-medium hover:underline">DOWNLOAD</button>
              </div>
              <div className="space-y-3">
                {Data.files.map((file, index) => ( // Used Data.files
                  <FileItem key={index} file={file} />
                ))}
              </div>
            </div>

            
          </div>
        </section>

        {/* Buttons Section */}
      <section className="mt-8 flex justify-center space-x-6">
        <button
          onClick={() => setShowModal(true)}   // ✅ open modal
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md shadow-sm transition"
        >
          Negotiate
        </button>
        <button
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-sm transition"
        >
          Finalize Deal
        </button>
      </section>

      {/* Negotiation Modal (conditionally rendered) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Negotiate Deal
            </h2>

            {/* Deal Info */}
            <div className="p-3 bg-gray-50 rounded-lg border mb-3">
              <p className="text-sm text-gray-500">Deal Amount</p>
              <p className="font-semibold">{Data.DealAmount}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border mb-3">
              <p className="text-sm text-gray-500">Interest Rate Offered</p>
              <p className="font-semibold">{Data.InterestRate}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border mb-3">
              <p className="text-sm text-gray-500">Your Counteroffer</p>
              <input
                type="text"
                placeholder="Enter counter interest rate"
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Submit + Close */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition mb-2"
            >
              Submit Negotiation
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full text-sm text-gray-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </main>
    </div>
  );
};

// Main App component to render DealDetails
export default function App() {
    return <DealDetails />;
}
