import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ToggleView } from "../../Components/toggle/toggle.tsx";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import * as ProfPreferencesHelper from "../../Util/ProfPreferencesHelper.tsx";
import { ProfessorNameContext } from "./index.tsx";
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
  leaveReasonView_RO,
} from "../../Components/Summary/SummaryElements.tsx";

import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelsView,
  SelectableTableElementClosedDivView,
} from "../../Components/SelectTable/SelectableTable.tsx";
import { json } from "stream/consumers";
import { monitorEventLoopDelay } from "perf_hooks";

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

  const [Courses, setCourses] = useState([]);
  const [AmountOfCourses, setAmmount] = useState(0);

  const [ProfPreferenes, setProfPreference] = useState([]);
  const [AmountOfPref, setPrefAmount] = useState(0);

  useEffect(() => {
    CourseListHelper.GetCourseList()
      .then((resp) => {
        setCourses(resp);
      })
      .then((resp) => {
        setAmmount(resp.length());
      });
  }, []);

  useEffect(() => {
    ProfPreferencesHelper.GetPreferencesFromProf(
      selectedProfessorName["pref_id"]
    )
      .then((resp) => {
        setProfPreference(resp);
      })
      .then((resp) => {
        setPrefAmount(resp.length());
      });
  }, []);

  //setProfPreference(ProfPreferencesHelper.GetPreferencesFromProf());
  const Preferences = ProfPreferenes[0];

  //const CoursesPref = Preferences.course_preferences;
  const tempPreferences = {};
  //hooks
  const { selectedProfessorName, setProfessorName } =
    useContext(ProfessorNameContext);
  console.log("SELECTED VAL");
  console.log(selectedProfessorName);
  const navigate = useNavigate();
  //This is stupid I know... I couldn't access the elements of the json unless I did this, probs a better way but demo is tomorrow :)
  for (const key in Preferences) {
    tempPreferences[key] = Preferences[key];
  }

  if (tempPreferences.course_preferences === undefined) {
    return <p>Preferences are undefined, try to update the post request</p>;
  }

  let CoursesPref = JSON.parse(tempPreferences.course_preferences);
  const Times = tempPreferences.preferred_times;

  console.log(tempPreferences);
  let str: string = tempPreferences["why_relief"];
  let summerRelief = "";
  let springRelief = "";
  let fallRelief = "";
  if (str.includes("/$fall/")) {
    let array = tempPreferences["why_relief"].split("/$fall/");
    let array2 = array[1].split("/$spring/");
    fallRelief = array2[0];
    let array3 = array2[1].split("/$summer/");
    springRelief = array3[0];
    summerRelief = array3[1];
  }
  let timeTest = JSON.parse(Times);

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
    WITH_EFFORT: "With Effort",
    UNWILLING: "Unwilling",
    WILLING: "Willing",
    NO: "N/A",
    VERY_WILLING: "Very Willing",
  };

  const timeSummer = timeTest.summer;
  const timeSpring = timeTest.spring;
  const timeFall = timeTest.fall;
  console.log(timeSpring);
  return (
    <div>
      <Header>Entries For {selectedProfessorName["first_name"]}</Header>

      <h2>Classes</h2>
      <TableDiv>
        <SelectableTableDivView columns={5}>
          {coursesMessage}
          {CoursesPref.map(function (Course, index) {
            let courseName = "";
            let willing = avail[Course.will_to_teach];
            let qualified = avail[Course.able_to_teach];
            if (willing === "") {
              willing = "N/A";
            }
            if (qualified === "") {
              qualified = "N/A";
            }
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
      <CustomButtonGroupView
        {...{ Amount: "Progession" }}
      ></CustomButtonGroupView>

      <h2>Availibility</h2>

      <TableDiv>
        <SelectableTableDivView columns={5}>
          {semesterHeader("Summer")}
          {leaveReasonView_RO("Summer 2023", summerRelief)}

          {maxCoursesMessage(tempPreferences.num_summer_courses)}

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {/* yes I know this is dumb, but also demo soon :(  */}
                <ToggleView
                  readOnly
                  active={timeSummer["mon"]["preferredDay"]}
                  id={0}
                >
                  Monday
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSummer["tues"]["preferredDay"]}
                  id={1}
                >
                  Tuesday{" "}
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSummer["wed"]["preferredDay"]}
                  id={2}
                >
                  Wednesday
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSummer["thurs"]["preferredDay"]}
                  id={3}
                >
                  Thursday{" "}
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSummer["fri"]["preferredDay"]}
                  id={4}
                >
                  Friday
                </ToggleView>
              </SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

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
          {leaveReasonView_RO("Fall 2022", fallRelief)}

          {maxCoursesMessage(tempPreferences.num_fall_courses)}

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {/* yes I know this is dumb, but also demo soon :(  */}
                <ToggleView
                  readOnly
                  active={timeFall["mon"]["preferredDay"]}
                  id={0}
                >
                  Monday
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeFall["tues"]["preferredDay"]}
                  id={1}
                >
                  Tuesday{" "}
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeFall["wed"]["preferredDay"]}
                  id={2}
                >
                  Wednesday
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeFall["thurs"]["preferredDay"]}
                  id={3}
                >
                  Thursday{" "}
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeFall["fri"]["preferredDay"]}
                  id={4}
                >
                  Friday
                </ToggleView>
              </SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

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
          {leaveReasonView_RO("Spring 2023", springRelief)}

          {maxCoursesMessage(tempPreferences.num_spring_courses)}

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {/* yes I know this is dumb, but also demo soon :(  */}
                <ToggleView
                  readOnly
                  active={timeSpring["mon"]["preferredDay"]}
                  id={0}
                >
                  Monday
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSpring["tues"]["preferredDay"]}
                  id={1}
                >
                  Tuesday{" "}
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSpring["wed"]["preferredDay"]}
                  id={2}
                >
                  Wednesday
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSpring["thurs"]["preferredDay"]}
                  id={3}
                >
                  Thursday{" "}
                </ToggleView>
                <ToggleView
                  readOnly
                  active={timeSpring["fri"]["preferredDay"]}
                  id={4}
                >
                  Friday
                </ToggleView>
              </SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>
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
                          {day}
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
            navigate(`/Admin`);
          }}
        >
          {" "}
          Back{" "}
        </CustomButtonView>
      </CustomButtonGroupView>
    </div>
  );
}

export default Summary_RO;
