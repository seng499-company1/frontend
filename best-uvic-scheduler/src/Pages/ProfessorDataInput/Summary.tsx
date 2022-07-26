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
import { TimetableContext } from "../../Pages/ProfessorDataInput/index.tsx";
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
  SelectableTableLabelsView,
  SelectableTableElementClosedDivView,
} from "../../Components/SelectTable/SelectableTable.tsx";

import {
  noTimesMessage,
  timesEnteredMessage,
  semesterHeader,
  maxCoursesMessage,
  coursesMessage,
  leaveReasonView,
} from "../../Components/Summary/SummaryElements.tsx";

export interface SummaryProps {
  maxCourses: any;
  absenceReason: any;
}
export interface DayProps {
  times: Array<string>;
  preferredDay: boolean;
}
export interface SemesterProps {
  mon: DayProps;
  tues: DayProps;
  wed: DayProps;
  thurs: DayProps;
  fri: DayProps;
}

export interface PreferedTimesProps {
  fall: SemesterProps;
  spring: SemesterProps;
  summer: SemesterProps;
}

export interface CoursePreferences {
  course_id: string;
  will_to_teach: string;
  able_to_teach: string;
}
export interface SubmitInfoProps {
  year: number;
  semester_off: number;
  num_relief: number;
  num_summer_courses: number;
  num_fall_courses: number;
  num_spring_courses: number;
  why_relief: string;
  preferred_times: PreferedTimesProps;
  course_preferences: Array<CoursePreferences>;
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
  var submitInfo: SubmitInfoProps = {
    year: 2022,
    semester_off: 0,
    num_relief: 0,
    num_summer_courses: 0,
    num_fall_courses: 0,
    num_spring_courses: 0,
    why_relief: "",
    preferred_times: {
      fall: {
        mon: {
          times: [""],
          preferredDay: false,
        },
        tues: {
          times: [""],
          preferredDay: false,
        },
        wed: {
          times: [""],
          preferredDay: false,
        },
        thurs: {
          times: [""],
          preferredDay: false,
        },
        fri: {
          times: [""],
          preferredDay: false,
        },
      },
      spring: {
        mon: {
          times: [""],
          preferredDay: false,
        },
        tues: {
          times: [""],
          preferredDay: false,
        },
        wed: {
          times: [""],
          preferredDay: false,
        },
        thurs: {
          times: [""],
          preferredDay: false,
        },
        fri: {
          times: [""],
          preferredDay: false,
        },
      },
      summer: {
        mon: {
          times: [""],
          preferredDay: false,
        },
        tues: {
          times: [""],
          preferredDay: false,
        },
        wed: {
          times: [""],
          preferredDay: false,
        },
        thurs: {
          times: [""],
          preferredDay: false,
        },
        fri: {
          times: [""],
          preferredDay: false,
        },
      },
    },
    course_preferences: [],
  };

  //get data
  const [Courses, setCourses] = useState([]);
  const [AmountOfCourses, setAmmount] = useState(0);

