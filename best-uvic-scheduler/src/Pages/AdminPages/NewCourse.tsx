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

export function NewCoursePage() {
  const [CourseName, setCourseName] = useState("");
  const [CourseCode, setCourseCode] = useState("");
  const [maxCourses, setMaxCourses] = useState(0);
  const [courseYear, setCourseYear] = useState(0);
  const [courseDescription, setCourseDescription] = useState("");
  const [qualifications, onQualifications] = useState("");
  const [FallNeeded, setFallNeeded] = useState(false);
  const [SpringNeeded, setSpringNeeded] = useState(false);
  const [SummerNeeded, setSummerNeeded] = useState(false);
  const [FallNeededPeng, setFallPeng] = useState(false);
  const [SpringNeededPeng, setSpringPeng] = useState(false);
  const [SummerNeededPeng, setSummerPeng] = useState(false);

  let New_Course = {
    course_code: CourseCode,
    course_name: CourseName,
    min_offering: 1,
    spring_req: SpringNeeded,
    summer_req: SummerNeeded,
    fall_req: FallNeeded,
    spring_peng_req: SpringNeededPeng,
    summer_peng_req: SummerNeededPeng,
    fall_peng_req: FallNeededPeng,
    course_desc: courseDescription,
    prof_prereq: qualifications,
    year_req: 1,
    notes: "",
  };

  function SendNewToBackend(props) {
    CourseListHelper.addCourse(props);
  }

  return (
    <FormDiv>
      <SelectableTableSingleInputDiv>
        <Header> Course ID: </Header>
        <TextInputView
          placeholder={"Example: CSC 115"}
          onChange={(event) => {
            setCourseCode(event.target.value);
          }}
        />
      </SelectableTableSingleInputDiv>
      <SelectableTableSingleInputDiv>
        <Header> Course Name: </Header>
        <TextInputView
          placeholder={"Example: Reqiurements Engineering"}
          DefaultValue={CourseName}
          onChange={(event) => {
            setCourseName(event.target.value);
          }}
        />
      </SelectableTableSingleInputDiv>
      <Header> Terms Avalible: </Header>
      <SelectableTableCheckboxDiv>
        <CheckboxView
          checked={FallNeeded}
          setChecked={() => {
            setFallNeeded(!FallNeeded);
          }}
        >
          X
        </CheckboxView>
        <p>Fall</p>
        <CheckboxView
          checked={SpringNeeded}
          setChecked={() => {
            setSpringNeeded(!SpringNeeded);
          }}
        >
          X
        </CheckboxView>
        <p>Spring</p>
        <CheckboxView
          checked={SummerNeeded}
          setChecked={() => {
            setSummerNeeded(!SummerNeeded);
          }}
        >
          X
        </CheckboxView>
        <p>Summer</p>
      </SelectableTableCheckboxDiv>
      <Header> Terms Where PENG is needed: </Header>
      <SelectableTableCheckboxDiv>
        <CheckboxView
          checked={FallNeededPeng}
          setChecked={() => {
            setFallPeng(!FallNeededPeng);
          }}
        >
          X
        </CheckboxView>
        <p>Fall</p>
        <CheckboxView
          checked={SpringNeededPeng}
          setChecked={() => {
            setSpringPeng(!SpringNeededPeng);
          }}
        >
          X
        </CheckboxView>
        <p>Spring</p>
        <CheckboxView
          checked={SummerNeededPeng}
          setChecked={() => {
            setSummerPeng(!SummerNeededPeng);
          }}
        >
          X
        </CheckboxView>
        <p>Summer</p>
      </SelectableTableCheckboxDiv>
      <SelectableTableCheckboxDiv>
        <SubHeader>
          {" "}
          minimum number of times a year this course should be offered:{" "}
        </SubHeader>
        <MaxCoursesInput
          type="number"
          value={maxCourses}
          onChange={(event) => {
            setMaxCourses(event.target.value);
          }}
        />
      </SelectableTableCheckboxDiv>
      <SelectableTableCheckboxDiv>
        <SubHeader>
          {" "}
          What year should this course be taken (What year on the worksheet):{" "}
        </SubHeader>
        <MaxCoursesInput
          type="number"
          value={courseYear}
          onChange={(event) => {
            setCourseYear(event.target.value);
          }}
        />
      </SelectableTableCheckboxDiv>
      <SubHeader> A description for this course: </SubHeader>
      <AbsenceTextarea
        value={courseDescription}
        onChange={(event) => {
          setCourseDescription(event.target.value);
        }}
      />
      <SubHeader>
        {" "}
        A description of qualifications needed to teach this course:{" "}
      </SubHeader>
      <AbsenceTextarea
        value={qualifications}
        onChange={(event) => {
          onQualifications(event.target.value);
        }}
      />
      <CustomButtonGroupView {...{ Amount: "Progession" }}>
        <CustomButtonView
          {...{ Theme: "Primary" }}
          customClickEvent={() => {
            SendNewToBackend(New_Course);
          }}
        >
          Submit
        </CustomButtonView>
      </CustomButtonGroupView>
    </FormDiv>
  );
}

export default NewCoursePage;
