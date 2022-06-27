import React, { useState, useContext } from "react";
import styled from "styled-components";

import { QualificationsContext, PreferencesContext } from "./index.tsx";
import { ProfessorContext } from "./index.tsx";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import { Background } from "../../Components/background/background.tsx";
import { TimeIntervalHelper } from "../../Util/TimeIntervalHelper.tsx";

import * as ProfPreferencesHelper from "../../Util/ProfPreferencesHelper.tsx";

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

const WarningTextRow = styled.div`
  padding-top: 2px;
  box-shadow: 1px 1px;
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

export function Summary() {
  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

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
  const navigate = useNavigate();

  const weekdays = {
    mon: "Monday",
    tues: "Tuesday",
    wed: "Wednesday",
    thurs: "Thrusday",
    fri: "Friday",
  };

  const timeSummer = Times.summer;
  const timeSpring = Times.spring;
  const timeFall = Times.fall;

  return (
    <Background>
      <Header>
        Summary For {selectedProfessor.first_name} {selectedProfessor.last_name}
      </Header>

      <h2>Classes</h2>
      <TimeDiv>
        {Courses.map(function (Course, index) {
          let name = Course.course_code;

          return (
            <TimeRow>
              <DayText>
                {console.log(Course.course_code)}
                {Course.course_code}{" "}
              </DayText>

              <ResponseDiv>
                {qualifications[name]}
                &emsp;&emsp;
                {preferences[name]}
              </ResponseDiv>
            </TimeRow>
          );
        })}
      </TimeDiv>

      <h2>Availibility</h2>
      <Header4>Summer</Header4>

      {(() => {
        if (
          timeSummer.Monday.times.length === 0 &&
          timeSummer.Tuesday.times.length === 0 &&
          timeSummer.Wednesday.times.length === 0 &&
          timeSummer.Thursday.times.length === 0 &&
          timeSummer.Friday.times.length === 0
        ) {
          return (
            <TimeDiv>
              <WarningTextRow>
                <WarningText>No Times Entered For This Semester</WarningText>
              </WarningTextRow>
            </TimeDiv>
          );
        } else {
          return <div></div>;
        }
      })()}
      {Object.keys(timeSummer).map(function (Day, index) {
        const day = weekdays[Day];
        let times = stringToTime(timeSummer[Day].times);

        let loop = 0;
        return (
          <TimeDiv>
            {times.map(function (time, timeIndex) {
              return (
                <TimeRow>
                  <DayText> {day}</DayText>
                  <TimeText>
                    {" "}
                    {timeSplit[0].slice(1, -1)} - {timeSplit[1].slice(1, -1)}
                  </TimeText>
                </TimeRow>
              );
            })}
          </TimeDiv>
        );
      })}

      <Header4>Fall</Header4>

      {(() => {
        if (
          timeFall.Monday.times.length === 0 &&
          timeFall.Tuesday.times.length === 0 &&
          timeFall.Wednesday.times.length === 0 &&
          timeFall.Thursday.times.length === 0 &&
          timeFall.Friday.times.length === 0
        ) {
          return (
            <TimeDiv>
              <WarningTextRow>
                <WarningText>No Times Entered For This Semester</WarningText>
              </WarningTextRow>
            </TimeDiv>
          );
        } else {
          return <div></div>;
        }
      })()}
      {Object.keys(timeFall).map(function (Day, index) {
        const day = weekdays[Day];
        let times = stringToTime(timeFall[Day].times);

        return (
          <TimeDiv>
            {times.map(function (time, timeIndex) {
              const timeSplit = time.split(" ");

              return (
                <TimeRow>
                  <DayText> {Day}</DayText>
                  <TimeText>
                    {" "}
                    {timeSplit[0].slice(1, -1)} - {timeSplit[1].slice(1, -1)}
                  </TimeText>
                </TimeRow>
              );
            })}
          </TimeDiv>
        );
      })}
      <Header4>Spring</Header4>
      {(() => {
        if (
          timeSpring.Monday.times.length === 0 &&
          timeSpring.Tuesday.times.length === 0 &&
          timeSpring.Wednesday.times.length === 0 &&
          timeSpring.Thursday.times.length === 0 &&
          timeSpring.Friday.times.length === 0
        ) {
          return (
            <TimeDiv>
              <WarningTextRow>
                <WarningText>No Times Entered For This Semester</WarningText>
              </WarningTextRow>
            </TimeDiv>
          );
        } else {
          return <div></div>;
        }
      })()}
      {Object.keys(timeSpring).map(function (Day, index) {
        const day = weekdays[Day];
        let times = stringToTime(timeSpring[Day].times);

        return (
          <TimeDiv>
            {times.map(function (time, timeIndex) {
              const timeSplit = time.split(" ");

              return (
                <TimeRow>
                  <DayText> {day}</DayText>
                  <TimeText>
                    {" "}
                    {timeSplit[0].slice(1, -1)} - {timeSplit[1].slice(1, -1)}
                  </TimeText>
                </TimeRow>
              );
            })}
          </TimeDiv>
        );
      })}
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
        <CustomButtonView {...{ Theme: "Primary" }} customClickEvent={() => {
            navigate(`/`);
        }}>
          {" "}
          SUBMIT{" "}
        </CustomButtonView>
      </CustomButtonGroupView>
    </Background>
  );
}

export default Summary;