  //get data
  useEffect(() => {
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
  TimesTest.summer = timesFromContext["Summer 2023"];
  TimesTest.spring = timesFromContext["Spring 2023"];

  //hooks
  const { qualifications, setQualifications } = useContext(
    QualificationsContext
  );

  const { timetables, setTimetables } = useContext(TimetableContext);
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const { prefDays, setPrefDays } = useContext(PrefDayContext);
  const { leaveReason, setLeaveReason } = useContext(LeaveReasonContext);
  const { maxCourseEntered, setMaxCourseEntered } =
    useContext(MaxCourseContext);

  const navigate = useNavigate();

  const weekdays = {
    Monday: "mon",
    Tuesday: "tues",
    Wednesday: "wed",
    Thursday: "thurs",
    Friday: "fri",
  };

  const weekdayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timeSummer = Times.summer;
  const timeSpring = Times.spring;
  const timeFall = Times.fall;

  //add to json
  submitInfo.num_fall_courses = maxCourseEntered["Fall 2022"];
  submitInfo.num_spring_courses = maxCourseEntered["Spring 2023"];
  submitInfo.num_summer_courses = maxCourseEntered["Summer 2023"];

  if (submitInfo.num_fall_courses === undefined) {
    submitInfo.num_fall_courses = 0;
  }
  submitInfo.num_fall_courses = 0;
  if (submitInfo.num_spring_courses === undefined) {
    submitInfo.num_spring_courses = 0;
  }
  if (submitInfo.num_summer_courses === undefined) {
    submitInfo.num_summer_courses = 0;
  }
  submitInfo.why_relief = submitInfo.why_relief.concat(
    "/$fall/",
    leaveReason["Fall 2022"],
    "/$spring/",
    leaveReason["Spring 2023"],
    "/$summer/",
    leaveReason["Summer 2023"]
  );

  return (
    <Background>
      <Header>Summary</Header>

      <h2>Course Teaching Preferences</h2>
      <TableDiv>
        <SelectableTableDivView columns={5}>
          {coursesMessage}
          {Courses.map(function (Course, index) {
            let name = Course.course_code;
            let qual = qualifications[name];
            let pref = preferences[name];

            if (qual == null) {
              qual = "NO";
            }
            if (pref == null) {
              pref = "NO";
            }

            let courseInfo: CoursePreferences = {
              course_id: Course.id,
              will_to_teach: qual,
              able_to_teach: pref,
            };

            submitInfo.course_preferences.push(courseInfo);
            return (
              <SelectableTableElementClosedDivView>
                <SelectableTableLabelDivView>
                  <SelectableTableLabelsView>
                    {Course.course_code}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView></SelectableTableLabelsView>
                  <SelectableTableLabelsView></SelectableTableLabelsView>

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
          {semesterHeader("Fall")}

          {leaveReasonView("Fall 2022", leaveReason)}

          {maxCoursesMessage(maxCourseEntered["Fall 2022"])}

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {prefDays["Fall 2022"].map((day: boolean, idx: number) => {
                  submitInfo.preferred_times.fall[
                    weekdays[weekdayArray[idx]]
                  ].preferredDay = day;
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
              return noTimesMessage;
            } else {
              return timesEnteredMessage;
            }
          })()}
          {Object.keys(timeFall).map(function (Day, index) {
            let times = stringToTime(timeFall[Day].times);
            submitInfo.preferred_times.fall[weekdays[Day]].times = [
              timeFall[Day].times,
            ];

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
          {semesterHeader("Spring")}

          {leaveReasonView("Spring 2023", leaveReason)}
          {maxCoursesMessage(maxCourseEntered["Spring 2023"])}

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {prefDays["Spring 2023"].map((day: boolean, idx: number) => {
                  submitInfo.preferred_times.spring[
                    weekdays[weekdayArray[idx]]
                  ].preferredDay = day;
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
              return noTimesMessage;
            } else {
              return timesEnteredMessage;
            }
          })()}
          {Object.keys(timeSpring).map(function (Day, index) {
            submitInfo.preferred_times.spring[weekdays[Day]].times = [
              timeSpring[Day].times,
            ];
            let times = stringToTime(timeSpring[Day].times);

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

      <TableDiv>
        <SelectableTableDivView columns={5}>
          {semesterHeader("Summer")}

          {maxCoursesMessage(maxCourseEntered["Summer 2023"])}

          {leaveReasonView("Summer 2023", leaveReason)}

          <SelectableTableElementClosedDivView>
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>
                Prefered Days:
              </SelectableTableLabelsView>
              <SelectableTableLabelsView>
                {prefDays["Summer 2023"].map((day: boolean, idx: number) => {
                  submitInfo.preferred_times.summer[
                    weekdays[weekdayArray[idx]]
                  ].preferredDay = day;
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
              return noTimesMessage;
            } else {
              return timesEnteredMessage;
            }
          })()}
          {Object.keys(timeSummer).map(function (Day, index) {
            let times = stringToTime(timeSummer[Day].times);
            submitInfo.preferred_times.summer[weekdays[Day]].times = [
              timeSummer[Day].times,
            ];

            console.log("SUBMIT");
            console.log(submitInfo);
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
            ProfPreferencesHelper.postPreferences(submitInfo);
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
