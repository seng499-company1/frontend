import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

export function AdminIndex() {

  return (
    <Routes>
      //<Route path="" element={<PDISelectProfessorList />} />
      <Route
        path="Courses"
        element={<PDISelectProfessorQualifications />}
      />
    </Routes>
  );
}

export default AdminIndex;
