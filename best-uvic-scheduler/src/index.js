import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProfessorDataInputIndex from "./Pages/ProfessorDataInput/index.tsx";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./Pages/LoginPage.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> <--- commented out due to bug with double render
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/SelectProfessor/*" element={<ProfessorDataInputIndex />} />
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
