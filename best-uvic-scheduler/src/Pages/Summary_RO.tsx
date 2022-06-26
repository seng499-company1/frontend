import React, { useState, useContext } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../Components/button/button.tsx";
import CustomButtonGroupView from "../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../Util/CourseListHelper.tsx";
import * as ProfPreferencesHelper from "../Util/ProfPreferencesHelper.tsx";
import { ProfessorNameContext } from "./LandingPage.tsx";
import { Background } from "../Components/background/background.tsx";
import LandingPage from "./LandingPage";
import { array, number } from "prop-types";
import { isConstructorDeclaration } from "typescript";

const SelectDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0px;
  padding-right: 100px;
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
const TimeList = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const TimeDiv = styled.div`
  text-align: left;
  padding-left: 64px;
  background-color: var(--grey-50);
`;

function stringToTime(times: string) {
  var arrayTime: string[] = [];
  arrayTime = times.toString().split("(");
  arrayTime.shift();
  arrayTime.forEach((times, index) => {
    times = times.trim().slice(0, -1);
    arrayTime[index] = times;
    console.log(times);
  });

  return;
}

export function Summary_RO() {
  //get data, call get professor entry endpoint using professor uuid
  const Preferences = ProfPreferencesHelper.GetPreferences();
  const Courses = Preferences.course_preferences;
  const Times = Preferences.preferred_times;

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
  //process time data

  const timeSummer = Times.summer;
  //   stringToTime(timesMon);
  //   const timesTues = Times.summer.tues.times;
  //   const timesWed = Times.summer.wed.times;
  //   const timesThurs = Times.summer.thurs.times;
  //   const timesFri = Times.summer.fri.times;

  return (
    <Background>
      <Header>Summary For {selectedProfessorName}</Header>

      <h2>Classes</h2>
      {Courses.map(function (Course, index) {
        let name = Course.course_code;
        return (
          <SelectDivStyle key={index}>
            <Header4>
              {console.log(Course.course_code)}
              {Course.course_id}{" "}
            </Header4>

            <ResponseDiv>
              {Course.will_to_teach}
              &emsp;&emsp;
              {Course.able_to_teach}
            </ResponseDiv>
          </SelectDivStyle>
        );
      })}

      <CustomButtonGroupView {...{ Amount: "Double" }}>
        <CustomButtonView {...{ Theme: "Primary" }} customClickEvent={() => {}}>
          {" "}
          EDIT{" "}
        </CustomButtonView>
      </CustomButtonGroupView>

      <h2>Availibility</h2>
      <TimeList>
        {Object.keys(timeSummer).map(function (Day, index) {
          const day = weekdays[Day];

          return <TimeDiv>{day}</TimeDiv>;
        })}
      </TimeList>

      <Header4>Summer</Header4>

      <TimeList>
        <TimeDiv>Monday {Times.summer.mon.times}</TimeDiv>

        <TimeDiv>Tuesday {Times.summer.tues.times}</TimeDiv>
        <TimeDiv>Wednesday {Times.summer.wed.times}</TimeDiv>
        <TimeDiv>Thursday {Times.summer.thurs.times}</TimeDiv>
        <TimeDiv>Friday {Times.summer.fri.times}</TimeDiv>
      </TimeList>

      <Header4>Fall</Header4>
      <Header4>Spring</Header4>

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
