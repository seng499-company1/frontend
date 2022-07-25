import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import { TextInputView } from "../../Components/Input/input.tsx";
import { CheckboxView } from "../../Components/checkbox/checkbox.tsx";
import { CustomButtonView } from "../../Components/button/button.tsx";
import { CustomButtonGroupView } from "../../Components/button/buttongroup.tsx";
import {
  SelectableTableInputDiv,
  SelectableTableSingleInputDiv,
  SelectableTableCheckboxDiv,
} from "../../Components/SelectTable/SelectableTable.tsx";

const FormDiv = styled.div`
  padding-top: 6px;
`;

const Header = styled.h3`
  padding-top: 12px;

`;

const SubHeader = styled.p`
  padding-top: 12px;
`;

const MaxCoursesInput = styled.input`
  font-size: var(--font-size-normal);
  border: 1px solid var(--border);
  max-width: 280px;
  border-radius: 4px;
  text-align: center;
  padding: var(--space-x-small);

  &:focus-visible {
    outline-color: var(--primary);
  }
`;

const AbsenceTextarea = styled.textarea`
  border: 1px solid var(--border);
  border-radius: 4px;
  width: 100%;
  min-height: 180px;
`;

export function NewProfessorPage() {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Department, setDepartment] = useState("ECE");
  const [HasPENG, setHasPENG] = useState(false);
  const [Teaching, setTeaching] = useState(true);

  function SendNewToBackend() {

    let New_value = {
      department: Department,
      email: Email,
      first_name: FirstName,
      is_peng: HasPENG,
      is_teaching: Teaching,
      last_name: LastName
    };

    console.log(New_value);
  }

  return (
    <FormDiv>
    <SelectableTableSingleInputDiv>
    <Header> First Name of New Professor: </Header>
    <TextInputView
      placeholder={"John"}
      onChange={event => {
        setFirstName(event.target.value);
    }}/>
    </SelectableTableSingleInputDiv>
    <SelectableTableSingleInputDiv>
    <Header> Last Name of New Professor: </Header>
    <TextInputView
      placeholder={"Smith"}
      onChange={event => {
        setLastName(event.target.value);
    }}/>
    </SelectableTableSingleInputDiv>
    <SelectableTableSingleInputDiv>
    <Header> Email of New Professor: </Header>
    <TextInputView
      placeholder={"Johns@uvic.ca"}
      onChange={event => {
        setEmail(event.target.value);
    }}/>
    </SelectableTableSingleInputDiv>
    <Header> What Department Is This Professor In: </Header>
    <SelectableTableCheckboxDiv>
      <CheckboxView
          checked={Department === "ECE"}
          setChecked={() => {
            setDepartment("ECE");
          }}
      >
        X
      </CheckboxView>
      <p>ECE</p>
      <CheckboxView
      checked={Department === "SENG"}
      setChecked={() => {
        setDepartment("SENG");
      }}
      >
        X
      </CheckboxView>
      <p>SENG</p>
      </SelectableTableCheckboxDiv>
    <Header> Does this Professor have a PENG: </Header>
    <SelectableTableCheckboxDiv>
      <CheckboxView
          checked={HasPENG}
          setChecked={() => {
            setHasPENG(!HasPENG);
          }}
      >
        X
      </CheckboxView>
      <p>PENG</p>
      <CheckboxView
      checked={!HasPENG}
      setChecked={() => {
        setHasPENG(!HasPENG);
      }}
      >
        X
      </CheckboxView>
      <p>NO PENG</p>
      </SelectableTableCheckboxDiv>
      <Header> Is This Professor Teaching or Research: </Header>
      <SelectableTableCheckboxDiv>
        <CheckboxView
            checked={Teaching}
            setChecked={() => {
              setTeaching(!Teaching);
            }}
        >
          X
        </CheckboxView>
        <p>Teaching</p>
        <CheckboxView
        checked={!Teaching}
        setChecked={() => {
          setTeaching(!Teaching);
        }}
        >
          X
        </CheckboxView>
        <p>Research</p>
        </SelectableTableCheckboxDiv>
        <CustomButtonGroupView {...{ Amount: "Progession" }}>
          <CustomButtonView
          {...{ Theme: "Primary" }}
          customClickEvent={() => {
            SendNewToBackend();
          }}
          >
          Submit
          </CustomButtonView>
        </CustomButtonGroupView>
    </FormDiv>

  );
}

export default NewProfessorPage;
