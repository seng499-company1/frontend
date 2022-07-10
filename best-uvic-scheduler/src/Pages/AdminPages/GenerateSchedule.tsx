import React, { useState, useContext, useReducer } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TabGroup from "../../Components/tab-group/tab-group.tsx";

import { Background } from "../../Components/background/background.tsx";
import Logo from "../../Images/uvic.png";
import * as ScheduleHelper from "../../Util/ScheduleHelper.tsx";

import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelDivView,
  SelectableTableLabelsView,
  SelectableTableIconElementDivView,
  SelectableTableElementClosedDivView,
  SelectableTableElementOpenedDivView,
  SelectableTableInputDiv,
  SelectableTableSingleInputDiv,
  SelectableTableCheckboxDiv,
} from "../../Components/SelectTable/SelectableTable.tsx";
import NavBar from "../../Components/navBar/navBar.tsx";
import { HeaderView } from "../../Components/Header/header.tsx";

export interface GenerateScheduleProps {
  semesters: Array<string>;
}

export interface GenerateScheduleViewProps {
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

function useGenerateScheudle(props: GenerateScheduleProps) {
  const { semesters } = props;

  const semestersItems = semesters.map((sem: string) => {
    return { value: sem, label: sem };
  });

  //   const [aways, onAway] = useReducer(updateCheckbox, semesters, initCheckbox);

  //   const [requestOffs, onRequestOff] = useReducer(
  //     updateCheckbox,
  //     semesters,
  //     initCheckbox
  //   );

  const [selectedSemester, onSelectedSemester] = useState({
    value: semesters[0] || "",
    label: semesters[0] || "",
  });

  //   const [absenceReasons, onAbsenceReason] = useReducer(
  //     updateString,
  //     semesters,
  //     initString
  //   );

  //   const [maxCourses, setMaxCourses] = useReducer(
  //     updateString,
  //     semesters,
  //     initString
  //   );

  const navigate = useNavigate();

  //get data
  //const CourseData = CourseListHelper.GetCourseList();
  // const Courses = CourseData.Courses;
  // const AmountOfCourses = Courses.length;

  //hooks
  //   const { preferences, setPreferences } = useContext(PreferencesContext);
  //   const { selectedTimes, setSelectedTimes } = useContext(TimeContext);

  const PreferenceItems = [
    { value: "Not Willing", label: "Not Willing" },
    { value: "Willing", label: "Willing" },
    { value: "Very Willing", label: "Very Willing" },
  ];

  //hooks
  //   const { qualifications, setQualifications } = useContext(
  //     QualificationsContext
  //   );

  const QualificationItems = [
    { value: "Not Qualified", label: "Not Qualified" },
    { value: "Qualified", label: "Qualified" },
  ];

  //   const { prefDays, setPrefDays } = useContext(PrefDayContext);

  // console.log(TimeIntervalHelper());

  return {
    // Courses,
    // AmountOfCourses,
    // preferences,
    // setPreferences,
    // PreferenceItems,
    // qualifications,
    // setQualifications,
    QualificationItems,
    semesters: semestersItems,
    selectedSemester: selectedSemester.label,
    // away: aways[selectedSemester.label],
    // requestOff: requestOffs[selectedSemester.label],
    // absenceReason: absenceReasons[selectedSemester.label],
    // maxCourses: maxCourses[selectedSemester.label],
    // setMaxCourses,
    onSelectedSemester,
    // onAway,
    // onRequestOff,
    // onAbsenceReason,
    // prefDays,
    // setPrefDays,
    navigate,
  };
}

const TableDiv = styled.div`
  padding-top: 4px;
`;
export function GenerateScheduleView(props: GenerateScheduleViewProps) {
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
  } = props;
  // **** first schedule output only

  const scheduleFall = ScheduleHelper.GetSchedule()[0].schedule.fall;
  const scheduleSpring = ScheduleHelper.GetSchedule()[0].schedule.spring;
  const scheduleSummer = ScheduleHelper.GetSchedule()[0].schedule.summer;

  let viewSchedule;
  if (selectedSemester == "Summer 2023") {
    viewSchedule = scheduleSummer;
  } else if (selectedSemester == "Spring 2023") {
    viewSchedule = scheduleSpring;
  } else if (selectedSemester == "Fall 2022") {
    viewSchedule = scheduleFall;
  }
  //   const semesters = [
  //     { label: "Fall 2023", value: "fall" },
  //     { label: "Spring 2023", value: "spring" },
  //     { label: "Summer 2022", value: "summer" },
  //   ];

  return (
    <Background>
      <HeaderView />
      <TabGroup initialTabId="0">
        {semesters.map((sem: { label: string; value: string }, i: number) => {
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
        })}
      </TabGroup>
      <TableDiv>
        <SelectableTableDivView>
          <SelectableTableHeaderDivView>
            <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
            <SelectableTableLabelsView>Course Name</SelectableTableLabelsView>
            <SelectableTableLabelsView>Instructor</SelectableTableLabelsView>
            <SelectableTableLabelsView>Day</SelectableTableLabelsView>
            <SelectableTableLabelsView>Time</SelectableTableLabelsView>
          </SelectableTableHeaderDivView>

          {viewSchedule.map(function (Course, index) {
            console.log(selectedSemester);
            console.log(viewSchedule);
            console.log(Course.sections[0].professor.name);

            return (
              <SelectableTableElementClosedDivView>
                <SelectableTableLabelDivView>
                  <SelectableTableLabelsView>
                    {Course.course.code}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {Course.course.title}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {Course.sections[0].professor.name}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {/* {Course.sections[0].timeSlots[0].MONDAY} */}
                  </SelectableTableLabelsView>
                </SelectableTableLabelDivView>
              </SelectableTableElementClosedDivView>
            );
          })}
        </SelectableTableDivView>
      </TableDiv>
    </Background>
  );
}

const GenerateSchedule = (props: GenerateScheduleProps) => {
  return <GenerateScheduleView {...useGenerateScheudle(props)} />;
};

export default GenerateSchedule;
