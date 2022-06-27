import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PDISelectProfessorList from "./ProfessorDataInput_SelectProfessorList.tsx";
import PDISelectProfessorQualifications from "./ProfessorQualifications.tsx";
import PDISelectProfessorPreferences from "./ProfessorPreferences.tsx";
import Summary from "./Summary.tsx";
import ProfessorTimetable from "./ProfessorTimetable.tsx";
import { ProfessorContext } from "../LoginPage.tsx";

export const QualificationsContext = React.createContext({
  selectedQualifications: {},
  setQualifications: (event) => {},
});

export const PreferencesContext = React.createContext({
  selectedPreferences: {},
  setPreferences: (event) => {},
});

export function ProfessorDataInputIndex() {
  const [selectedProfessor, setProfessor] = useState(0);
  const [qualifications, setQualifications] = useState({});
  const [preferences, setPreferences] = useState({});

  return (
    <ProfessorContext.Provider value={{ selectedProfessor, setProfessor }}>
      <QualificationsContext.Provider
        value={{ qualifications, setQualifications }}
      >
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
          <Routes>
            <Route path="" element={<PDISelectProfessorList />} />
            <Route
              path="Qualifications"
              element={<PDISelectProfessorQualifications />}
            />
            <Route
              path="Preferences"
              element={<PDISelectProfessorPreferences />}
            />
            <Route
              path="TimeAvail"
              element={
                <ProfessorTimetable
                  {...{
                    semesters: ["Fall 2022", "Spring 2023", "Summer 2023"],
                  }}
                />
              }
            />
            <Route path="Summary" element={<Summary />} />
          </Routes>
        </PreferencesContext.Provider>
      </QualificationsContext.Provider>
    </ProfessorContext.Provider>
  );
}

export default ProfessorDataInputIndex;
