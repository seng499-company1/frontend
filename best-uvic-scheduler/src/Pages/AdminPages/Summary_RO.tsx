import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import * as ProfPreferencesHelper from "../../Util/ProfPreferencesHelper.tsx";
import { ProfessorNameContext } from "./LandingPage.tsx";
import { Background } from "../../Components/background/background.tsx";
import LandingPage from "./LandingPage.tsx";
import { array, number } from "prop-types";
import { isConstructorDeclaration } from "typescript";
import {
  noTimesMessage,
  timesEnteredMessage,
  semesterHeader,
  maxCoursesMessage,
  coursesMessage,
} from "../../Components/Summary/SummaryElements.tsx";

import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelsView,
  SelectableTableElementClosedDivView,
} from "../../Components/SelectTable/SelectableTable.tsx";

const SelectDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0px;
  padding-right: 100px;
  box-shadow: 1px 1px;
  background-color: var(--grey-50);
`;

const ResponseDiv = styled.div`
  text-indent: -40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
`;

const Header4 = styled.h4`
  text-align: left;
  text-indent: 40px;
`;

const TimeDiv = styled.div`
  text-align: left;
  padding-left: 42px;
`;

const TimeRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2px;
  box-shadow: 1px 1px;
  background-color: var(--grey-50);
  padding-bottom: 4px;
`;

const DayText = styled.div`
  padding-left: 32px;
  font-weight: bold;
  font-style: italic;
  grid-column: 1 / 3;
  grid-row: 1;
`;

const TimeText = styled.div`
  grid-column: 2/3;
  grid-row: 1;
`;
const TableDiv = styled.div`
  padding-top: 4px;
`;
const SelectableTableLabelDivView = styled.div`
  height: 5px;
  width: 100%;
  display: contents;
`;

const Space = styled.br`
  margin-bottom: 2px;
`;

function stringToTime(times: string) {
  var arrayTime: string[] = [];
  arrayTime = times.toString().split("(");
  arrayTime.shift();
  arrayTime.forEach((times, index) => {
    times = times.trim().slice(0, -1);
    arrayTime[index] = times;
  });

  return arrayTime;
}

