import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import ChartSection from "../Components/Dashboard/ChartSection";
import StatsSection from "../Components/Dashboard/StatsSection"; 
import DealsHeaderSection from "../Components/Dashboard/DealsHeaderSection";

import "../App.css";
import DealBoardSection from "../Components/Dashboard/DealBoardSection";


const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-x-scroll no-scrollbar">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64 p-8">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
           
            <div className="flex items-center space-x-3">
              
            </div>
          </div>

          {/* ✅ Stats Cards */}
          <StatsSection />

          {/* ✅ Chart Section */}
          <section>
            <ChartSection />
          </section>

          <div className="mt-12">
             <DealsHeaderSection/>
          </div>

          <div className="mt-12">
             <DealBoardSection/>
          </div>

         
        </main>

      </div>
    </div>
  );
};

export default Dashboard;
