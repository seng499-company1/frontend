import React, { useEffect, useState, useContext, useReducer } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TabGroup from "../../Components/tab-group/tab-group.tsx";

import { Background } from "../../Components/background/background.tsx";
import Logo from "../../Images/Uvic-logo.png";
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
  ScheduleFall: any;
  ScheduleSummer: any;
  ScheduleSpring: any;
  QualificationItems: {
    value: string;
    label: string;
  }[];
}

function useGenerateScheudle(props: GenerateScheduleProps) {
  const [ScheduleFall, setFallSchedule] = useState([]);
  const [ScheduleSpring, setSpringSchedule] = useState([]);
  const [ScheduleSummer, setSummerSchedule] = useState([]);
  const { semesters } = props;

  //get data
  useEffect(() => {
    ScheduleHelper.GetSchedule().then((resp) => {
      console.log(resp[0].schedule);
      setFallSchedule(resp[0].schedule.fall);
      setSpringSchedule(resp[0].schedule.spring);
      setSummerSchedule(resp[0].schedule.summer);
    });
  }, []);

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
    ScheduleFall,
    ScheduleSummer,
    ScheduleSpring,
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

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  padding-left: 0px;
  padding-right: 0px;
  grid-column: 2 / 3;
  grid-row: 1;
`;

const LogoDiv = styled.div`
  padding-left: 48px;
  padding-right: 0px;
  grid-column: 1 / 3;
  grid-row: 1;
`;
const TableDiv = styled.div`
  padding-top: 4px;
`;
export function GenerateScheduleView(props: GenerateScheduleViewProps) {
  const {
    semesters,
    ScheduleFall,
    ScheduleSpring,
    ScheduleSummer,
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

  let viewSchedule;
  if (selectedSemester == "Summer 2023") {
    viewSchedule = ScheduleSummer;
  } else if (selectedSemester == "Spring 2023") {
    viewSchedule = ScheduleSpring;
  } else if (selectedSemester == "Fall 2022") {
    viewSchedule = ScheduleFall;
  }
  //   const semesters = [
  //     { label: "Fall 2023", value: "fall" },
  //     { label: "Spring 2023", value: "spring" },
  //     { label: "Summer 2022", value: "summer" },
  //   ];

  return (
    <Background>
      <Header>
        <LogoDiv>
          <img src={Logo} width="50px" height="80px" />
        </LogoDiv>
        <Title>UVIC Course Scheduler</Title>
      </Header>

      <NavBar initialTabId="4"></NavBar>
      <br></br>
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
