import React, { useContext } from "react";
import { ChangeEvent, useReducer, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import CheckboxGroup from "../../Components/checkbox/checkbox.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";
import { Timetable } from "../../Components/Timetable/Timetable.tsx";
import { ProfessorContext } from "../ProfessorDataInput/index.tsx";
import {
  OutsideDivStyle,
  InsideDivStyle,
} from "../ProfessorDataInput/ProfessorDataInput_SelectProfessorList.tsx";

export interface ProfessorTimetableProps {
  semesters: Array<string>;
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
  navigate: NavigateFunction;
  selectedProfessor: any;
}

function updateCheckbox(state: Object, semester: string) {
  console.log("in update checkbox");
  return { ...state, [semester]: !state[semester] };
}

function updateString(
  state: Object,
  action: { semester: string; text: string }
) {
  return { ...state, [action.semester]: action.text };
}

const TimetableContext = React.createContext({
  timetables: {},
  setTimetables: (_timetables: {}) => {},
});

const PrefDayContext = React.createContext({
  prefDays: {},
  setPrefDays: (_prefDays: {}) => {},
});

function initCheckbox(semesters: string[]) {
  return Object.assign({}, ...semesters.map((sem) => ({ [sem]: false })));
}

function initString(semesters: string[]) {
  return Object.assign({}, ...semesters.map((sem) => ({ [sem]: "" })));
}

function useProfessorTimetable(props: ProfessorTimetableProps) {
  const { semesters } = props;

  const semestersItems = semesters.map((sem: string) => {
    return { value: sem, label: sem };
  });

  const [aways, onAway] = useReducer(updateCheckbox, semesters, initCheckbox);

  const [requestOffs, onRequestOff] = useReducer(
    updateCheckbox,
    semesters,
    initCheckbox
  );

  const [selectedSemester, onSelectedSemester] = useState({
    value: semesters[0] || "",
    label: semesters[0] || "",
  });

  const [maxCoursesThisYear, onMaxCoursesThisYear] = useState("");

  const [absenceReasons, onAbsenceReason] = useReducer(
    updateString,
    semesters,
    initString
  );

  const [timetables, setTimetables] = useState({});

  const [prefDays, setPrefDays] = useState({});

  const navigate = useNavigate();

  const { selectedProfessor } = useContext(ProfessorContext);

  return {
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
    timetables,
    setTimetables,
    prefDays,
    setPrefDays,
    navigate,
    selectedProfessor,
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
  padding: 0 var(--space-2x-large) var(--space-2x-large);
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
    selectedProfessor,
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
    navigate,
  } = props;

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <LayoutDiv>
          <PageTitleH1>
            Please Enter Availibility For {selectedProfessor.first_name}{" "}
            {selectedProfessor.last_name}
          </PageTitleH1>
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
            {...{
              dropdownItems: semesters,
              handleChange: onSelectedSemester,
              startingValue: semesters[0].value,
            }}
          />
          <Timetable
            semester={selectedSemester}
            timetableContext={TimetableContext}
            prefDayContext={PrefDayContext}
          />
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
        <CustomButtonGroupView
          style={{ padding: "var(--space-small) 0" }}
          {...{ Amount: "Double" }}
        >
          <CustomButtonView
            {...{ Theme: "Secondary" }}
            customClickEvent={() => {
              console.log("back");
              navigate(`/SelectProfessor/Preferences`);
            }}
          >
            Back
          </CustomButtonView>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            customClickEvent={() => {
              console.log("next");
              navigate(`/SelectProfessor/Summary`);
            }}
          >
            Next
          </CustomButtonView>
        </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
  );
}

const ProfessorTimetable = (props: ProfessorTimetableProps) => {
  const { timetables, setTimetables, prefDays, setPrefDays, ...rest } =
    useProfessorTimetable(props);

  return (
    <TimetableContext.Provider value={{ timetables, setTimetables }}>
      <PrefDayContext.Provider value={{ prefDays, setPrefDays }}>
        <ProfessorTimetableView {...rest} />
      </PrefDayContext.Provider>
    </TimetableContext.Provider>
  );
};

export default ProfessorTimetable;
