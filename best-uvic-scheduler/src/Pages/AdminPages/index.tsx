import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import AdminCoursePage from "./AdminCourse.tsx";
import AdminProfessorPage from "./AdminProfessor.tsx";
import NewCoursePage from "./NewCourse.tsx";
import GenerateSchedule from "./GenerateSchedule.tsx";
import GenerateSchedule1 from "./GenerateSchedule1.tsx";
import GenerateSchedule2 from "./GenerateSchedule2.tsx";
import { HeaderView } from "../../Components/Header/header.tsx";
import { Background } from "../../Components/background/background.tsx";

export const semesters = ["Fall 2022", "Spring 2023", "Summer 2023"];

const initPrefDays = semesters.reduce(
  (arr, sem) => ((arr[sem] = Array(5).fill(false)), arr),
  {}
);
export function AdminIndex() {
  return (
    <Background>
      <HeaderView
        currentPath={window.location.href.replace(window.location.origin, "")}
      />

      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="Courses" element={<AdminCoursePage />} />
        <Route path="Professors" element={<AdminProfessorPage />} />
        <Route path="Newcourse" element={<NewCoursePage />} />
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
        <Route
          path="Schedule1"
          element={
            <GenerateSchedule1
              {...{
                semesters,
              }}
            />
          }
        />
        <Route
          path="Schedule2"
          element={
            <GenerateSchedule2
              {...{
                semesters,
              }}
            />
          }
        />
      </Routes>
    </Background>
  );
}

export default AdminIndex;
