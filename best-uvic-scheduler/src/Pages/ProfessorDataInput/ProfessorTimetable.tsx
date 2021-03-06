import React, { useEffect, useContext } from "react";
import { ChangeEvent, useReducer, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButtonView from "../../Components/button/button.tsx";
import CheckboxGroup from "../../Components/checkbox/checkbox.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";
import Radio from "../../Components/radio/radio.tsx";
import TabGroup from "../../Components/tab-group/tab-group.tsx";
import { Timetable } from "../../Components/Timetable/Timetable.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import { TimeIntervalHelper } from "../../Util/TimeIntervalHelper.tsx";
import {
  PreferencesContext,
  TimeContext,
  LeaveReasonContext,
  MaxCourseContext,
  QualificationsContext,
  PrefDayContext,
} from "./index.tsx";
import { Background } from "../../Components/background/background.tsx";
import { ToggleView } from "../../Components/toggle/toggle.tsx";
import { DefaultShadow } from "../../GlobalStyles.tsx";

export interface ProfessorTimetableProps {
  semesters: Array<string>;
}

export interface ProfessorTimetableViewProps {
  maxCourseEntered: any;
  setMaxCourseEntered: any;
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
  setSelectedTimes: any;
  selectedTimes: any;
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

export const QualificationItems = [
  { value: "WITH_EFFORT", label: "With Effort" },
  { value: "ABLE", label: "Able" },
];

export const PreferenceItems = [
  { value: "NOT_WILLING", label: "Not Willing" },
  { value: "WILLING", label: "Willing" },
  { value: "VERY_WILLING", label: "Very Willing" },
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
  const [Courses, setCourses] = useState([]);
  const [AmountOfCourses, setAmount] = useState(0);

  useEffect(() => {
    CourseListHelper.GetCourseList()
      .then((resp) => {
        setCourses(resp);
      })
      .then((resp) => {
        setAmount(resp.length());
      });
  }, []);

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

  //hooks
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const { selectedTimes, setSelectedTimes } = useContext(TimeContext);
  const { leaveReason, setLeaveReason } = useContext(LeaveReasonContext);
  const { maxCourseEntered, setMaxCourseEntered } =
    useContext(MaxCourseContext);

  useEffect(() => {
    const key = selectedSemester.value;
    const val = maxCourses[key];
    let addedVal = {};
    addedVal[key] = val;
    setMaxCourseEntered({
      ...maxCourseEntered,
      ...addedVal,
    });
  }, [maxCourses]);

  useEffect(() => {
    const key = selectedSemester.value;
    const val = absenceReasons;
    setLeaveReason(absenceReasons);
  }, [absenceReasons]);

  //hooks
  const { qualifications, setQualifications } = useContext(
    QualificationsContext
  );

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
    maxCourseEntered,
    setMaxCourseEntered,
  };
}

const AbsenceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-med);
`;

const CheckboxContainerDiv = styled.div`
  display: flex;
  gap: var(--space-large);
  align-items: center;
  flex-wrap: wrap;
`;

const StepContainerDiv = styled.div`
  display: flex;
  gap: var(--space-med);
  justify-content: flex-end;
`;

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4x-large);
  padding: 0 var(--space-5x-large) var(--space-2x-large);
`;

const TabbedContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4x-large);
  padding: var(--space-x-large) var(--space-4x-large) var(--space-4x-large);
`;

const TabsContainerDiv = styled.div`
  ${DefaultShadow}
  border-radius:4px;
`;

const WarningText = styled.p`
  font-weight: 500;
  color: var(--danger-400);
  margin: 0;
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
  min-height: 180px;
`;

const CourseInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--space-x-large);
`;

const Header = styled.h2`
  margin: 0;
`;

const FieldLabelP = styled.p`
  box-sizing: border-box;
  color: var(--font-color);
  margin: 0;
  font-weight: 600;
  font-size: var(--font-size-normal);
`;

const FieldContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-x-small);
`;

const CourseDividerHR = styled.hr`
  border: none;
  border-bottom: 1px solid var(--grey-100);
  margin: 0;
`;

const CourseContainerDiv = styled.div`
  display: flex;
  gap: 96px;
  align-items: flex-start;
  margin-top: 12px;
