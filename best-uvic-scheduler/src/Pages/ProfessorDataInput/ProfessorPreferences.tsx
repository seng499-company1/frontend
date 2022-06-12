import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  background-color: #FEFEFE;
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

export function PDISelectProfessorPreferences() {

  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

  //hooks
  const [preferences, setPreferences] = useState({});
  const navigate = useNavigate();

  const PreferenceItems = [
    { value: "Not Willing", label: "Not Willing" },
    { value: "Willing", label: "Willing" },
    { value: "Very Willing", label: "Very Willing" },
  ];

  return (
    <OutsideDivStyle>
      <InsideDivStyle>
      {
      Courses.map(function(Course, index) {
        return (
          <SelectDivStyle key={index}>
            <div>
              <h2> { Course.course_code } </h2>
              <p> <b>course description:</b> { Course.course_desceiption } </p>
            </div>
            <DropdownDivStyle>
              <Dropdown
                dropdownItems= {PreferenceItems}
                handleChange={(event) => {
                  setPreferences( {...preferences, [Course.course_code]: event.value } );
                }}>Select</Dropdown>
            </DropdownDivStyle>
          </SelectDivStyle>
        );
      })
      }
      <CustomButtonGroupView {...{ Amount: "Double" }}>
        <CustomButtonView
        {...{ Theme: "Secondary" }}
        customClickEvent={() => {
          console.log("Hello")
          navigate(`/SelectProfessor/Qualifications`);
        }}> Back </CustomButtonView>
        <CustomButtonView
        {...{ Theme: "Primary" }}
        Disabled={Object.keys(preferences).length !== AmountOfCourses}
        customClickEvent={() => {
          if(Object.keys(preferences).length !== AmountOfCourses){
            console.log(preferences);
          }else{
            console.log(preferences);
          }
        }}> Confirm </CustomButtonView>
      </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
    );
}

export default PDISelectProfessorPreferences;
