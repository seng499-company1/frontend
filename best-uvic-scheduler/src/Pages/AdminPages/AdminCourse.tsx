import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { CustomButtonGroupView } from "../../Components/button/buttongroup.tsx";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { type } from "os";
import { editCourse } from "../../Util/CourseListHelper";
import { OperationCanceledException } from "typescript";

const TableDiv = styled.div`
  padding-top: 48px;
`;

const OpenEditablePartDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 3;
`;

export function AdminCoursePage() {
  const [Courses, setCourses] = useState([]);
  const [OpenedCourse, setOpenCourse] = useState(0);
  const [RemovedCourse, setRemovedCourse] = useState(0);
  const [DisplayedName, setDisplayedName] = useState(0);
  const [DisplayedCode, setDisplayedCode] = useState(0);
  const [FallNeeded, setFallNeeded] = useState(false);
  const [SpringNeeded, setSpringNeeded] = useState(false);
  const [SummerNeeded, setSummerNeeded] = useState(false);

  const navigate = useNavigate();
  //get data
  useEffect(() => {
    CourseListHelper.GetCourseList().then((resp) => {
      setCourses(resp);
    });
  }, []);

  useEffect(() => {
    if (OpenedCourse !== 0) {
      setDisplayedName(OpenedCourse.course_name);
      setDisplayedCode(OpenedCourse.course_code);
    }
  }, [OpenedCourse]);

  useEffect(() => {
    if (OpenedCourse !== 0) {
      setFallNeeded(OpenedCourse.fall_req);
      setSpringNeeded(OpenedCourse.spring_req);
      setSummerNeeded(OpenedCourse.summer_req);
    }
  }, [OpenedCourse]);

  function SendEditedToBackend() {
    const ID = OpenedCourse.id;
    let Peng_needed = false;

    if (
      OpenedCourse.spring_peng_req === true ||
      OpenedCourse.summer_peng_req === true ||
      OpenedCourse.fall_peng_req === true
    ) {
      Peng_needed = true;
    }

    console.log(OpenedCourse);

    let New_value = {
      course_code: DisplayedCode,
      course_name: DisplayedName,
      min_offering: 1,
      spring_req: SpringNeeded,
      summer_req: SummerNeeded,
      fall_req: FallNeeded,
      spring_peng_req: SpringNeeded && Peng_needed,
      summer_peng_req: SummerNeeded && Peng_needed,
      fall_peng_req: FallNeeded && Peng_needed,
      course_desc: "",
      prof_prereq: OpenedCourse.prof_prereq,
      year_req: OpenedCourse.year_req,
      notes: "",
    };
    CourseListHelper.editCourse({ id: ID, json: New_value });

    console.log(New_value);
    setOpenCourse(0);
  }

  function DeleteCourse(index) {
    const deleted = Courses.splice(index, 1);
    CourseListHelper.deleteCourse(deleted[0].id);
  }

  return (
    <TableDiv>
      <CustomButtonGroupView {...{ Amount: "Progession" }}>
        <CustomButtonView
          {...{ Theme: "Primary" }}
          customClickEvent={() => {
            navigate(`/Admin/Newcourse`);
          }}
        >
          Add New Course
        </CustomButtonView>
      </CustomButtonGroupView>
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
                <OpenEditablePartDiv>
                  <SelectableTableInputDiv>
                    <SelectableTableSingleInputDiv>
                      <p> Course ID </p>
                      <TextInputView
                        DefaultValue={DisplayedCode}
                        onChange={(event) => {
                          setDisplayedCode(event.target.value);
                        }}
                      />
                    </SelectableTableSingleInputDiv>
                    <SelectableTableSingleInputDiv style={{ width: 300 }}>
                      <p> Course Name </p>
                      <TextInputView
                        DefaultValue={DisplayedName}
                        onChange={(event) => {
                          setDisplayedName(event.target.value);
                        }}
                      />
                    </SelectableTableSingleInputDiv>
                  </SelectableTableInputDiv>
                  <SelectableTableInputDiv>
                    <SelectableTableCheckboxDiv>
                      <CheckboxView
                        checked={FallNeeded}
                        setChecked={() => {
                          setFallNeeded(!FallNeeded);
                        }}
                      >
                        X
                      </CheckboxView>
                      <p>Fall</p>
                    </SelectableTableCheckboxDiv>
                    <SelectableTableCheckboxDiv>
                      <CheckboxView
                        checked={SpringNeeded}
                        setChecked={() => {
                          setSpringNeeded(!SpringNeeded);
                        }}
                      >
                        X
                      </CheckboxView>
                      <p>Spring</p>
                    </SelectableTableCheckboxDiv>
                    <SelectableTableCheckboxDiv>
                      <CheckboxView
                        checked={SummerNeeded}
                        setChecked={() => {
                          setSummerNeeded(!SummerNeeded);
                        }}
                      >
                        X
                      </CheckboxView>
                      <p>Summer</p>
                    </SelectableTableCheckboxDiv>
                  </SelectableTableInputDiv>
                  <CustomButtonGroupView {...{ Amount: "Progession" }}>
                    <CustomButtonView
                      {...{ Theme: "Cancel" }}
                      customClickEvent={() => {
                        DeleteCourse(index);
                      }}
                    >
                      Delete
                    </CustomButtonView>
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
                        SendEditedToBackend();
                      }}
                    >
                      Save
                    </CustomButtonView>
                  </CustomButtonGroupView>
                </OpenEditablePartDiv>
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
