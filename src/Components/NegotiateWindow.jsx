import React from "react";

const NegotiationModal = ({ deal, counterOffer, setCounterOffer, submitted, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Negotiate Deal
        </h2>

        {!submitted ? (
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded-lg border">
              <p className="text-sm text-gray-500">Deal Amount</p>
              <p className="font-semibold">{deal.DealAmount}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border">
              <p className="text-sm text-gray-500">Interest Rate Offered</p>
              <p className="font-semibold">{deal.InterestRate}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border">
              <p className="text-sm text-gray-500">Your Counteroffer</p>
              <input
                type="text"
                placeholder="Enter counter interest rate"
                value={counterOffer}
                onChange={(e) => setCounterOffer(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              onClick={onSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
            >
              Submit Negotiation
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-green-600 text-4xl mb-2">✔</div>
            <p className="text-gray-700 font-medium text-center">
              Negotiation request submitted to HDFC
            </p>
          </div>
        )}
        <button onClick={onClose} className="mt-4 w-full text-sm text-gray-500 hover:underline">
          Close
        </button>
      </div>
    </div>
  );
};

export default NegotiationModal;
