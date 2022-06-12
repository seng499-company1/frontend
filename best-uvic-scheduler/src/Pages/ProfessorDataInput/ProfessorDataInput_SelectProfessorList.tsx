import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import ProfessorListDivView from "../../Components/ProfessorSearch/ProfessorList.tsx";
import SearchBarView from "../../Components/SearchBar/Searchbar.tsx";
import ProfessorListElementView from "../../Components/ProfessorSearch/ProfessorListElement.tsx";
import * as ProfessorListHelper from "../../Util/ProfessorListHelper.tsx";

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  background-color: #FEFEFE;
`;

const OutsideDivStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-50);
  height: 100vh;
`;

export function PDISelectProfessorList() {

  const [isSelected, setSelected] = useState(0);
  const navigate = useNavigate();

  //get data
  const ProfessorData = ProfessorListHelper.GetProfessorList();
  const Professors = ProfessorData.Professors;

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
      <ProfessorListDivView>
        <SearchBarView {...{ InList: true }}/>
        {
          Professors.map(function(Professor) {
            return <ProfessorListElementView
                  key={Professor.uuid}
                  Selected={isSelected === Professor}
                  customClickEvent={() => {
                    setSelected(Professor)
                  }}> {Professor.first_name} {Professor.last_name} </ProfessorListElementView>
        })}
      </ProfessorListDivView>
      <CustomButtonGroupView {...{ Amount: "Progession" }}>
        <CustomButtonView
        {...{ Theme: "Primary" }}
        Disabled={isSelected === 0}
        customClickEvent={() => {
          if(isSelected === 0){
            console.log("Please Select A Name");
          }else{
            console.log(isSelected.uuid);
            navigate(`/SelectProfessor/Qualifications`);
          }
        }}> Confirm </CustomButtonView>
      </CustomButtonGroupView>
    </InsideDivStyle>
  </OutsideDivStyle>
  );
}

export default PDISelectProfessorList;
