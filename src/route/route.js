import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Navbar from "../widgets/navbar";
import MainPage from "../component/page/home/mainPage";
import MainPageBuy from "../component/page/buy/mainPageBuy";
import Mainsell from "../component/page/sell/mainsell";
import MainPageContact from "../component/page/contactUs/mainPageContact";
import MainPageProperties from "../component/page/properties/mainPageProperties";
import ScrollToTop from "../component/scrollTop/scrollToTop";
import MainPageResource from "../component/page/resources/mainPageResource";


const AccessComponent = () => {

  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/buy" element={<MainPageBuy />} />
          <Route path="/sell" element={<Mainsell />} />
          <Route path="/contactus" element={<MainPageContact />} />
          <Route path="/properties" element={<MainPageProperties />} />
          <Route path="/resources" element={<MainPageResource />} />
          </Route>
          {/* Private Route */}
          <Route path="/" element={<PrivateRoute />}>
      
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default AccessComponent;
