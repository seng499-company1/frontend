import React, { useContext } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import * as ProfPreferencesHelper from "../../Util/ProfPreferencesHelper.tsx";
import { ProfessorNameContext } from "./LandingPage.tsx";
import { Background } from "../../Components/background/background.tsx";

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
  const Courses = Preferences.course_preferences;
  const Times = Preferences.preferred_times;

  //   //hooks
  const { selectedProfessorName } = useContext(ProfessorNameContext);
  const navigate = useNavigate();

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
      <Header>Summary For {selectedProfessorName}</Header>

      <h2>Classes</h2>
      <TimeDiv>
        {Courses.map(function (Course) {
          let courseList = CourseListHelper.GetCourseList().Courses;
          const willing = avail[Course.will_to_teach];
          const qualified = avail[Course.able_to_teach];

          const indexCourseList = courseList.findIndex(
            (x) => x.uuid === Course.course_id
          );

          return (
            <TimeRow>
              <DayText>
                {console.log(Course.course_code)}
                {courseList[indexCourseList].course_code}{" "}
              </DayText>

              <ResponseDiv>
                {willing}
                &emsp;&emsp;
                {qualified}
              </ResponseDiv>
            </TimeRow>
          );
        })}
      </TimeDiv>
      <Space></Space>
      <CustomButtonGroupView {...{ Amount: "Progession" }}>
        <CustomButtonView {...{ Theme: "Primary" }} customClickEvent={() => {}}>
          {" "}
          EDIT{" "}
        </CustomButtonView>
      </CustomButtonGroupView>

      <h2>Availibility</h2>

      <Header4>Summer</Header4>

      {Object.keys(timeSummer).map(function (Day) {
        const day = weekdays[Day];
        let times = stringToTime(timeSummer[Day].times);

        return (
          <TimeDiv>
            {times.map(function (time) {
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

      <Header4>Fall</Header4>
      {Object.keys(timeFall).map(function (Day) {
        const day = weekdays[Day];
        let times = stringToTime(timeFall[Day].times);

        return (
          <TimeDiv>
            {times.map(function (time) {
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
      <Header4>Spring</Header4>
      {Object.keys(timeSpring).map(function (Day) {
        const day = weekdays[Day];
        let times = stringToTime(timeSpring[Day].times);

        return (
          <TimeDiv>
            {times.map(function (time) {
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
