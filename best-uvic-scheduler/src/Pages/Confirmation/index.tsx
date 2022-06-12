import styled from "styled-components";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PDISelectProfessorList from "./SummaryPage";

export function ProfessorDataInputIndex() {
  return (
    <Routes>
      <Route path="" element={<PDISelectProfessorList />} />
    </Routes>
  );
}

export default ProfessorDataInputIndex;
