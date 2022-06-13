import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProfessorContext } from "./index.tsx";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import ProfessorListDivView from "../../Components/ProfessorSearch/ProfessorList.tsx";
import SearchBarView from "../../Components/SearchBar/Searchbar.tsx";
import ProfessorListElementView from "../../Components/ProfessorSearch/ProfessorListElement.tsx";
import * as ProfessorListHelper from "../../Util/ProfessorListHelper.tsx";

export const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  background-color: #fefefe;
`;

export const OutsideDivStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-50);
  min-height: 100vh;
  padding: var(--space-2x-large) 0;
`;

export function PDISelectProfessorList() {
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const navigate = useNavigate();

  //get data
  const ProfessorData = ProfessorListHelper.GetProfessorList();
  const Professors = ProfessorData.Professors;

  console.log("Now i'm in the list");

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <ProfessorListDivView>
          <SearchBarView {...{ InList: true }} />
          {Professors.map(function (Professor) {
            return (
              <ProfessorListElementView
                key={Professor.uuid}
                Selected={selectedProfessor === Professor}
                customClickEvent={() => {
                  setProfessor(Professor);
                }}
              >
                {" "}
                {Professor.first_name} {Professor.last_name}{" "}
              </ProfessorListElementView>
            );
          })}
        </ProfessorListDivView>
        <CustomButtonGroupView {...{ Amount: "Progession" }}>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            Disabled={selectedProfessor === 0}
            customClickEvent={() => {
              if (selectedProfessor === 0) {
                console.log("Please Select A Name");
              } else {
                console.log(selectedProfessor.uuid);
                navigate(`/SelectProfessor/Qualifications`);
              }
            }}
          >
            {" "}
            Confirm{" "}
          </CustomButtonView>
        </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default PDISelectProfessorList;
