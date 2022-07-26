import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../Components/Alert/alert.tsx";
import * as ProfessorInputHelper from "../../Util/ProfessorInputHelper.tsx";
import CustomButtonView from "../../Components/button/button.tsx";
import * as ProfPreferencesHelper from "../../Util/ProfPreferencesHelper.tsx";
import { ProfessorNameContext } from "./index.tsx";

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

const ZebraListDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > *:nth-child(2n + 1) {
    background: var(--primary-50);
  }
`;

export function LandingPage() {
  const { selectedProfessorName, setProfessorName } =
    useContext(ProfessorNameContext);

  const [Preferences, setPreferences] = useState([]);
  const [AmountofPrefereces, setAmountPref] = useState(0);

  useEffect(() => {
    ProfessorInputHelper.GetProfessorInputList()
      .then((resp) => {
        setPreferences(resp);
      })
      .then((resp) => {
        setAmountPref(resp.length());
      });
  }, []);

  //get data
  const professors = Preferences;

  // const oldProf = [];
  // const newProf = [];
  const navigate = useNavigate();

  // for (const prof of professors) {
  //   if (prof.timeEntered == "new") {
  //     newProf.push(prof);
  //   } else if (prof.timeEntered == "later") {
  //     oldProf.push(prof);
  //   }
  // }

  const entries = professors.length;
  return (
    <ProfListDiv>
      {/* {(() => {
        if (entries != 0) {
          return (
            <AlertDiv>
              <Alert {...{ new_entries: entries }}></Alert>
            </AlertDiv>
          );
        } else {
          return <div></div>;
        }
      })()} */}
      <SectionDiv>
        <DataEntryTitleDiv>Data Entries:</DataEntryTitleDiv>
        <ZebraListDiv>
          {professors.map((item, idx) => (
            <CustomButtonView
              Theme={"Secondary"}
              Borderless={true}
              LeftText={true}
              customClickEvent={() => {
                console.log(professors[idx]);
                setProfessorName(professors[idx]);
                console.log(selectedProfessorName);

                navigate(`Summary_RO`);
              }}
            >
              {professors[idx]["first_name"]}&nbsp;
              {professors[idx]["last_name"]}
            </CustomButtonView>
          ))}
        </ZebraListDiv>
      </SectionDiv>
      <SectionDiv>
        {/* <DataEntryTitleDiv>Data Entires:</DataEntryTitleDiv>
        {oldProf.map((item, idx) => (
          <CustomButtonView
            Theme={"Secondary"}
            Borderless={true}
            LeftText={true}
          >
            {oldProf[idx]["firstName"]} &nbsp;
            {oldProf[idx]["lastName"]}
          </CustomButtonView>
        ))} */}
      </SectionDiv>
    </ProfListDiv>
  );
}

export default LandingPage;
