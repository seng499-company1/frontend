import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { QualificationsContext } from "./index.tsx";
import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";
import Background from "../../Components/background/background.tsx";

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

export function PDISelectProfessorQualifications() {
  //get data
  const CourseData = CourseListHelper.GetCourseList();
  const Courses = CourseData.Courses;
  const AmountOfCourses = Courses.length;

  //hooks
  const { qualifications, setQualifications } = useContext(
    QualificationsContext
  );
  const navigate = useNavigate();

  const QualificationItems = [
    { value: "Not Qualified", label: "Not Qualified" },
    { value: "Qualified", label: "Qualified" },
  ];

  return (
    <Background>
      <Header>Please Enter Class Qualifications </Header>
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
              <p>
                {" "}
                <b>qualifications needed:</b> {Course.course_qualifications}
                <b>{Course.peng_req ? ", PENG is Reqiured" : ""}</b>{" "}
              </p>
            </div>
            <DropdownDivStyle>
              <Dropdown
                startingValue={
                  qualifications.hasOwnProperty(name)
                    ? {
                        value: qualifications[name],
                        label: qualifications[name],
                      }
                    : null
                }
                dropdownItems={QualificationItems}
                handleChange={(event) => {
                  setQualifications({
                    ...qualifications,
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
            navigate(`/SelectProfessor`);
          }}
        >
          {" "}
          Back{" "}
        </CustomButtonView>
        <CustomButtonView
          {...{ Theme: "Primary" }}
          Disabled={Object.keys(qualifications).length !== AmountOfCourses}
          customClickEvent={() => {
            if (Object.keys(qualifications).length !== AmountOfCourses) {
              console.log(qualifications);
            } else {
              console.log(qualifications);
              navigate(`/SelectProfessor/Preferences`);
            }
          }}
        >
          {" "}
          Confirm{" "}
        </CustomButtonView>
      </CustomButtonGroupView>
    </Background>
  );
}

export default PDISelectProfessorQualifications;
