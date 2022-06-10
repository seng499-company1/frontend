import React, { useState } from 'react';
import CustomButtonView from "../../Components/button/button.tsx"
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx"
import ProfessorListDivView from "../../Components/ProfessorSearch/ProfessorList.tsx";
import SearchBarView from "../../Components/SearchBar/Searchbar.tsx";
import ProfessorListElementView from "../../Components/ProfessorSearch/ProfessorListElement.tsx";
import * as ProfessorListHelper from "../../Util/ProfessorListHelper.tsx";

export function PDISelectProfessorList() {

  const [isSelected, setSelected] = useState(0);

  //get data
  const ProfessorData = ProfessorListHelper.GetProfessorList();
  const Professors = ProfessorData.Professors;

  const InsideDivStyle = {
    width: "55%",
    padding: "36px",
    borderRadius: "8px",
    backgroundColor: "#FEFEFE"
  };
  const OutsideDivStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--primary-50)",
    height: "100vh"
  };

  return (
    <div style={OutsideDivStyle}>
      <div style={InsideDivStyle}>
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
            console.log("Please Select A Name")
          }else{
            console.log(isSelected.uuid)
          }
        }}> Confirm </CustomButtonView>
      </CustomButtonGroupView>
    </div>
  </div>
  );
}

export default PDISelectProfessorList;
