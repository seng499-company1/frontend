import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Background } from "../../Components/background/background.tsx";
import Logo from "../../Images/uvic.png";
import Alert from "../../Components/Alert/alert.tsx";
import NavBar from "../../Components/navBar/navBar.tsx";
import * as CourseListHelper from "../../Util/CourseListHelper.tsx";
import {
  SelectableTableDivView,
  SelectableTableHeaderDivView,
  SelectableTableLabelDivView,
  SelectableTableLabelsView,
  SelectableTableIconElementDivView,
  SelectableTableElementClosedDivView,
  SelectableTableElementOpenedDivView,
  SelectableTableInputDiv,
  SelectableTableSingleInputDiv,
  SelectableTableCheckboxDiv,
} from "../../Components/SelectTable/SelectableTable.tsx";
import { TextInputView } from "../../Components/Input/input.tsx";
import Dropdown from "../../Components/dropdown/dropdown.tsx";
import { CheckboxView } from "../../Components/checkbox/checkbox.tsx";
import { CustomButtonView } from "../../Components/button/button.tsx";
import {
  CustomButtonGroupView,
  ButtonDiv,
} from "../../Components/button/buttongroup.tsx";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { HeaderView } from "../../Components/Header/header.tsx";

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  padding-left: 0px;
  padding-right: 0px;
  grid-column: 2 / 3;
  grid-row: 1;
`;

const LogoDiv = styled.div`
  padding-left: 48px;
  padding-right: 0px;
  grid-column: 1 / 3;
  grid-row: 1;
`;

const TableDiv = styled.div`
  padding-top: 48px;
`;

export function AdminCoursePage() {
  const [Courses, setCourses] = useState([]);
  const [AmountOfCourses, setAmmount] = useState(0);
  const [OpenedCourse, setOpenCourse] = useState(0);
  const [FallNeeded, setFallNeeded] = useState(false);
  const [SpringNeeded, setSpringNeeded] = useState(false);
  const [SummerNeeded, setSummerNeeded] = useState(false);

  //get data
  useEffect(() => {
    console.log("Inside useEffect");
    CourseListHelper.GetCourseList()
      .then((resp) => {
        setCourses(resp);
      })
      .then((resp) => {
        setAmmount(resp.length());
      });
  }, []);

  const Departments = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Software Engineering", label: "Software Engineering" },
  ];

  //Need to dynamically create Prerequisites :)
  const Prerequisites = [
    { value: "CSC 110", label: "CSC 110" },
    { value: "CSC 230", label: "CSC 230" },
    { value: "CSC 250", label: "CSC 250" },
  ];

  const handleChange = (event) => {};

  return (
    <Background>
      <HeaderView />

      <TableDiv>
        <SelectableTableDivView columns={4}>
          <SelectableTableHeaderDivView>
            <SelectableTableIconElementDivView />
            <SelectableTableLabelDivView>
              <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
              <SelectableTableLabelsView>Course Name</SelectableTableLabelsView>
              <SelectableTableLabelsView>
                Terms Available
              </SelectableTableLabelsView>
            </SelectableTableLabelDivView>
          </SelectableTableHeaderDivView>
          {Courses.map(function (Course, index) {
            let name = Course.course_code;

            let TimesOffered = "";

            if (Course.fall_req === true) {
              TimesOffered += "Fall";
            }
            if (Course.spring_req === true) {
              TimesOffered += "/Spring";
            }
            if (Course.summer_req === true) {
              TimesOffered += "/Summer";
            }

            if (OpenedCourse === Course) {
              return (
                <SelectableTableElementOpenedDivView {...{ Type: 1 }}>
                  <SelectableTableIconElementDivView>
                    <BiCaretUp
                      style={{ height: 16, width: 16 }}
                      onClick={() => {
                        setOpenCourse(0);
                      }}
                    />
                  </SelectableTableIconElementDivView>
                  <SelectableTableInputDiv>
                    <SelectableTableSingleInputDiv>
                      <p> Course ID </p>
                      <TextInputView
                        {...{ DefaultValue: Course.course_code }}
                      />
                    </SelectableTableSingleInputDiv>
                    <SelectableTableSingleInputDiv style={{ width: 300 }}>
                      <p> Course Name </p>
                      <TextInputView
                        {...{
                          DefaultValue: Course.course_name,
                        }}
                      />
                    </SelectableTableSingleInputDiv>
                  </SelectableTableInputDiv>
                  <SelectableTableInputDiv
                    style={{
                      paddingLeft: 32,
                      justifyContent: "start",
                    }}
                  >
                    <SelectableTableCheckboxDiv>
                      <CheckboxView
                        {...{
                          checked: Course.fall_req,
                        }}
                      >
                        X
                      </CheckboxView>
                      <p
                        style={{
                          paddingLeft: 8,
                          paddingRight: 12,
                          paddingTop: 4,
                        }}
                      >
                        Fall
                      </p>
                    </SelectableTableCheckboxDiv>
                    <SelectableTableCheckboxDiv>
                      <CheckboxView
                        {...{
                          checked: Course.spring_req,
                        }}
                      >
                        X
                      </CheckboxView>
                      <p
                        style={{
                          paddingLeft: 8,
                          paddingRight: 12,
                          paddingTop: 4,
                        }}
                      >
                        Spring
                      </p>
                    </SelectableTableCheckboxDiv>
                    <SelectableTableCheckboxDiv>
                      <CheckboxView
                        {...{
                          checked: Course.summer_req,
                        }}
                      >
                        X
                      </CheckboxView>
                      <p
                        style={{
                          paddingLeft: 8,
                          paddingRight: 12,
                          paddingTop: 4,
                        }}
                      >
                        Summer
                      </p>
                    </SelectableTableCheckboxDiv>
                  </SelectableTableInputDiv>
                  <CustomButtonGroupView {...{ Amount: "Progession" }}>
                    <ButtonDiv>
                      <CustomButtonView
                        {...{ Theme: "Secondary" }}
                        customClickEvent={() => {
                          setOpenCourse(0);
                        }}
                      >
                        Cancel
                      </CustomButtonView>
                      <CustomButtonView
                        {...{ Theme: "Primary" }}
                        customClickEvent={() => {
                          CourseData[index] = Course;
                          setOpenCourse(0);
                        }}
                      >
                        Save
                      </CustomButtonView>
                    </ButtonDiv>
                  </CustomButtonGroupView>
                </SelectableTableElementOpenedDivView>
              );
            } else {
              return (
                <SelectableTableElementClosedDivView>
                  <SelectableTableIconElementDivView>
                    <BiCaretDown
                      style={{ height: 16, width: 16 }}
                      onClick={() => {
                        setOpenCourse(Course);
                      }}
                    />
                  </SelectableTableIconElementDivView>
                  <SelectableTableLabelDivView>
                    <SelectableTableLabelsView>
                      {Course.course_code}
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView>
                      {Course.course_name}
                    </SelectableTableLabelsView>
                    <SelectableTableLabelsView>
                      {TimesOffered}
                    </SelectableTableLabelsView>
                  </SelectableTableLabelDivView>
                </SelectableTableElementClosedDivView>
              );
            }
          })}
        </SelectableTableDivView>
      </TableDiv>
    </Background>
  );
}

export default AdminCoursePage;
