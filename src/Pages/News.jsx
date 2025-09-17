// src/Pages/News.jsx
import React from "react";
import Sidebar from "../Components/Sidebar";

const demoNews = [
  {
    title: "RBI injects ₹50,000 crore liquidity via repo auction",
    source: "Economic Times",
    time: "2 hours ago",
    summary:
      "The Reserve Bank of India has infused liquidity into the system to ease short-term rates amid rising demand for funds in the money market.",
  },
  {
    title: "Corporate bond yields remain steady amid investor demand",
    source: "Business Standard",
    time: "5 hours ago",
    summary:
      "Bond yields stayed flat as mutual funds and insurance companies showed sustained demand for AAA-rated papers.",
  },
  {
    title: "Government to auction T-Bills worth ₹20,000 crore this week",
    source: "Mint",
    time: "1 day ago",
    summary:
      "The central government announced a fresh auction of Treasury Bills across 91-day, 182-day, and 364-day maturities.",
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 lg:w-1/6 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* News Section */}
      <div className="flex-1 p-6 md:p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Money Market News</h1>
        <div className="space-y-6">
          {demoNews.map((news, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{news.title}</h2>
              <p className="text-gray-600 text-sm mt-1">
                {news.source} • {news.time}
              </p>
              <p className="text-gray-700 mt-3">{news.summary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
