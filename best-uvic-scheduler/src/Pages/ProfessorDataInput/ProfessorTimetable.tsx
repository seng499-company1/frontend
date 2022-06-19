import React, { useContext } from "react";
import { ChangeEvent, useReducer, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import CheckboxGroup from "../../Components/checkbox/checkbox.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";
import TabGroup from "../../Components/tab-group/tab-group.tsx";
import { Timetable } from "../../Components/Timetable/Timetable.tsx";
import { ProfessorContext } from "../ProfessorDataInput/index.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import {
  PreferencesContext,
  QualificationsContext,
  PrefDayContext,
  TimetableContext,
} from "./index.tsx";

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
  Courses: any;
  AmountOfCourses: any;
  preferences: any;
  setPreferences: any;
  PreferenceItems: {
    value: string;
    label: string;
  }[];
  qualifications: any;
  setQualifications: any;
  QualificationItems: {
    value: string;
    label: string;
  }[];
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

  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

  //hooks
  const { preferences, setPreferences } = useContext(PreferencesContext);

  const PreferenceItems = [
    { value: "Not Willing", label: "Not Willing" },
    { value: "Willing", label: "Willing" },
    { value: "Very Willing", label: "Very Willing" },
  ];

  //hooks
  const { qualifications, setQualifications } = useContext(
    QualificationsContext
  );

  const QualificationItems = [
    { value: "Not Qualified", label: "Not Qualified" },
    { value: "Qualified", label: "Qualified" },
  ];

  return {
    Courses,
    AmountOfCourses,
    preferences,
    setPreferences,
    PreferenceItems,
    qualifications,
    setQualifications,
    QualificationItems,
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

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  background-color: #fefefe;
`;

const OutsideDivStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-50);
  padding: var(--space-x-large);
  min-height: 100vh;
`;

const CourseInfoDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: var(--space-x-large);
`;

const DropdownDivStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
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
    Courses,
    AmountOfCourses,
    preferences,
    setPreferences,
    PreferenceItems,
    qualifications,
    setQualifications,
    QualificationItems,
  } = props;

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <LayoutDiv>
          <Header>Please Enter Class Scheduling Preferences</Header>
          {Courses.map(function (Course, index) {
            let name = Course.course_code;
            return (
              <div>
                <h2> {Course.course_code} </h2>
                <CourseInfoDiv key={index}>
                  <p>
                    <b>Course description:</b> {Course.course_desceiption}
                  </p>
                  <Dropdown
                    startingValue={
                      preferences.hasOwnProperty(name)
                        ? {
                            value: preferences[name],
                            label: preferences[name],
                          }
                        : null
                    }
                    dropdownItems={PreferenceItems}
                    handleChange={(event) => {
                      setPreferences({
                        ...preferences,
                        [Course.course_code]: event.value,
                      });
                    }}
                  >
                    Select
                  </Dropdown>
                  <p>
                    <b>Qualifications needed:</b> {Course.course_qualifications}
                    <b>{Course.peng_req ? ", PENG is Reqiured" : ""}</b>
                  </p>
                  <Dropdown
                    startingValue={
                      qualifications.hasOwnProperty(name)
                        ? {
                            value: qualifications[name],
                            label: qualifications[name],
                          }
                        : null
                    }
                    dropdownItems={QualificationItems}
                    handleChange={(event) => {
                      setQualifications({
                        ...qualifications,
                        [Course.course_code]: event.value,
                      });
                    }}
                  >
                    Select
                  </Dropdown>
                </CourseInfoDiv>
              </div>
            );
          })}
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
          <TabGroup initialTabId="0">
            {semesters.map(
              (sem: { label: string; value: string }, i: number) => {
                return (
                  <TabGroup.Tab
                    tabId={`${i}`}
                    onClick={() => {
                      onSelectedSemester(sem);
                    }}
                    size="small"
                  >
                    {sem.label}
                  </TabGroup.Tab>
                );
              }
            )}
          </TabGroup>
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
          {(requestOff || away) && (
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
          )}
        </LayoutDiv>
        <CustomButtonGroupView {...{ Amount: "Double" }}>
          <CustomButtonView
            {...{ Theme: "Secondary" }}
            customClickEvent={() => {
              navigate(`/SelectProfessor`);
            }}
          >
            {" "}
            Back{" "}
          </CustomButtonView>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            Disabled={Object.keys(qualifications).length !== AmountOfCourses}
            customClickEvent={() => {
              if (Object.keys(qualifications).length !== AmountOfCourses) {
                console.log(qualifications);
              } else {
                console.log(qualifications);
                navigate(`/SelectProfessor/Summary`);
              }
            }}
          >
            {" "}
            Confirm{" "}
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
