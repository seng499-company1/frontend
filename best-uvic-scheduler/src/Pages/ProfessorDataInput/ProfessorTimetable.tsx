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
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import {
  PreferencesContext,
  QualificationsContext,
  PrefDayContext,
} from "./index.tsx";

export interface ProfessorTimetableProps {
  semesters: Array<string>;
}

export interface ProfessorTimetableViewProps {
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
  maxCourses: string;
  setMaxCourses: React.Dispatch<{
    semester: string;
    text: string;
  }>;
  navigate: NavigateFunction;
  Courses: any;
  AmountOfCourses: any;
  preferences: any;
  setPreferences: any;
  prefDays: any;
  setPrefDays: any;
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

export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

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

  const [absenceReasons, onAbsenceReason] = useReducer(
    updateString,
    semesters,
    initString
  );

  const [maxCourses, setMaxCourses] = useReducer(
    updateString,
    semesters,
    initString
  );

  const navigate = useNavigate();

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

  const { prefDays, setPrefDays } = useContext(PrefDayContext);

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
    maxCourses: maxCourses[selectedSemester.label],
    setMaxCourses,
    onSelectedSemester,
    onAway,
    onRequestOff,
    onAbsenceReason,
    prefDays,
    setPrefDays,
    navigate,
  };
}

const MaxCoursesDiv = styled.div`
  gap: var(--space-large);
  justify-content: flex-start;
  align-items: center;
`;

const AbsenceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-med);
`;

const CheckboxContainerDiv = styled.div`
  display: flex;
  gap: var(--space-large);
  align-items: center;
`;

const FreeformDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2x-large);
  padding: 0 10px var(--space-2x-large);
`;

const Subheading = styled.h3`
  font-weight: 400;
  margin: 0;
  flex: 0 0 100%;
`;

const MaxCoursesInput = styled.input`
  font-size: 16px;
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
  grid-gap: var(--space-large) var(--space-3x-large);
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
`;

const FieldLabelP = styled.p`
  padding: var(--space-2x-small) 0;
  box-sizing: border-box;
  color: var(--font-color);
  margin: 0;
`;

const PreferredDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export function ProfessorTimetableView(props: ProfessorTimetableViewProps) {
  const {
    semesters,
    selectedSemester,
    away,
    requestOff,
    absenceReason,
    onSelectedSemester,
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
    prefDays,
    setPrefDays,
    maxCourses,
    setMaxCourses,
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
                    placeholder={"Desirability"}
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
                    {Course.peng_req ? (
                      <>
                        , <b>PENG is Reqiured</b>
                      </>
                    ) : (
                      ""
                    )}
                  </p>
                  <Dropdown
                    placeholder={"Qualification"}
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
          <TabGroup initialTabId="0">
            {semesters.map(
              (sem: { label: string; value: string }, i: number) => {
                return (
                  <TabGroup.Tab
                    tabId={`${i}`}
                    onClick={() => {
                      onSelectedSemester(sem);
                    }}
                    size="medium"
                  >
                    {sem.label}
                  </TabGroup.Tab>
                );
              }
            )}
          </TabGroup>

          <AbsenceDiv>
            <CheckboxContainerDiv>
              <CheckboxGroup.Checkbox
                checked={away}
                onClick={() => onAway(selectedSemester)}
              />
              <FieldLabelP>I am away for this semester </FieldLabelP>
            </CheckboxContainerDiv>
            <CheckboxContainerDiv>
              <CheckboxGroup.Checkbox
                checked={requestOff}
                onClick={() => onRequestOff(selectedSemester)}
              />
              <FieldLabelP>I would like away this semester off </FieldLabelP>
            </CheckboxContainerDiv>
          </AbsenceDiv>
          {requestOff || away ? (
            <FreeformDiv>
              <FieldLabelP>Reason for absence:</FieldLabelP>
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
          ) : (
            <>
              <MaxCoursesDiv>
                <FieldLabelP>
                  Maximum number of courses you are willing to teach this year{" "}
                </FieldLabelP>
                <MaxCoursesInput
                  type="number"
                  value={maxCourses}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setMaxCourses({
                      semester: selectedSemester,
                      text: event.target.value,
                    })
                  }
                />
              </MaxCoursesDiv>
              <PreferredDiv>
                <FieldLabelP
                  style={{ flex: " 0 0 100%", marginBottom: "-10px" }}
                >
                  Check your preferred teaching days
                </FieldLabelP>
                {prefDays[selectedSemester].map((day: boolean, idx: number) => {
                  return (
                    <CheckboxContainerDiv>
                      <CheckboxGroup.Checkbox
                        onClick={() =>
                          setPrefDays({
                            semester: selectedSemester,
                            dayIdx: idx,
                          })
                        }
                        checked={day}
                      />
                      <FieldLabelP>{weekdays[idx]}</FieldLabelP>
                    </CheckboxContainerDiv>
                  );
                })}
              </PreferredDiv>
              <FieldLabelP>Select your preferred teaching times</FieldLabelP>
              <Timetable semester={selectedSemester} />
            </>
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
  return <ProfessorTimetableView {...useProfessorTimetable(props)} />;
};

export default ProfessorTimetable;
