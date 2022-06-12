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

export function PDISelectProfessorQualifications() {

  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

  //hooks
  const [qualifications, setQualifications] = useState({});
  const navigate = useNavigate();

  const QualificationItems = [
    { value: "Not Qualified", label: "Not Qualified" },
    { value: "Qualified", label: "Qualified" },
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
              <p> <b>qualifications needed:</b> { Course.course_qualifications }<b>{ Course.peng_req ? ", PENG is Reqiured" : "" }</b> </p>
            </div>
            <DropdownDivStyle>
              <Dropdown
                dropdownItems= {QualificationItems}
                handleChange={(event) => {
                  setQualifications( {...qualifications, [Course.course_code]: event.value } );
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
          navigate(`/SelectProfessor`);
        }}> Back </CustomButtonView>
        <CustomButtonView
        {...{ Theme: "Primary" }}
        Disabled={Object.keys(qualifications).length !== AmountOfCourses}
        customClickEvent={() => {
          if(Object.keys(qualifications).length !== AmountOfCourses){
            console.log(qualifications);
          }else{
            console.log(qualifications);
          }
        }}> Confirm </CustomButtonView>
      </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
    );
}

export default PDISelectProfessorQualifications;
