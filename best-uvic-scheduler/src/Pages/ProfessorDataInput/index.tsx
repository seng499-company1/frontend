import React, { useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import PDISelectProfessorList from "./ProfessorDataInput_SelectProfessorList.tsx";
import PDISelectProfessorQualifications from "./ProfessorQualifications.tsx";
import PDISelectProfessorPreferences from "./ProfessorPreferences.tsx";

export function ProfessorDataInputIndex() {

  return (
    <Routes>
      <Route path="" element={<PDISelectProfessorList />} />
      <Route path="Qualifications" element={<PDISelectProfessorQualifications />} />
      <Route path="Preferences" element={<PDISelectProfessorPreferences />} />
    </Routes>
  );

}

export default ProfessorDataInputIndex;
