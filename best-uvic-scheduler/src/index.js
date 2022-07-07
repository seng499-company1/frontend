import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProfessorDataInputIndex from "./Pages/ProfessorDataInput/index.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import LandingPage from "./Pages/AdminPages/LandingPage.tsx";
import { IntegrationTest } from "./Pages/IntegrationTest.tsx";
import Summary_RO from "./Pages/AdminPages/Summary_RO.tsx";
import AdminIndex from "./Pages/AdminPages/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> <--- commented out due to bug with double render
  <BrowserRouter>
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/SelectProfessor/*" element={<ProfessorDataInputIndex />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/IntegrationTest" element={<IntegrationTest />} />
      <Route path="/Admin/*" element={<AdminIndex />} />
      <Route path="/LandingPage/Summary_RO" element={<Summary_RO />} />
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>
);
