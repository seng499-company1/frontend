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
  padding-bottom: 25px;
`;

const DropdownDivStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  const { Professor, setProfessor } = useContext(ProfessorContext);
  const navigate = useNavigate();

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <h1 text-align="center">Summary</h1>

        <h2>Classes</h2>
        {Courses.map(function (Course, index) {
          let name = Course.course_code;
          return (
            <SelectDivStyle key={index}>
              <div>
                <h4 text-indent="50px">
                  {" "}
                  {console.log(Course.course_code)}
                  {Course.course_code}{" "}
                </h4>
                <p> </p>
              </div>

              <DropdownDivStyle>{preferences[name]}</DropdownDivStyle>
              <DropdownDivStyle>{qualifications[name]}</DropdownDivStyle>
            </SelectDivStyle>
          );
        })}

        <h2>Availibility</h2>
        <h4>Summer</h4>
        <h4>Fall</h4>
        <h4>Spring</h4>

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
