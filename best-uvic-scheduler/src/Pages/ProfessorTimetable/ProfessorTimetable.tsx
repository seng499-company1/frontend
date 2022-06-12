import { ChangeEvent, ChangeEventHandler, useReducer, useState } from "react";
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
  onSelectedSemester: React.Dispatch<
    React.SetStateAction<{
      value: string;
      label: string;
    }>
  >;
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
    initString[sem] = "";
  });

  const semestersItems = semesters.map((sem: string) => {
    return { value: sem, label: sem };
  });

  const [aways, onAway] = useReducer(updateCheckbox, initCheckbox);

  console.log("aways", aways);

  const [requestOffs, onRequestOff] = useReducer(updateCheckbox, initCheckbox);

  const [selectedSemester, onSelectedSemester] = useState(
    semestersItems[0] || { label: "", value: "" }
  );

  const [maxCoursesThisYear, onMaxCoursesThisYear] = useState("");

  const [absenceReasons, onAbsenceReason] = useReducer(
    updateString,
    initString
  );

  return {
    profName,
    semesters: semestersItems,
    selectedSemester: selectedSemester.label,
    away: aways[selectedSemester.label],
    requestOff: requestOffs[selectedSemester.label],
    absenceReason: absenceReasons[selectedSemester.label],
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
  gap: var(--space-large);
  justify-content: center;
`;

const AbsenceDiv = styled.div`
  display: flex;
  gap: var(--space-large);
  justify-content: space-between;
  align-items: center;
`;

const AbsenceItemDiv = styled.div`
  display: flex;
  gap: var(--space-large);
  align-items: center;
`;

const FreeformDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-med);
`;

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2x-large);
`;

const PageTitleH1 = styled.h1`
  margin: 0;
  text-align: center;
`;

const MaxCoursesH3 = styled.h3`
  font-weight: 400;
  margin: 0;
`;

const AbsenceLabelP = styled.p`
  margin: 0;
`;

const MaxCoursesInput = styled.input`
  font-size: var(--font-size-h3);
  border: 1px solid var(--border);
  max-width: 40px;
  border-radius: 4px;
  text-align: center;
  padding: var(--space-3x-small);

  &:focus-visible {
    outline-color: var(--primary);
  }
`;

const AbsenceTextarea = styled.textarea`
  border: 1px solid var(--border);
  border-radius: 4px;
`;

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

  console.log("in view", away);
  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <LayoutDiv>
          <PageTitleH1>Please Enter Availibility For {profName}</PageTitleH1>
          <MaxCoursesDiv>
            <MaxCoursesH3>
              Max number of courses you are willing to teach this year{" "}
            </MaxCoursesH3>
            <MaxCoursesInput
              type="number"
              value={maxCoursesThisYear}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onMaxCoursesThisYear(event.target.value)
              }
            />
          </MaxCoursesDiv>
          <Dropdown
            {...{ dropdownItems: semesters, handleChange: onSelectedSemester }}
          />
          <Timetable />
          <AbsenceDiv>
            <AbsenceItemDiv>
              <AbsenceLabelP>I am away for this semester </AbsenceLabelP>
              <CheckboxGroup.Checkbox
                checked={away}
                onClick={() => onAway(selectedSemester)}
              />
            </AbsenceItemDiv>
            <AbsenceItemDiv>
              <AbsenceLabelP>
                I would like away this semester off{" "}
              </AbsenceLabelP>
              <CheckboxGroup.Checkbox
                checked={requestOff}
                onClick={() => onRequestOff(selectedSemester)}
              />
            </AbsenceItemDiv>
          </AbsenceDiv>
          <FreeformDiv>
            <AbsenceLabelP>Reason for absence:</AbsenceLabelP>
            <AbsenceTextarea
              value={absenceReason}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                onAbsenceReason({
                  semester: selectedSemester,
                  text: event.target.value,
                })
              }
            />
          </FreeformDiv>
        </LayoutDiv>
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