`;

const RadioContainerDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const CourseListContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    setSelectedTimes,
    selectedTimes,
    maxCourses,
    setMaxCourses,
    maxCourseEntered,
    setMaxCourseEntered,
  } = props;

  console.log(preferences);
  console.log(qualifications);

  return (
    <Background>
      <LayoutDiv>
        <Header>
          Course Teaching Preferences
          <h5 style={{ fontSize: 16, fontWeight: 600 }}>
            For more information about specific courses, view the{" "}
            <a
              href="https://www.uvic.ca/ecs/software/current-students/courses/index.php"
              target="__blank__"
            >
              UVic BSEng Course Calendar
            </a>
          </h5>
        </Header>
        <CourseListContainerDiv>
          {Courses.map(function (Course, index) {
            let name = Course.course_code;
            return (
              <>
                <CourseContainerDiv key={index}>
                  <CourseInfoDiv>
                    <h3
                      style={{
                        fontWeight: "500",
                        margin: "0",
                        minWidth: "100px",
                      }}
                    >
                      {Course.course_code}
                    </h3>
                    <p>
                      {Course.course_qualifications && (
                        <>
                          <br />
                          <b>Qualifications needed:</b>{" "}
                          {Course.course_qualifications}
                          {Course.peng_req ? (
                            <>
                              , <b>PENG is Reqiured</b>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </p>
                  </CourseInfoDiv>
                  <FieldContainerDiv>
                    <FieldLabelP>Desire to teach</FieldLabelP>
                    <RadioContainerDiv>
                      <Radio
                        label={PreferenceItems[0]["value"]}
                        value={PreferenceItems[0]["value"]}
                        isChecked={
                          preferences[Course.course_code] ===
                          PreferenceItems[0]["value"]
                            ? true
                            : false
                        }
                        handleChange={() => {
                          setPreferences({
                            ...preferences,
                            [Course.course_code]: PreferenceItems[0]["value"],
                          });
                        }}
                      />
                      <Radio
                        label={PreferenceItems[1]["value"]}
                        value={PreferenceItems[1]["value"]}
                        isChecked={
                          preferences[Course.course_code] ===
                          PreferenceItems[1]["value"]
                            ? true
                            : false
                        }
                        handleChange={() => {
                          setPreferences({
                            ...preferences,
                            [Course.course_code]: PreferenceItems[1]["value"],
                          });
                        }}
                      />
                      <Radio
                        label={PreferenceItems[2]["value"]}
                        value={PreferenceItems[2]["value"]}
                        isChecked={
                          preferences[Course.course_code] ===
                          PreferenceItems[2]["value"]
                            ? true
                            : false
                        }
                        handleChange={() => {
                          setPreferences({
                            ...preferences,
                            [Course.course_code]: PreferenceItems[2]["value"],
                          });
                        }}
                      />
                    </RadioContainerDiv>
                  </FieldContainerDiv>
                  <FieldContainerDiv>
                    <FieldLabelP>Qualification level</FieldLabelP>
                    <RadioContainerDiv>
                      <Radio
                        label={QualificationItems[0]["value"]}
                        value={QualificationItems[0]["value"]}
                        isChecked={
                          qualifications[Course.course_code] ===
                          QualificationItems[0]["value"]
                            ? true
                            : false
                        }
                        handleChange={() => {
                          setQualifications({
                            ...qualifications,
                            [Course.course_code]:
                              QualificationItems[0]["value"],
                          });
                        }}
                      />
                      <Radio
                        label={QualificationItems[1]["value"]}
                        value={QualificationItems[1]["value"]}
                        isChecked={
                          qualifications[Course.course_code] ===
                          QualificationItems[1]["value"]
                            ? true
                            : false
                        }
                        handleChange={() => {
                          setQualifications({
                            ...qualifications,
                            [Course.course_code]:
                              QualificationItems[1]["value"],
                          });
                        }}
                      />
                    </RadioContainerDiv>
                  </FieldContainerDiv>
                </CourseContainerDiv>
                <CourseDividerHR
                  style={{
                    visibility: `${
                      index === Courses.length - 1 ? "hidden" : "visible"
                    }`,
                  }}
                />
              </>
            );
          })}
        </CourseListContainerDiv>
        <Header>Teaching time preferences</Header>
        <TabsContainerDiv>
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
          <TabbedContentDiv>
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
              <FieldContainerDiv>
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
              </FieldContainerDiv>
            ) : (
              <>
                <FieldContainerDiv>
                  <FieldLabelP>
                    Maximum number of courses per semester{" "}
                  </FieldLabelP>
                  <MaxCoursesInput
                    type="number"
                    value={maxCourses}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setMaxCourses({
                        semester: selectedSemester,
                        text: event.target.value,
                      });
                    }}
                  />
                </FieldContainerDiv>

                <FieldContainerDiv>
                  <FieldLabelP>Prefered teaching days</FieldLabelP>
                  <CheckboxContainerDiv>
                    {prefDays[selectedSemester].map(
                      (day: boolean, idx: number) => {
                        return (
                          <ToggleView
                            onClick={() =>
                              setPrefDays({
                                semester: selectedSemester,
                                dayIdx: idx,
                              })
                            }
                            active={day}
                            id={idx}
                          >
                            {weekdays[idx]}
                          </ToggleView>
                        );
                      }
                    )}{" "}
                  </CheckboxContainerDiv>
                </FieldContainerDiv>
                <FieldContainerDiv>
                  <FieldLabelP>
                    Select your preferred teaching times.
                  </FieldLabelP>
                  <WarningText>
                    Please be aware that you still could be scheduled outside
                    your prefered times.
                  </WarningText>
                  <br />
                  <Timetable semester={selectedSemester} />
                </FieldContainerDiv>
              </>
            )}
          </TabbedContentDiv>
        </TabsContainerDiv>
        <StepContainerDiv>
          <CustomButtonView
            {...{ Theme: "Secondary" }}
            customClickEvent={() => {
              navigate(`/`);
            }}
          >
            {" "}
            Back{" "}
          </CustomButtonView>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            customClickEvent={() => {
              navigate(`/SelectProfessor/Summary`);
            }}
          >
            {" "}
            Confirm{" "}
          </CustomButtonView>
        </StepContainerDiv>
      </LayoutDiv>
    </Background>
  );
}

const ProfessorTimetable = (props: ProfessorTimetableProps) => {
  return <ProfessorTimetableView {...useProfessorTimetable(props)} />;
};

export default ProfessorTimetable;
