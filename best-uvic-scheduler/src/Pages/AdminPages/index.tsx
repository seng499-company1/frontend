import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import AdminCoursePage from "./AdminCourse.tsx";

export function AdminIndex() {

  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route
        path="Courses"
        element={<AdminCoursePage />}
      />
    </Routes>
  );
}

export default AdminIndex;
