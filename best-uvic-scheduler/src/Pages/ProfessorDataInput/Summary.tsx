import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { ToggleView } from "../../Components/toggle/toggle.tsx";

import { QualificationsContext, PreferencesContext } from "./index.tsx";
import {
  ProfessorContext,
  PrefDayContext,
  LeaveReasonContext,
  MaxCourseContext,
} from "./index.tsx";
import { DefaultShadow } from "../../GlobalStyles.tsx";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import { Background } from "../../Components/background/background.tsx";
import { TimeIntervalHelper } from "../../Util/TimeIntervalHelper.tsx";

import * as ProfPreferencesHelper from "../../Util/ProfPreferencesHelper.tsx";

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

export interface SummaryProps {
  maxCourses: any;
  absenceReason: any;
}
const ResponseDiv = styled.div`
  text-indent: -40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
`;
const CheckboxContainerDiv = styled.div`
  display: flex;
  gap: var(--space-large);
  align-items: center;
  flex-wrap: wrap;
`;

const Header4 = styled.h4`
  text-align: left;
  text-indent: 40px;
`;

const TimeDiv = styled.div`
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
`;

const TimeRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 2px;
  ${DefaultShadow}
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

const WarningTextRow = styled.div`
  padding-top: 2px;
  ${DefaultShadow}
  background-color: var(--grey-50);
  padding-bottom: 4px;
`;

const WarningText = styled.div`
  text-align: center;
  grid-column
`;

const Space = styled.br`
  margin-bottom: 2px;
`;

const SelectableTableLabelDivView = styled.div`
  height: 5px;
  width: 100%;
  display: contents;
`;

