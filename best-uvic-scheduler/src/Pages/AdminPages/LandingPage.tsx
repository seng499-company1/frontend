import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Background } from "../../Components/background/background.tsx";
import Logo from "../../Images/Uvic-logo.png";
import Alert from "../../Components/Alert/alert.tsx";
import NavBar from "../../Components/navBar/navBar.tsx";
import * as ProfessorImputHelper from "../../Util/ProfessorInputHelper.tsx";

export const ProfessorNameContext = React.createContext({
  selectedProfessorName: "",
  setProfessorName: () => {},
});
const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  padding-left: 0px;
  padding-right: 0px;
  grid-column: 2 / 3;
  grid-row: 1;
`;

const LogoDiv = styled.div`
  padding-left: 48px;
  padding-right: 0px;
  grid-column: 1 / 3;
  grid-row: 1;
`;

const ProfListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2x-large);
`;

const DataEntryTitleDiv = styled.h4`
  padding-left: 32px;
  color: black;
`;

const ProfNameDiv = styled.button`
  color: var(--grey-800);
  text-color: black;
  align: center;
  text-align: left;
`;

const BreakDiv = styled.br`
  display: block;
  content: "";
  margin-top: 10px;
`;
const AlertDiv = styled.div`
  display: grid;
  place-items: center;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-large);
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
    <Background>
      <Header>
        <LogoDiv>
          <img src={Logo} width="50px" height="80px" />
        </LogoDiv>
        <Title>UVIC Course Scheduler</Title>
      </Header>

      <ProfListDiv>
        <NavBar initialTabId="1"></NavBar>
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
            <ProfNameDiv
              onClick={() => {
                console.log(newProf[idx]["firstName"]);
                setProfessorName(newProf[idx]["firstName"]);
                console.log(selectedProfessorName);

                navigate(`/LandingPage/Summary_RO`);
              }}
            >
              {newProf[idx]["firstName"]}&nbsp;
              {newProf[idx]["lastName"]}
            </ProfNameDiv>
          ))}
        </SectionDiv>
        <SectionDiv>
          <DataEntryTitleDiv>Data Entires:</DataEntryTitleDiv>
          {oldProf.map((item, idx) => (
            <ProfNameDiv>
              {oldProf[idx]["firstName"]} &nbsp;
              {oldProf[idx]["lastName"]}
            </ProfNameDiv>
          ))}
        </SectionDiv>
      </ProfListDiv>
    </Background>
  );
}

export default LandingPage;
