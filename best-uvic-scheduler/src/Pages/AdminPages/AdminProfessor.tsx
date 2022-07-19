import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetProfessorList } from "../../Util/ProfessorListHelper.tsx";
import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelDivView,
  SelectableTableLabelsView,
  SelectableTableIconElementDivView,
  SelectableTableElementClosedDivView,
  SelectableTableElementOpenedDivView,
  SelectableTableInputDiv,
  SelectableTableSingleInputDiv,
  SelectableTableCheckboxDiv,
} from "../../Components/SelectTable/SelectableTable.tsx";
import { TextInputView } from "../../Components/Input/input.tsx";
import { CheckboxView } from "../../Components/checkbox/checkbox.tsx";
import { CustomButtonView } from "../../Components/button/button.tsx";
import { CustomButtonGroupView } from "../../Components/button/buttongroup.tsx";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { type } from "os";

const TableDiv = styled.div`
  padding-top: 48px;
`;

export function AdminProfessorPage() {
  const [Professors, setProfessors] = useState([]);
  const [OpenedProfessor, setOpenedProfessor] = useState(0);

  GetProfessorList().then((response) => {
    setProfessors(response);
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <TableDiv>
      <SelectableTableDivView columns={5}>
        <SelectableTableHeaderDivView>
          <SelectableTableIconElementDivView />
          <SelectableTableLabelDivView>
            <SelectableTableLabelsView>Department</SelectableTableLabelsView>
            <SelectableTableLabelsView>Name</SelectableTableLabelsView>
            <SelectableTableLabelsView>
              Teaching/Research
            </SelectableTableLabelsView>
            <SelectableTableLabelsView>PENG</SelectableTableLabelsView>
          </SelectableTableLabelDivView>
        </SelectableTableHeaderDivView>
        {Professors.map(function (Professor, index) {

          const FullName = Professor.first_name + " " + Professor.last_name;

          if (OpenedProfessor === Professor) {
            return (
              <p> ya </p>
            );
          } else {
            return (
              <SelectableTableElementClosedDivView>
                <SelectableTableIconElementDivView>
                  <BiCaretDown
                    style={{ height: 16, width: 16 }}
                    onClick={() => {
                      setOpenedProfessor(Professor);
                    }}
                  />
                </SelectableTableIconElementDivView>
                <SelectableTableLabelDivView>
                  <SelectableTableLabelsView>
                    {Professor.department}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {FullName}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {Professor.is_teaching ? "Teaching" : "Research"}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {Professor.is_peng ? "Yes" : "No"}
                  </SelectableTableLabelsView>
                </SelectableTableLabelDivView>
              </SelectableTableElementClosedDivView>
            );
          }
        })}
      </SelectableTableDivView>
    </TableDiv>
  );
}

export default AdminProfessorPage;
