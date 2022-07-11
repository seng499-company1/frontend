import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../Components/Alert/alert.tsx";
import * as ProfessorImputHelper from "../../Util/ProfessorInputHelper.tsx";
import CustomButtonView from "../../Components/button/button.tsx";

export const ProfessorNameContext = React.createContext({
  selectedProfessorName: "",
  setProfessorName: () => {},
});

const ProfListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4x-large);
`;

const DataEntryTitleDiv = styled.h4`
  color: var(--font-color);
  font-weight: 500;
  margin: 0;
`;

const AlertDiv = styled.div`
  display: grid;
  place-items: center;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-med);
`;

export function LandingPage() {
  const { selectedProfessorName, setProfessorName } =
    useContext(ProfessorNameContext);

  //get data
  const professors = ProfessorImputHelper.GetProfessorInputList().profEntries;

  const oldProf = [];
  const newProf = [];
  const navigate = useNavigate();

  for (const prof of professors) {
    if (prof.timeEntered == "new") {
      newProf.push(prof);
    } else if (prof.timeEntered == "later") {
      oldProf.push(prof);
    }
  }

  const entries = newProf.length;

  return (
    <ProfListDiv>
      {(() => {
        if (entries != 0) {
          return (
            <AlertDiv>
              <Alert {...{ new_entries: entries }}></Alert>
            </AlertDiv>
          );
        } else {
          return <div></div>;
        }
      })()}
      <SectionDiv>
        <DataEntryTitleDiv>New Data Entries:</DataEntryTitleDiv>
        {newProf.map((item, idx) => (
          <CustomButtonView
            Theme={"Secondary"}
            Borderless={true}
            LeftText={true}
            customClickEvent={() => {
              console.log(newProf[idx]["firstName"]);
              setProfessorName(newProf[idx]["firstName"]);
              console.log(selectedProfessorName);

              navigate(`/LandingPage/Summary_RO`);
            }}
          >
            {newProf[idx]["firstName"]}&nbsp;
            {newProf[idx]["lastName"]}
          </CustomButtonView>
        ))}
      </SectionDiv>
      <SectionDiv>
        <DataEntryTitleDiv>Data Entires:</DataEntryTitleDiv>
        {oldProf.map((item, idx) => (
          <CustomButtonView
            Theme={"Secondary"}
            Borderless={true}
            LeftText={true}
          >
            {oldProf[idx]["firstName"]} &nbsp;
            {oldProf[idx]["lastName"]}
          </CustomButtonView>
        ))}
      </SectionDiv>
    </ProfListDiv>
  );
}

export default LandingPage;
