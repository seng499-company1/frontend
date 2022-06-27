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
import { Background } from "../../Components/background/background.tsx";

const Header = styled.h1`
  text-align: center;
`;

export function PDISelectProfessorList() {
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const navigate = useNavigate();

  //get data
  const ProfessorData = ProfessorListHelper.GetProfessorList();
  const Professors = ProfessorData.Professors;

  return (
    <Background>
      <Header>Please Select your Name From The List Below</Header>
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
    </Background>
  );
}

export default PDISelectProfessorList;