const TableDiv = styled.div`
  padding-top: 4px;
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

export function Summary(props: SummaryProps) {
  //get data
  const [Courses, setCourses] = useState([]);
  const [AmountOfCourses, setAmmount] = useState(0);

  //get data
  useEffect(() => {
    console.log("Inside useEffect");
    CourseListHelper.GetCourseList()
      .then((resp) => {
        setCourses(resp);
      })
      .then((resp) => {
        setAmmount(resp.length());
      });
  }, []);

  const Preferences = ProfPreferencesHelper.GetPreferences();
  const Times = Preferences.preferred_times;

  let TimesTest = Preferences.preferred_times;
  const timesFromContext = TimeIntervalHelper();

  TimesTest.fall = timesFromContext["Fall 2022"];
  TimesTest.summer = timesFromContext["Spring 2023"];
  TimesTest.spring = timesFromContext["Summer 2023"];

  //hooks
  const { qualifications, setQualifications } = useContext(
    QualificationsContext
  );
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const { prefDays, setPrefDays } = useContext(PrefDayContext);
  const { leaveReason, setLeaveReason } = useContext(LeaveReasonContext);
  const { maxCourseEntered, setMaxCourseEntered } =
    useContext(MaxCourseContext);

  const navigate = useNavigate();

  const weekdays = {
    mon: "Monday",
    tues: "Tuesday",
    wed: "Wednesday",
    thurs: "Thrusday",
    fri: "Friday",
  };

  const weekdayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  console.log("TIMES");
  console.log(Preferences);
  const timeSummer = Times.summer;
  const timeSpring = Times.spring;
  const timeFall = Times.fall;

  return (
    <Background>
      <Header>
        Summary For {selectedProfessor.first_name} {selectedProfessor.last_name}
      </Header>

      <h2>Course Teaching Preferences</h2>
      <TableDiv>
        <SelectableTableDivView columns={3}>
          <SelectableTableHeaderDivView>
            <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
            <SelectableTableLabelsView>Qualification</SelectableTableLabelsView>
            <SelectableTableLabelsView>Preference</SelectableTableLabelsView>
          </SelectableTableHeaderDivView>
          {Courses.map(function (Course, index) {
            let name = Course.course_code;
            let qual = qualifications[name];
            let pref = preferences[name];

            if (qual == null) {
              qual = "N/A";
            }
            if (pref == null) {
              pref = "N/A";
            }
            return (
              <SelectableTableElementClosedDivView>
                <SelectableTableLabelDivView>
                  <SelectableTableLabelsView>
                    {Course.course_code}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView> {qual}</SelectableTableLabelsView>
                  <SelectableTableLabelsView> {pref}</SelectableTableLabelsView>
                </SelectableTableLabelDivView>
              </SelectableTableElementClosedDivView>
            );
          })}
        </SelectableTableDivView>
      </TableDiv>

      <h2>Teaching Time Preferences</h2>
      <TableDiv>
        <SelectableTableDivView columns={5}>
          <SelectableTableHeaderDivView>
            <SelectableTableLabelsView>Summer</SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
          </SelectableTableHeaderDivView>

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                {" "}
                Maximum number of courses per semester:{" "}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {Preferences.num_summer_courses}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {prefDays["Summer 2023"].map((day: boolean, idx: number) => {
                  return (
                    <ToggleView readOnly active={day} id={idx}>
                      {weekdayArray[idx]}
                    </ToggleView>
                  );
                })}{" "}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

          {(() => {
            if (
              timeSummer.Monday.times.length === 0 &&
              timeSummer.Tuesday.times.length === 0 &&
              timeSummer.Wednesday.times.length === 0 &&
              timeSummer.Thursday.times.length === 0 &&
              timeSummer.Friday.times.length === 0
            ) {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      No Times Entered For This Semester
                    </SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            } else {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      Times Entered:
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            }
          })()}
          {Object.keys(timeSummer).map(function (Day, index) {
            console.log("DAY");
            console.log(Day);

            let times = stringToTime(timeSummer[Day].times);
            console.log(times);
            let loop = 0;
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
                          {Day}
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
          <SelectableTableHeaderDivView>
            <SelectableTableLabelsView>Fall</SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
          </SelectableTableHeaderDivView>

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                {" "}
                Maximum number of courses per semester:{" "}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {Preferences.num_fall_courses}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {prefDays["Fall 2022"].map((day: boolean, idx: number) => {
                  return (
                    <ToggleView readOnly active={day} id={idx}>
                      {weekdayArray[idx]}
                    </ToggleView>
                  );
                })}{" "}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

          {(() => {
            if (
              timeFall.Monday.times.length === 0 &&
              timeFall.Tuesday.times.length === 0 &&
              timeFall.Wednesday.times.length === 0 &&
              timeFall.Thursday.times.length === 0 &&
              timeFall.Friday.times.length === 0
            ) {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      No Times Entered For This Semester
                    </SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            } else {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      Times Entered:
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            }
          })()}
          {Object.keys(timeFall).map(function (Day, index) {
            console.log("DAY");
            console.log(Day);

            let times = stringToTime(timeFall[Day].times);
            console.log(times);
            let loop = 0;
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
                          {Day}
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
          <SelectableTableHeaderDivView>
            <SelectableTableLabelsView>Spring</SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
            <SelectableTableLabelsView></SelectableTableLabelsView>
          </SelectableTableHeaderDivView>

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                {" "}
                Maximum number of courses per semester:{" "}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {Preferences.num_spring_courses}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
              <SelectableTableLabelsView> </SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {prefDays["Spring 2023"].map((day: boolean, idx: number) => {
                  return (
                    <ToggleView readOnly active={day} id={idx}>
                      {weekdayArray[idx]}
                    </ToggleView>
                  );
                })}{" "}
              </SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
              <SelectableTableLabelsView></SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableElementClosedDivView>

          {(() => {
            if (
              timeSpring.Monday.times.length === 0 &&
              timeSpring.Tuesday.times.length === 0 &&
              timeSpring.Wednesday.times.length === 0 &&
              timeSpring.Thursday.times.length === 0 &&
              timeSpring.Friday.times.length === 0
            ) {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      No Times Entered For This Semester
                    </SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            } else {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      Times Entered:
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                    <SelectableTableLabelsView></SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            }
          })()}
          {Object.keys(timeSpring).map(function (Day, index) {
            console.log("DAY");
            console.log(Day);

            let times = stringToTime(timeSpring[Day].times);
            console.log(times);
            let loop = 0;
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
            navigate(`/SelectProfessor/TimeAvail`);
          }}
        >
          {" "}
          Back{" "}
        </CustomButtonView>
        <CustomButtonView
          {...{ Theme: "Primary" }}
          customClickEvent={() => {
            navigate(`/`);
          }}
        >
          {" "}
          SUBMIT{" "}
        </CustomButtonView>
      </CustomButtonGroupView>
    </Background>
  );
}

export default Summary;
