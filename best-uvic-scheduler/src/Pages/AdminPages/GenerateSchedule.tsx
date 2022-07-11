import React, { useEffect, useState, useContext, useReducer } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TabGroup from "../../Components/tab-group/tab-group.tsx";

import { Background } from "../../Components/background/background.tsx";
import Logo from "../../Images/Uvic-logo.png";
import { GetSchedule1 } from "../../Util/ScheduleHelper.tsx";
import * as ScheduleHelper from "../../Util/ScheduleHelper.tsx";

import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelsView,
  SelectableTableIconElementDivView,
  SelectableTableElementClosedDivView,
  SelectableTableElementOpenedDivView,
  SelectableTableInputDiv,
  SelectableTableSingleInputDiv,
  SelectableTableCheckboxDiv,
} from "../../Components/SelectTable/SelectableTable.tsx";
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
  Schedule: any;
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

  const [selectedSemester, onSelectedSemester] = useState({
    value: semesters[0] || "",
    label: semesters[0] || "",
  });

  const navigate = useNavigate();

  const PreferenceItems = [
    { value: "Not Willing", label: "Not Willing" },
    { value: "Willing", label: "Willing" },
    { value: "Very Willing", label: "Very Willing" },
  ];

  const QualificationItems = [
    { value: "Not Qualified", label: "Not Qualified" },
    { value: "Qualified", label: "Qualified" },
  ];

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

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
`;

const SelectableTableLabelDivView = styled.div`
  height: 5px;
  width: 100%;
  display: contents;
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

