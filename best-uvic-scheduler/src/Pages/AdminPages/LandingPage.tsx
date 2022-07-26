import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../Components/Alert/alert.tsx";
import * as ProfessorInputHelper from "../../Util/ProfessorInputHelper.tsx";
import { GetProfessorList } from "../../Util/ProfessorListHelper.tsx";
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

<<<<<<< HEAD
const NewSectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function SendReminder(id) {
  console.log(id);
  ProfessorInputHelper.RemindProfessor(id);
}

=======
const ZebraListDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > *:nth-child(2n + 1) {
    background: var(--primary-50);
  }
`;

>>>>>>> a6ce6de62bac5a9e851499055d61a201d5e56d5f
export function LandingPage() {
  const { selectedProfessorName, setProfessorName } =
    useContext(ProfessorNameContext);

  const [Preferences, setPreferences] = useState([]);
  const [ListOfProfessors, setListOfProfessors] = useState([]);
  const [AmountofPrefereces, setAmountPref] = useState(0);

  useEffect(() => {
    ProfessorInputHelper.GetProfessorInputList()
      .then((resp) => {
        setPreferences(resp);
      });
  }, []);

  useEffect(() => {
  GetProfessorList().then((response) => {
    setListOfProfessors(response);
  })
  .catch((error) => {
    console.log(error);
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
<<<<<<< HEAD

  let ProfessorsWithResponses = professors.map( (Professor) => Professor.prof_id);

  const ProfessorsWithNoResponse = ListOfProfessors.filter( (Professor) => {
    if(!ProfessorsWithResponses.includes(Professor.id)){
      return Professor;
    }
  })

  console.log(ProfessorsWithNoResponse);

=======
>>>>>>> a6ce6de62bac5a9e851499055d61a201d5e56d5f
  return (
    <ProfListDiv>
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
        <DataEntryTitleDiv>Professors without Data Entered:</DataEntryTitleDiv>
        {ProfessorsWithNoResponse.map((item, idx) => (
          <NewSectionDiv>
          <p> {item.first_name} {item.last_name} </p>
          <CustomButtonView {...{ Theme: "Primary" }}
          customClickEvent={() => {
            SendReminder(item.id);
          }}
          >
          Send Reminder
          </CustomButtonView>
          </NewSectionDiv>
        ))}
      </SectionDiv>
    </ProfListDiv>
  );
}

export default LandingPage;
