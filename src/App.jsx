import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import SwapDeal from "./components/Forms/SwapDeal";
import Layout from "./Layout";
import TestRun from "./components/Forms/TestRun";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/swap-deal" element={<SwapDeal />} />
          <Route path="/test-run" element={<TestRun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
