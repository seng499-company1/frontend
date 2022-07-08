import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import AdminCoursePage from "./AdminCourse.tsx";
import GenerateSchedule from "./GenerateSchedule.tsx";

export const semesters = ["Fall 2022", "Spring 2023", "Summer 2023"];

const initPrefDays = semesters.reduce(
  (arr, sem) => ((arr[sem] = Array(5).fill(false)), arr),
  {}
);
export function AdminIndex() {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route path="Courses" element={<AdminCoursePage />} />
      <Route
        path="Schedule"
        element={
          <GenerateSchedule
            {...{
              semesters,
            }}
          />
        }
      />
    </Routes>
  );
}

export default AdminIndex;
