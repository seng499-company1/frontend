import React, { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PDISelectProfessorList from "./ProfessorDataInput_SelectProfessorList.tsx";
import PDISelectProfessorQualifications from "./ProfessorQualifications.tsx";
import PDISelectProfessorPreferences from "./ProfessorPreferences.tsx";
import Summary from "./Summary.tsx";
import ProfessorTimetable from "./ProfessorTimetable.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import { PreferenceItems, QualificationItems } from "./ProfessorTimetable.tsx";

export const ProfessorContext = React.createContext({
  selectedProfessor: 0,
  setProfessor: () => {},
});

export const QualificationsContext = React.createContext({
  selectedQualifications: {},
  setQualifications: (event) => {},
});
export const TimeContext = React.createContext({
  selectedTimes: {},
  setSelectedTimes: (event) => {},
});

export const PreferencesContext = React.createContext({
  preferences: {},
  setPreferences: (event) => {},
});

export const TimetableContext = React.createContext({
  timetables: {},
  setTimetables: (_timetables: {}) => {},
});

export const PrefDayContext = React.createContext({
  prefDays: {},
  setPrefDays: (_prefDays: {}) => {},
});

export const MaxCourseContext = React.createContext({
  maxCourseEntered: {},
  setMaxCourseEntered: (event) => {},
});

export const LeaveReasonContext = React.createContext({
  leaveReason: {},
  setLeaveReason: (event) => {},
});

export const semesters = ["Fall 2022", "Spring 2023", "Summer 2023"];

const initPrefDays = semesters.reduce(
  (arr, sem) => ((arr[sem] = Array(5).fill(false)), arr),
  {}
);

function updatePrefDays(
  state: Object,
  action: { semester: string; dayIdx: number }
) {
  const newState = {
    ...state,
    [action.semester]: state[action.semester].map(
      (day: boolean, idx: number) => {
        return idx === action.dayIdx ? !day : day;
      }
    ),
  };
  return newState;
}

const initTimeslots = semesters.reduce(
  (acc, sem) => (
    (acc[sem] = Array(24)
      .fill(false)
      .map(() => new Array(5).fill(false))),
    acc
  ),
  {}
);

function updateTimeslots(
  state: Object,
  action: { dayIdx: number; slotIdx: number; semester: string }
) {
  const newState = {
    ...state,
    [action.semester]: state[action.semester].map(
      (slot: Array<boolean>, slotIdx: number) => {
        if (slotIdx !== action.slotIdx) {
          return slot;
        } else {
          const newSlotState = slot.map((day: boolean, idx: number) => {
            return idx === action.dayIdx ? !day : day;
          });
          return newSlotState;
        }
      }
    ),
  };

  return newState;
}

export function ProfessorDataInputIndex() {
  const [selectedProfessor, setProfessor] = useState(0);
  const [qualifications, setQualifications] = useState({});
  const [preferences, setPreferences] = useState({});
  const [prefDays, setPrefDays] = useReducer(updatePrefDays, initPrefDays);
  const [timetables, setTimetables] = useReducer(
    updateTimeslots,
    initTimeslots
  );
  const [maxCourseEntered, setMaxCourseEntered] = useState({});
  const [leaveReason, setLeaveReason] = useState({});

  CourseListHelper.GetCourseList().then((resp) => {
    const defaultQualifications = {};
    if (Object.keys(qualifications).length === 0) {
      resp.forEach(
        (course) =>
          (defaultQualifications[course.course_code] =
            QualificationItems[0].value)
      );
      setQualifications(defaultQualifications);
    }
    const defaultPreferences = {};
    if (Object.keys(preferences).length === 0) {
      resp.forEach(
        (course) =>
          (defaultPreferences[course.course_code] = PreferenceItems[0].value)
      );
      setPreferences(defaultPreferences);
    }
  });

  return (
    <ProfessorContext.Provider value={{ selectedProfessor, setProfessor }}>
      <QualificationsContext.Provider
        value={{ qualifications, setQualifications }}
      >
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
          <PrefDayContext.Provider value={{ prefDays, setPrefDays }}>
            <TimetableContext.Provider value={{ timetables, setTimetables }}>
              <MaxCourseContext.Provider
                value={{ maxCourseEntered, setMaxCourseEntered }}
              >
                <LeaveReasonContext.Provider
                  value={{ leaveReason, setLeaveReason }}
                >
                  <Routes>
                    <Route path="" element={<PDISelectProfessorList />} />
                    <Route
                      path="Qualifications"
                      element={<PDISelectProfessorQualifications />}
                    />
                    <Route
                      path="Preferences"
                      element={<PDISelectProfessorPreferences />}
                    />
                    <Route
                      path="TimeAvail"
                      element={
                        <ProfessorTimetable
                          {...{
                            semesters,
                          }}
                        />
                      }
                    />
                    <Route path="Summary" element={<Summary />} />
                  </Routes>
                </LeaveReasonContext.Provider>
              </MaxCourseContext.Provider>
            </TimetableContext.Provider>
          </PrefDayContext.Provider>
        </PreferencesContext.Provider>
      </QualificationsContext.Provider>
    </ProfessorContext.Provider>
  );
}

export default ProfessorDataInputIndex;
