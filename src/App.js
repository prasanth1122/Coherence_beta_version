import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./client/pages/aboutUsPage";

import LibraryPage from "./client/pages/libraryPage";
import PaymentPage from "./client/pages/paymentPage";
import PromocodePage from "./client/pages/promocodePage";
import RegistrationPage from "./client/pages/registrationPage";
import StatisticsPage from "./client/pages/statisticsPage";
import WriteArticlePage from "./client/pages/writeArticlePage";
import HomePage from "./client/pages/homePage";
import LandingPage from "./client/pages/landingPage";
import { NavigationProvider } from "./client/store/context/navigationContext";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen font-patrick ">
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path={`/home`} element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/subscribe" element={<PaymentPage />} />
            <Route path="/promo" element={<PromocodePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/article" element={<WriteArticlePage />} />
          </Routes>
        </NavigationProvider>
      </div>
    </Router>
  );
}

export default App;
