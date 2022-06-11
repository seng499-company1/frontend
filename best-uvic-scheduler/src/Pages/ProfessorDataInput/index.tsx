import React, { useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import PDISelectProfessorList from "./ProfessorDataInput_SelectProfessorList.tsx";

  console.log("I'm in the index")

export function ProfessorDataInputIndex() {

  return (
    <Routes>
      <Route path="" element={<PDISelectProfessorList />} />
    </Routes>
  );

}

export default ProfessorDataInputIndex;
