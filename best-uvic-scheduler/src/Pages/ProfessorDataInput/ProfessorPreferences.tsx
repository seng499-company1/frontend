import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PreferencesContext } from "./index.tsx";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  background-color: #fefefe;
`;

const OutsideDivStyle = styled.div`
  display: flex;
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

const Header = styled.h1`
    text-align: center;
  `;
  const Header2 = styled.h4`
    text-align: center;
    font-style: italic;
    padding-left: 100px;
    padding-right: 100px;
  `;

export function PDISelectProfessorPreferences() {
  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

  //hooks
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const navigate = useNavigate();

  const PreferenceItems = [
    { value: "Not Willing", label: "Not Willing" },
    { value: "Willing", label: "Willing" },
    { value: "Very Willing", label: "Very Willing" },
  ];

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
      <Header>Please Enter Class Preferences</Header>
      <Header2>
        *Be aware that classes that you have expressed you are not qualified
        to teach have been removed from the list
      </Header2>
        {Courses.map(function (Course, index) {
          let name = Course.course_code;
          return (
            <SelectDivStyle key={index}>
              <div>
                <h2> {Course.course_code} </h2>
                <p>
                  {" "}
                  <b>course description:</b> {Course.course_desceiption}{" "}
                </p>
              </div>
              <DropdownDivStyle>
                <Dropdown
                  startingValue={
                    preferences.hasOwnProperty(name)
                      ? { value: preferences[name], label: preferences[name] }
                      : null
                  }
                  dropdownItems={PreferenceItems}
                  handleChange={(event) => {
                    setPreferences({
                      ...preferences,
                      [Course.course_code]: event.value,
                    });
                  }}
                >
                  Select
                </Dropdown>
              </DropdownDivStyle>
            </SelectDivStyle>
          );
        })}
        <CustomButtonGroupView {...{ Amount: "Double" }}>
          <CustomButtonView
            {...{ Theme: "Secondary" }}
            customClickEvent={() => {
              console.log("Hello");
              navigate(`/SelectProfessor/Qualifications`);
            }}
          >
            {" "}
            Back{" "}
          </CustomButtonView>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            Disabled={Object.keys(preferences).length !== AmountOfCourses}
            customClickEvent={() => {
              if (Object.keys(preferences).length !== AmountOfCourses) {
                console.log(preferences);
              } else {
                console.log(preferences);
                navigate(`/SelectProfessor/Summary`);
              }
            }}
          >
            {" "}
            Confirm{" "}
          </CustomButtonView>
        </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default PDISelectProfessorPreferences;