function CreateListelement(scheduleElement) {
  console.log("Here is Course ID");
  const couseID = scheduleElement.course.code;
  console.log(couseID);

  console.log("Here is Course Name");
  const couseName = scheduleElement.course.title;
  console.log(couseName);

  console.log("Here is Course Instructor");
  const couseInstructor = scheduleElement.sections[0].professor.name;
  console.log(couseInstructor);

  console.log("Here are the Course days");
  const courseSections = scheduleElement.sections;
  let daysOffered;
  console.log(courseSections);
  scheduleElement.sections.forEach((section) => {
    //console.log(section);
    section.timeSlots.forEach((day, index) => {
      if (index === 0) {
        if (day === "THURSDAY") {
          daysOffered = "Th";
        } else {
          daysOffered = day.dayOfWeek[0];
        }
      } else {
        if (day.dayOfWeek === "THURSDAY") {
          daysOffered = daysOffered + "/Th";
        } else {
          daysOffered = daysOffered + "/" + day.dayOfWeek[0];
        }
      }
      //console.log(day.dayOfWeek + index);
    });
  });
  console.log(daysOffered);

  console.log("Here are the Course Times");
  let timeOffered;
  scheduleElement.sections.forEach((section) => {
    console.log(section);
     if(section.timeSlots.length > 0){
       const time = section.timeSlots[0].timeRange;
       timeOffered = time[0][0] + " - " + time[0][1];
      console.log(timeOffered);
     } else {
      timeOffered = "Course not scheduled"
    }
  });
  //console.log(daysOffered);

  return (
    <SelectableTableElementClosedDivView>
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>{couseID}</SelectableTableLabelsView>
        <SelectableTableLabelsView>{couseName}</SelectableTableLabelsView>
        <SelectableTableLabelsView>{couseInstructor}</SelectableTableLabelsView>
        <SelectableTableLabelsView>{daysOffered}</SelectableTableLabelsView>
        <SelectableTableLabelsView>{timeOffered}</SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    </SelectableTableElementClosedDivView>
  );
}

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
  const [Schedule, setSchedule] = useState([]);

  useEffect(() => {
    GetSchedule1().then((resp) => {
      setSchedule(resp);
    });
  }, []);

  if (Schedule.length === 0) {
    return <></>;
  }

  // **** first schedule output only

  console.log(Schedule.schedule.fall);
  const scheduleFall = Schedule.schedule.fall;
  console.log("Fall Scedule");

  const scheduleSpring = Schedule.schedule.spring;
  const scheduleSummer = Schedule.schedule.summer;

  let currentlyShownSchedule;
  if (selectedSemester == "Summer 2023") {
    currentlyShownSchedule = scheduleSummer;
  } else if (selectedSemester == "Spring 2023") {
    currentlyShownSchedule = scheduleSpring;
  } else if (selectedSemester == "Fall 2022") {
    currentlyShownSchedule = scheduleFall;
  }

  console.log("Here is Course ID");
  const couseID = currentlyShownSchedule[0].course.code;
  console.log(couseID);

  console.log("Here is Course Name");
  const couseName = currentlyShownSchedule[0].course.title;
  console.log(couseName);

  console.log("Here is Course Instructor");
  const couseInstructor = currentlyShownSchedule[0].sections[0].professor.name;
  console.log(couseInstructor);

  console.log("Here are the Course days");
  const courseSections = currentlyShownSchedule[0].sections;
  let daysOffered;
  console.log(courseSections);
  currentlyShownSchedule[0].sections.forEach((section) => {
    console.log(section);
    section.timeSlots.forEach((day, index) => {
      if (index === 0) {
        if (day === "THURSDAY") {
          daysOffered = "Th";
        } else {
          daysOffered = day.dayOfWeek[0];
        }
      } else {
        if (day === "THURSDAY") {
          daysOffered = daysOffered + "/Th";
        } else {
          daysOffered = daysOffered + "/" + day.dayOfWeek[0];
        }
      }
      //console.log(day.dayOfWeek + index);
    });
  });
  console.log(daysOffered);

  console.log("Here are the Course Times");
  let timeOffered;
  currentlyShownSchedule[0].sections.forEach((section) => {
    console.log(section);

    // const time = section.timeSlots[0].timeRange;
    // timeOffered = time[0] + " - " + time[1];
    // console.log(timeOffered);
    //console.log(day.dayOfWeek + index);
  });
  console.log(daysOffered);

  let secondcourse = CreateListelement(currentlyShownSchedule[1]);

  console.log(secondcourse);

  return (
    <Background>
      <HeaderView />
      <TabGroup initialTabId="0">
        {semesters.map((sem: { label: string; value: string }, i: number) => {
          return (
            <TabGroup.Tab
              tabId={`${i}`}
              shrinkTab={true}
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
        <SelectableTableDivView columns={5}>
          <SelectableTableHeaderDivView>
            <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
            <SelectableTableLabelsView>Course Name</SelectableTableLabelsView>
            <SelectableTableLabelsView>Instructor</SelectableTableLabelsView>
            <SelectableTableLabelsView>Days</SelectableTableLabelsView>
            <SelectableTableLabelsView>Time</SelectableTableLabelsView>
          </SelectableTableHeaderDivView>
          {currentlyShownSchedule.map((course) => {
            return CreateListelement(course);
          })}
        </SelectableTableDivView>
      </TableDiv>
    </Background>
  );
  //{viewSchedule.map(function (Course, index) {
  //console.log(selectedSemester);
  //console.log(viewSchedule);
  //console.log(Course.sections[0].professor.name);

  //return (
  //<SelectableTableElementClosedDivView>
  //<SelectableTableLabelDivView>
  //<SelectableTableLabelsView>
  //{Course.course.code}
  //</SelectableTableLabelsView>
  //<SelectableTableLabelsView>
  //{Course.course.title}
  //</SelectableTableLabelsView>
  //<SelectableTableLabelsView>
  //{Course.sections[0].professor.name}
  //</SelectableTableLabelsView>
  //<SelectableTableLabelsView>
  //{/* {Course.sections[0].timeSlots[0].MONDAY} */}
  //</SelectableTableLabelsView>
  //</SelectableTableLabelDivView>
  //</SelectableTableElementClosedDivView>
  //);
  //})}
}

const GenerateSchedule = (props: GenerateScheduleProps) => {
  return <GenerateScheduleView {...useGenerateScheudle(props)} />;
};

export default GenerateSchedule;
