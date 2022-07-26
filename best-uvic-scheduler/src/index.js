import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProfessorDataInputIndex from "./Pages/ProfessorDataInput/index.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import LandingPage from "./Pages/AdminPages/LandingPage.tsx";
import { IntegrationTest } from "./Pages/IntegrationTest.tsx";
import Summary_RO from "./Pages/AdminPages/Summary_RO.tsx";
import AdminIndex from "./Pages/AdminPages/index.tsx";
import Timetable from "./Pages/Timetable.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> <--- commented out due to bug with double render
  <HashRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/SelectProfessor/*" element={<ProfessorDataInputIndex />} />
      {/* <Route path="/LandingPage" element={<LandingPage />} /> */}
      <Route path="/IntegrationTest" element={<IntegrationTest />} />
      <Route path="/Admin/*" element={<AdminIndex />} />
      {/* <Route path="/LandingPage/Summary_RO" element={<Summary_RO />} /> */}
      <Route path="/TimetableTest" element={<Timetable />} />
    </Routes>
  </HashRouter>
  //</React.StrictMode>
);
