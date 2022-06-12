import { useReducer, useState } from "react";
import styled from "styled-components";
import CheckboxGroup, {
  CheckboxGroupView,
} from "../../Components/checkbox/checkbox";
import Dropdown from "../../Components/dropdown/dropdown";
import { Timetable } from "../../Components/Timetable/Timetable";
import {
  OutsideDivStyle,
  InsideDivStyle,
} from "../ProfessorDataInput/ProfessorDataInput_SelectProfessorList";

export interface ProfessorTimetableProps {
  semesters: Array<string>;
  profName: string;
}

export interface ProfessorTimetableViewProps {
  maxCoursesThisYear: string;
  onMaxCoursesThisYear: React.Dispatch<React.SetStateAction<string>>;
  semesters: Array<{ value: string; label: string }>;
  selectedSemester: string;
  onSelectedSemester: React.Dispatch<React.SetStateAction<string>>;
  away: boolean;
  onAway: React.Dispatch<string>;
  requestOff: boolean;
  onRequestOff: React.Dispatch<string>;
  absenceReason: string;
  onAbsenceReason: React.Dispatch<{
    semester: string;
    text: string;
  }>;
  profName: string;
}

function updateCheckbox(state: Object, semester: string) {
  return { ...state, [semester]: !state[semester] };
}

function updateString(
  state: Object,
  action: { semester: string; text: string }
) {
  return { ...state, [action.semester]: action.text };
}

function useProfessorTimetable(
  props: ProfessorTimetableProps
): ProfessorTimetableViewProps {
  const { semesters, profName } = props;

  const initCheckbox = {};
  semesters.forEach((sem: string) => {
    initCheckbox[sem] = false;
  });

  const initString = {};
  semesters.forEach((sem: string) => {
    initCheckbox[sem] = "";
  });

  const [aways, onAway] = useReducer(updateCheckbox, initCheckbox);

  const [requestOffs, onRequestOff] = useReducer(updateCheckbox, initCheckbox);

  const [selectedSemester, onSelectedSemester] = useState(semesters[0] || "");

  const [maxCoursesThisYear, onMaxCoursesThisYear] = useState("");

  const [absenceReasons, onAbsenceReason] = useReducer(
    updateString,
    initString
  );

  const semestersItems = semesters.map((sem: string) => {
    return { value: sem, label: sem };
  });

  return {
    profName,
    semesters: semestersItems,
    selectedSemester,
    away: aways[selectedSemester],
    requestOff: requestOffs[selectedSemester],
    absenceReason: absenceReasons[selectedSemester],
    maxCoursesThisYear,
    onSelectedSemester,
    onMaxCoursesThisYear,
    onAway,
    onRequestOff,
    onAbsenceReason,
  };
}

const MaxCoursesDiv = styled.div`
  display: flex;
`;

const AbsenceDiv = styled.div`
  display: flex;
`;

const AbsenceItemDiv = styled.div`
  display: flex;
`;

const FreeformDiv = styled.div``;

export function ProfessorTimetableView(props: ProfessorTimetableViewProps) {
  const {
    profName,
    semesters,
    selectedSemester,
    away,
    requestOff,
    absenceReason,
    maxCoursesThisYear,
    onSelectedSemester,
    onMaxCoursesThisYear,
    onAway,
    onRequestOff,
    onAbsenceReason,
  } = props;
  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <h1>Please Enter Availibility For {profName}</h1>
        <MaxCoursesDiv>
          <h3>Max number of courses you are willing to teach This year </h3>
          <input type="text"></input>
        </MaxCoursesDiv>
        <Dropdown
          {...{ dropdownItems: semesters, handleChange: onSelectedSemester }}
        />
        <Timetable />
        <AbsenceDiv>
          <AbsenceItemDiv>
            <h3>I am away for this semester </h3>
            <CheckboxGroup.Checkbox
              checked={away}
              onClick={() => onAway(selectedSemester)}
            />
          </AbsenceItemDiv>
          <AbsenceItemDiv>
            <h3>I would like away this semester off </h3>
            <CheckboxGroup.Checkbox
              checked={requestOff}
              onClick={() => onRequestOff(selectedSemester)}
            />
          </AbsenceItemDiv>
        </AbsenceDiv>
        <FreeformDiv>
          <h3>Reason for absence:</h3>
          <textarea />
        </FreeformDiv>
      </InsideDivStyle>
    </OutsideDivStyle>
  );
}

const ProfessorTimetable = (props: ProfessorTimetableProps) => {
  return (
    <ProfessorTimetableView
      {...useProfessorTimetable(props)}
    ></ProfessorTimetableView>
  );
};

export default ProfessorTimetable;