export function Summary_RO() {
  //get data, call get professor entry endpoint using professor uuid
  const Preferences = ProfPreferencesHelper.GetPreferences();
  const CoursesPref = Preferences.course_preferences;
  const Times = Preferences.preferred_times;
  const [Courses, setCourses] = useState([]);
  const [AmountOfCourses, setAmmount] = useState(0);

  useEffect(() => {
    CourseListHelper.GetCourseList()
      .then((resp) => {
        setCourses(resp);
      })
      .then((resp) => {
        setAmmount(resp.length());
      });
  }, []);

  //   //hooks
  const { selectedProfessorName, setProfessorName } =
    useContext(ProfessorNameContext);
  const navigate = useNavigate();

  const terms = ["summer", "spring", "fall"];
  const weekdays = {
    mon: "Monday",
    tues: "Tuesday",
    wed: "Wednesday",
    thurs: "Thrusday",
    fri: "Friday",
  };

  const avail = {
    ABLE: "Able",
    UNWILLING: "Unwilling",
    VERY_WILLING: "Very Willing",
    NO: "Not Qualified",
  };
  //process time data

  const timeSummer = Times.summer;
  const timeSpring = Times.spring;
  const timeFall = Times.fall;

  return (
    <Background>
      <Header>Entries For {selectedProfessorName}</Header>

      <h2>Classes</h2>
      <TableDiv>
        <SelectableTableDivView columns={5}>
          {coursesMessage}
          {CoursesPref.map(function (Course, index) {
            let courseName = "";
            const willing = avail[Course.will_to_teach];
            const qualified = avail[Course.able_to_teach];
            var indexCourseList = Courses.findIndex(
              (p) => p.id === Course.course_id
            );
            if (indexCourseList != -1) {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      {Courses[indexCourseList].course_code}{" "}
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>

                    <SelectableTableLabelsView>
                      {" "}
                      {willing}
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView>
                      {" "}
                      {qualified}
                    </SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            }
          })}
        </SelectableTableDivView>
      </TableDiv>
      <Space></Space>
      <CustomButtonGroupView {...{ Amount: "Progession" }}>
        <CustomButtonView {...{ Theme: "Primary" }} customClickEvent={() => {}}>
          {" "}
          EDIT{" "}
        </CustomButtonView>
      </CustomButtonGroupView>

      <h2>Availibility</h2>

      <TableDiv>
        <SelectableTableDivView columns={5}>
          {semesterHeader("Summer")}
          {maxCoursesMessage(Preferences.num_summer_courses)}

          {(() => {
            if (
              timeSummer.mon.times.length === 0 &&
              timeSummer.tues.times.length === 0 &&
              timeSummer.wed.times.length === 0 &&
              timeSummer.thurs.times.length === 0 &&
              timeSummer.fri.times.length === 0
            ) {
              return noTimesMessage;
            } else {
              return timesEnteredMessage;
            }
          })()}

          {Object.keys(timeSummer).map(function (Day, index) {
            const day = weekdays[Day];
            let times = stringToTime(timeSummer[Day].times);
            if (times.length != 0) {
              return (
                <SelectableTableElementClosedDivView>
                  {times.map(function (time, timeIndex) {
                    const timeSplit = time.split(" ");

                    return (
                      <SelectableTableLabelDivView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                        <SelectableTableLabelsView>
                          {" "}
                          {day}
                        </SelectableTableLabelsView>
                        <SelectableTableLabelsView>
                          {" "}
                          {timeSplit[0].slice(1, -1)} -{" "}
                          {timeSplit[1].slice(1, -1)}
                        </SelectableTableLabelsView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                      </SelectableTableLabelDivView>
                    );
                  })}
                </SelectableTableElementClosedDivView>
              );
            }
          })}
        </SelectableTableDivView>
      </TableDiv>
      <TableDiv>
        <SelectableTableDivView columns={5}>
          {semesterHeader("Fall")}
          {maxCoursesMessage(Preferences.num_fall_courses)}

          {(() => {
            if (
              timeFall.mon.times.length === 0 &&
              timeFall.tues.times.length === 0 &&
              timeFall.wed.times.length === 0 &&
              timeFall.thurs.times.length === 0 &&
              timeFall.fri.times.length === 0
            ) {
              return noTimesMessage;
            } else {
              return timesEnteredMessage;
            }
          })()}
          {Object.keys(timeFall).map(function (Day, index) {
            const day = weekdays[Day];
            let times = stringToTime(timeFall[Day].times);

            if (times.length != 0) {
              return (
                <SelectableTableElementClosedDivView>
                  {times.map(function (time, timeIndex) {
                    const timeSplit = time.split(" ");

                    return (
                      <SelectableTableLabelDivView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                        <SelectableTableLabelsView>
                          {" "}
                          {day}
                        </SelectableTableLabelsView>
                        <SelectableTableLabelsView>
                          {" "}
                          {timeSplit[0].slice(1, -1)} -{" "}
                          {timeSplit[1].slice(1, -1)}
                        </SelectableTableLabelsView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                      </SelectableTableLabelDivView>
                    );
                  })}
                </SelectableTableElementClosedDivView>
              );
            }
          })}
        </SelectableTableDivView>
      </TableDiv>

      <TableDiv>
        <SelectableTableDivView columns={5}>
          {semesterHeader("Spring")}

          {maxCoursesMessage(Preferences.num_spring_courses)}
          {(() => {
            if (
              timeSpring.mon.times.length === 0 &&
              timeSpring.tues.times.length === 0 &&
              timeSpring.wed.times.length === 0 &&
              timeSpring.thurs.times.length === 0 &&
              timeSpring.fri.times.length === 0
            ) {
              return noTimesMessage;
            } else {
              return timesEnteredMessage;
            }
          })()}

          {Object.keys(timeSpring).map(function (Day, index) {
            const day = weekdays[Day];
            let times = stringToTime(timeSpring[Day].times);

            if (times.length != 0) {
              return (
                <SelectableTableElementClosedDivView>
                  {times.map(function (time, timeIndex) {
                    const timeSpring = time.split(" ");

                    return (
                      <SelectableTableLabelDivView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                        <SelectableTableLabelsView>
                          {" "}
                          {Day}
                        </SelectableTableLabelsView>
                        <SelectableTableLabelsView>
                          {" "}
                          {timeSpring[0].slice(1, -1)} -{" "}
                          {timeSpring[1].slice(1, -1)}
                        </SelectableTableLabelsView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                        <SelectableTableLabelsView></SelectableTableLabelsView>
                      </SelectableTableLabelDivView>
                    );
                  })}
                </SelectableTableElementClosedDivView>
              );
            }
          })}
        </SelectableTableDivView>
      </TableDiv>
      <Space></Space>

      <CustomButtonGroupView {...{ Amount: "Double" }}>
        <CustomButtonView
          {...{ Theme: "Secondary" }}
          customClickEvent={() => {
            navigate(`/LandingPage`);
          }}
        >
          {" "}
          Back{" "}
        </CustomButtonView>
        <CustomButtonView {...{ Theme: "Primary" }} customClickEvent={() => {}}>
          {" "}
          EDIT{" "}
        </CustomButtonView>
      </CustomButtonGroupView>
    </Background>
  );
}

export default Summary_RO;
