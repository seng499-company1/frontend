import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelsView,
  SelectableTableIconElementDivView,
  SelectableTableElementClosedDivView,
  SelectableTableElementOpenedDivView,
  SelectableTableInputDiv,
  SelectableTableSingleInputDiv,
  SelectableTableCheckboxDiv,
} from "../SelectTable/SelectableTable.tsx";

const TableDiv = styled.div`
  padding-top: 4px;
`;
const SelectableTableLabelDivView = styled.div`
  height: 5px;
  width: 100%;
  display: contents;
`;

export const noTimesMessage = (
  <SelectableTableElementClosedDivView>
    <SelectableTableLabelDivView>
      <SelectableTableLabelsView>
        No Times Entered For This Semester
      </SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
    </SelectableTableLabelDivView>
  </SelectableTableElementClosedDivView>
);

export const leaveReasonView = (semesterKey: string, leaveReason: any) => {
  if (leaveReason[semesterKey] != "") {
    return (
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>
          Away this semester, Leave Reason:
        </SelectableTableLabelsView>

        <SelectableTableLabelsView>
          {leaveReason[semesterKey]}
        </SelectableTableLabelsView>
        <SelectableTableLabelsView></SelectableTableLabelsView>
        <SelectableTableLabelsView></SelectableTableLabelsView>
        <SelectableTableLabelsView></SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    );
  }
};

export const leaveReasonView_RO = (semesterKey: string, leaveReason: any) => {
  if (leaveReason != "") {
    return (
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>
          Away this semester, Leave Reason:
        </SelectableTableLabelsView>

        <SelectableTableLabelsView>{leaveReason}</SelectableTableLabelsView>
        <SelectableTableLabelsView></SelectableTableLabelsView>
        <SelectableTableLabelsView></SelectableTableLabelsView>
        <SelectableTableLabelsView></SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    );
  }
};
export const timesEnteredMessage = (
  <SelectableTableElementClosedDivView>
    <SelectableTableLabelDivView>
      <SelectableTableLabelsView>Times Entered:</SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
    </SelectableTableLabelDivView>
  </SelectableTableElementClosedDivView>
);

export const semesterHeader = (semesterName: string) => {
  return (
    <SelectableTableHeaderDivView>
      <SelectableTableLabelsView>{semesterName}</SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
      <SelectableTableLabelsView></SelectableTableLabelsView>
    </SelectableTableHeaderDivView>
  );
};

export const coursesMessage = (
  <SelectableTableHeaderDivView>
    <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
    <SelectableTableLabelsView></SelectableTableLabelsView>
    <SelectableTableLabelsView></SelectableTableLabelsView>
    <SelectableTableLabelsView>Qualification</SelectableTableLabelsView>
    <SelectableTableLabelsView>Preference</SelectableTableLabelsView>
  </SelectableTableHeaderDivView>
);

export const maxCoursesMessage = (max: number) => {
  return (
    <SelectableTableElementClosedDivView>
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>
          {" "}
          Maximum number of courses per semester:
        </SelectableTableLabelsView>
        <SelectableTableLabelsView>{max}</SelectableTableLabelsView>
        <SelectableTableLabelsView> </SelectableTableLabelsView>
        <SelectableTableLabelsView> </SelectableTableLabelsView>
        <SelectableTableLabelsView> </SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    </SelectableTableElementClosedDivView>
  );
};
