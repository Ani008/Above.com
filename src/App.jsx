import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import MoneyMarketForm from "./Pages/MoneyMarketForm";
import DealPosting from "./Components/Dashboard/DealBoardSection";
import NewsPage from "./Pages/News";
import Record from "./Pages/Record";
import Reports from "./Pages/Reports";

import "./App.css";
import ProfilePage from "./Pages/ProfilePage";
import DealDetails from "./Pages/DealDetails";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <Router>
  <Routes>
  
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/inbox" element={<Inbox />} />
    <Route path="/profilePage" element = {<ProfilePage/>}/> 
    <Route path="/postadeal" element = {<MoneyMarketForm/>} />
    <Route path="/deal" element = {<DealDetails/>} />
    <Route path="/news" element={<NewsPage />} />
    <Route path="/record" element={<Record />} />
    <Route path="/report" element={<Reports/>} />

  </Routes>
</Router>

  );
};

export default App;
