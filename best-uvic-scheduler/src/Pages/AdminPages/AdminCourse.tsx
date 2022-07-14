import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
import { CheckboxView } from "../../Components/checkbox/checkbox.tsx";
import { CustomButtonView } from "../../Components/button/button.tsx";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

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

  const Json = {
    course_code: "CSC111",
    course_name: "Fundamentals of Programming with Engineering Applications",
    min_offering: "number",
    spring_req: true,
    summer_req: false,
    fall_req: true,
    spring_peng_req: false,
    summer_peng_req: false,
    fall_peng_req: false,
    course_desc:
      '"Fundamentals of computer programming with real-world engineering examples using an imperative programming language. Topics include development, testing and debugging."',
    prof_prereq: "Knowledge of the C programming language",
    year_req: 3,
  };

  const EditCourseProps = {
    id: "d654c4f0-f7ea-11ec-85ed-0242ac130002",
    json: Json,
  };

  CourseListHelper.editCourse(EditCourseProps);

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

          const TimesOfferedArr = [];

          if (Course.fall_req === true) {
            TimesOfferedArr.push("Fall");
          }
          if (Course.spring_req === true) {
            TimesOfferedArr.push("Spring");
          }
          if (Course.summer_req === true) {
            TimesOfferedArr.push("Summer");
          }

          const TimesOffered = TimesOfferedArr.join("/");

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
                    <TextInputView {...{ DefaultValue: Course.course_code }} />
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
                <SelectableTableInputDiv>
                  <SelectableTableCheckboxDiv>
                    <CheckboxView
                      {...{
                        checked: Course.fall_req,
                      }}
                    >
                      X
                    </CheckboxView>
                    <p>Fall</p>
                  </SelectableTableCheckboxDiv>
                  <SelectableTableCheckboxDiv>
                    <CheckboxView
                      {...{
                        checked: Course.spring_req,
                      }}
                    >
                      X
                    </CheckboxView>
                    <p>Spring</p>
                  </SelectableTableCheckboxDiv>
                  <SelectableTableCheckboxDiv>
                    <CheckboxView
                      {...{
                        checked: Course.summer_req,
                      }}
                    >
                      X
                    </CheckboxView>
                    <p>Summer</p>
                  </SelectableTableCheckboxDiv>
                </SelectableTableInputDiv>
                <SelectableTableInputDiv>
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
                </SelectableTableInputDiv>
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
  );
}

export default AdminCoursePage;
