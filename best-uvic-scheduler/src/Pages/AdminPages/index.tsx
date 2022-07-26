import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import AdminCoursePage from "./AdminCourse.tsx";
import AdminProfessorPage from "./AdminProfessor.tsx";
import NewCoursePage from "./NewCourse.tsx";
import Summary_RO from "./Summary_RO.tsx";

import NewProfessorPage from "./NewProfessor.tsx";
import GenerateSchedule from "./GenerateSchedule.tsx";
import GenerateSchedule1 from "./GenerateSchedule1.tsx";
import GenerateSchedule2 from "./GenerateSchedule2.tsx";
import { HeaderView } from "../../Components/Header/header.tsx";
import { Background } from "../../Components/background/background.tsx";

export const semesters = ["Fall 2022", "Spring 2023", "Summer 2023"];

export const ProfessorNameContext = React.createContext({
  selectedProfessorName: {},
  setProfessorName: (event) => {},
});

const initPrefDays = semesters.reduce(
  (arr, sem) => ((arr[sem] = Array(5).fill(false)), arr),
  {}
);
export function AdminIndex() {
  const [selectedProfessorName, setProfessorName] = useState({});

  // setProfessorName({ test: "test" });
  return (
    <ProfessorNameContext.Provider
      value={{ selectedProfessorName, setProfessorName }}
    >
      <Background>
        <HeaderView
          currentPath={window.location.href.replace(window.location.origin, "")}
        />

        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="Courses" element={<AdminCoursePage />} />
          <Route path="Professors" element={<AdminProfessorPage />} />
          <Route path="Newcourse" element={<NewCoursePage />} />
          <Route path="Newprofessor" element={<NewProfessorPage />} />
          <Route path="Summary_RO" element={<Summary_RO />} />

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
    </ProfessorNameContext.Provider>
  );
}

export default AdminIndex;
