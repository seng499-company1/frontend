import React, { useState, useContext } from "react";
import styled from "styled-components";

import {
  QualificationsContext,
  ProfessorContext,
  PreferencesContext,
} from "./index.tsx";

import { useNavigate } from "react-router-dom";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  height: 100vh;
  min-height: 100vh;
  background-color: #fefefe;
`;

const OutsideDivStyle = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  justify-content: center;
  background-color: var(--primary-50);
  height: 100vh;
`;

const SelectDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0px;
  padding-right: 100px;
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

export function Summary() {
  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

  //hooks
  const { qualifications, setQualifications } = useContext(
    QualificationsContext
  );
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const navigate = useNavigate();

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <Header>Summary For {selectedProfessor.first_name} {selectedProfessor.last_name}</Header>

        <h2>Classes</h2>
        {Courses.map(function (Course, index) {
          let name = Course.course_code;
          return (
            <SelectDivStyle key={index}>
              <Header4>
                {console.log(Course.course_code)}
                {Course.course_code}{" "}
              </Header4>

              <ResponseDiv>
                {qualifications[name]}
                &emsp;&emsp;
                {preferences[name]}
              </ResponseDiv>
            </SelectDivStyle>
          );
        })}

        <h2>Availibility</h2>
        <Header4>Summer</Header4>
        <Header4>Fall</Header4>
        <Header4>Spring</Header4>

        <CustomButtonGroupView {...{ Amount: "Double" }}>
          <CustomButtonView
            {...{ Theme: "Secondary" }}
            customClickEvent={() => {
              navigate(`/SelectProfessor/Preferences`);
            }}
          >
            {" "}
            Back{" "}
          </CustomButtonView>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            customClickEvent={() => {}}
          >
            {" "}
            SUBMIT{" "}
          </CustomButtonView>
        </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default Summary;
