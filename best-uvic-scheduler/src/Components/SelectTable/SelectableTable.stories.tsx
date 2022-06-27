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
  SelectableTableCheckboxDiv
} from "./SelectableTable";
import { TextInputView } from "../Input/input.tsx";
import Dropdown from "../dropdown/dropdown";
import { CheckboxView } from "../checkbox/checkbox";
import { CustomButtonView } from "../button/button";
import { CustomButtonGroupView, ButtonDiv } from "../button/buttongroup";
import { BiCaretDown,
         BiCaretUp
} from "react-icons/bi";

export default {
  title: "Components/SelectableTable",
  component: SelectableTableDivView,
  subcomponents: { SelectableTableHeaderDivView, SelectableTableLabelDivView, SelectableTableLabelsView, SelectableTableIconElementDivView, SelectableTableElementClosedDivView },
};

export const SelectableTableEmptyThreeLabels = () => {
  return (
    <SelectableTableDivView>
    <SelectableTableHeaderDivView>
    <SelectableTableIconElementDivView>
    </SelectableTableIconElementDivView>
    <SelectableTableLabelsView>First Name</SelectableTableLabelsView>
    <SelectableTableLabelsView>Second Name</SelectableTableLabelsView>
    <SelectableTableLabelsView>Department</SelectableTableLabelsView>
    </SelectableTableHeaderDivView>
    </SelectableTableDivView>
  )
};

export const SelectableTableThreeLabels = () => {
  return (
    <SelectableTableDivView>
      <SelectableTableHeaderDivView>
        <SelectableTableIconElementDivView>
        </SelectableTableIconElementDivView>
        <SelectableTableLabelDivView>
        <SelectableTableLabelsView>First Name</SelectableTableLabelsView>
        <SelectableTableLabelsView>Second Name</SelectableTableLabelsView>
        <SelectableTableLabelsView>Department</SelectableTableLabelsView>
        </SelectableTableLabelDivView>
      </SelectableTableHeaderDivView>
      <SelectableTableElementOpenedDivView {...{ Type: 0 }}>
        <SelectableTableIconElementDivView>
          <BiCaretUp style={{ height: 30, width: 30 }}/>
          </SelectableTableIconElementDivView>
          <SelectableTableInputDiv>
            <SelectableTableSingleInputDiv>
              <p> First Name </p>
              <TextInputView {...{ placeholder: "Bill" }}/>
            </SelectableTableSingleInputDiv>
            <SelectableTableSingleInputDiv>
              <p> Last Name </p>
              <TextInputView {...{ placeholder: "Burr" }}/>
            </SelectableTableSingleInputDiv>
            <SelectableTableSingleInputDiv>
              <p> Department </p>
              <TextInputView {...{ placeholder: "CSC" }}/>
            </SelectableTableSingleInputDiv>
          </SelectableTableInputDiv>
          <CustomButtonGroupView {...{ Amount: "Progession" }}>
            <ButtonDiv>
              <CustomButtonView {...{ Theme: "Secondary" }}>Cancel</CustomButtonView>
              <CustomButtonView {...{ Theme: "Primary" }}>Save</CustomButtonView>
            </ButtonDiv>
          </CustomButtonGroupView>
      </SelectableTableElementOpenedDivView>
      <SelectableTableElementClosedDivView>
        <SelectableTableIconElementDivView>
          <BiCaretDown style={{ height: 30, width: 30 }}/>
        </SelectableTableIconElementDivView>
        <SelectableTableLabelDivView>
          <SelectableTableLabelsView>John</SelectableTableLabelsView>
          <SelectableTableLabelsView>Doe</SelectableTableLabelsView>
          <SelectableTableLabelsView>Engineering</SelectableTableLabelsView>
          </SelectableTableLabelDivView>
      </SelectableTableElementClosedDivView>
    </SelectableTableDivView>
  )
};

export const SelectableTableEmptyFourLabels = () => {
  return (
    <SelectableTableDivView>
    <SelectableTableHeaderDivView>
    <SelectableTableIconElementDivView>
    </SelectableTableIconElementDivView>
    <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
    <SelectableTableLabelsView>Course Name</SelectableTableLabelsView>
    <SelectableTableLabelsView>Faculty</SelectableTableLabelsView>
    <SelectableTableLabelsView>Terms Available</SelectableTableLabelsView>
    </SelectableTableHeaderDivView>
    </SelectableTableDivView>
  )
};

export const SelectableTableFourLabels = () => {

  const Departments = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Engineering", label: "Engineering" },
  ];

  const Prerequisites = [
    { value: "CSC 110", label: "CSC 110" },
    { value: "CSC 230", label: "CSC 230" },
    { value: "CSC 250", label: "CSC 250" },
  ];

  const handleChange = (event) => {};

  return (
    <SelectableTableDivView>
    <SelectableTableHeaderDivView>
    <SelectableTableIconElementDivView>
    </SelectableTableIconElementDivView>
    <SelectableTableLabelsView>Course ID</SelectableTableLabelsView>
    <SelectableTableLabelsView>Course Name</SelectableTableLabelsView>
    <SelectableTableLabelsView>Faculty</SelectableTableLabelsView>
    <SelectableTableLabelsView>Terms Available</SelectableTableLabelsView>
    </SelectableTableHeaderDivView>
    <SelectableTableElementClosedDivView>
      <SelectableTableIconElementDivView>
        <BiCaretDown style={{ height: 30, width: 30 }}/>
      </SelectableTableIconElementDivView>
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>CSC 110</SelectableTableLabelsView>
        <SelectableTableLabelsView>Fundamentals of Programming: I</SelectableTableLabelsView>
        <SelectableTableLabelsView>Computer Science</SelectableTableLabelsView>
        <SelectableTableLabelsView>Fall/Spring/Summer</SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    </SelectableTableElementClosedDivView>
    <SelectableTableElementOpenedDivView {...{ Type: 1 }} >
      <SelectableTableIconElementDivView>
        <BiCaretUp style={{ height: 30, width: 30 }}/>
        </SelectableTableIconElementDivView>
        <SelectableTableInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Course ID </p>
            <TextInputView {...{ placeholder: "Course Code" }}/>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Course Name </p>
            <TextInputView {...{ placeholder: "Course Name Goes Here" }}/>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Faculty </p>
            <Dropdown {...{ dropdownItems: Departments, handleChange: handleChange }}>
              Select From List
            </Dropdown>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Required By </p>
            <Dropdown {...{ dropdownItems: Departments, handleChange: handleChange }}>
              Select From List
            </Dropdown>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Prerequisite </p>
            <Dropdown {...{ dropdownItems: Prerequisites, handleChange: handleChange }}>
              Select From List
            </Dropdown>
          </SelectableTableSingleInputDiv>
        </SelectableTableInputDiv>
        <SelectableTableInputDiv style={{
          paddingLeft: 32,
          justifyContent: "start",
        }}>
          <SelectableTableCheckboxDiv>
            <CheckboxView {...{ checked: true, setChecked: () => console.log("clicked") }}>
              X
              </CheckboxView>
              <p style={{
                paddingLeft: 8,
                paddingRight: 12,
                paddingTop: 4
              }}>Fall</p>
          </SelectableTableCheckboxDiv>
          <SelectableTableCheckboxDiv>
          <CheckboxView {...{ checked: true, setChecked: () => console.log("clicked") }}>
            X
          </CheckboxView>
          <p style={{
            paddingLeft: 8,
            paddingRight: 12,
            paddingTop: 4
          }}>Spring</p>
          </SelectableTableCheckboxDiv>
          <SelectableTableCheckboxDiv>
          <CheckboxView {...{ checked: true, setChecked: () => console.log("clicked") }}>
            X
          </CheckboxView>
          <p style={{
            paddingLeft: 8,
            paddingRight: 12,
            paddingTop: 4
          }}>Summer</p>
          </SelectableTableCheckboxDiv>
        </SelectableTableInputDiv>
        <CustomButtonGroupView {...{ Amount: "Progession" }}>
          <ButtonDiv>
            <CustomButtonView {...{ Theme: "Cancel" }}>Delete</CustomButtonView>
            <CustomButtonView {...{ Theme: "Secondary" }}>Cancel</CustomButtonView>
            <CustomButtonView {...{ Theme: "Primary" }}>Save</CustomButtonView>
          </ButtonDiv>
        </CustomButtonGroupView>
    </SelectableTableElementOpenedDivView>
    <SelectableTableElementClosedDivView>
      <SelectableTableIconElementDivView>
        <BiCaretDown style={{ height: 30, width: 30 }}/>
      </SelectableTableIconElementDivView>
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>CSC 230</SelectableTableLabelsView>
        <SelectableTableLabelsView>Introduction to Computer Architecture</SelectableTableLabelsView>
        <SelectableTableLabelsView>Computer Science</SelectableTableLabelsView>
        <SelectableTableLabelsView>Fall/Spring</SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    </SelectableTableElementClosedDivView>
    </SelectableTableDivView>
  )
};

export const ClosedElementInListProfessor = () => {
  return (
    <SelectableTableElementClosedDivView>
      <SelectableTableIconElementDivView>
        <BiCaretDown style={{ height: 30, width: 30 }}/>
      </SelectableTableIconElementDivView>
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>Bill</SelectableTableLabelsView>
        <SelectableTableLabelsView>Burr</SelectableTableLabelsView>
        <SelectableTableLabelsView>CSC</SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    </SelectableTableElementClosedDivView>
  )
};

export const OpenElementInListProfessor = () => {
  return (
    <SelectableTableElementOpenedDivView {...{ Type: 0 }}>
      <SelectableTableIconElementDivView>
        <BiCaretUp style={{ height: 30, width: 30 }}/>
        </SelectableTableIconElementDivView>
        <SelectableTableInputDiv>
          <SelectableTableSingleInputDiv>
            <p> First Name </p>
            <TextInputView {...{ placeholder: "Bill" }}/>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Last Name </p>
            <TextInputView {...{ placeholder: "Burr" }}/>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Department </p>
            <TextInputView {...{ placeholder: "CSC" }}/>
          </SelectableTableSingleInputDiv>
        </SelectableTableInputDiv>
        <CustomButtonGroupView {...{ Amount: "Progession" }}>
          <ButtonDiv>
            <CustomButtonView {...{ Theme: "Secondary" }}>Cancel</CustomButtonView>
            <CustomButtonView {...{ Theme: "Primary" }}>Save</CustomButtonView>
          </ButtonDiv>
        </CustomButtonGroupView>
    </SelectableTableElementOpenedDivView>
  )
};

export const ClosedElementInListCourse = () => {
  return (
    <SelectableTableElementClosedDivView>
      <SelectableTableIconElementDivView>
        <BiCaretDown style={{ height: 30, width: 30 }}/>
      </SelectableTableIconElementDivView>
      <SelectableTableLabelDivView>
        <SelectableTableLabelsView>CSC 110</SelectableTableLabelsView>
        <SelectableTableLabelsView>Fundamentals of Programming: I</SelectableTableLabelsView>
        <SelectableTableLabelsView>Computer Science</SelectableTableLabelsView>
        <SelectableTableLabelsView>Fall/Spring/Summer</SelectableTableLabelsView>
      </SelectableTableLabelDivView>
    </SelectableTableElementClosedDivView>
  )
};

export const OpenElementInListCourse = () => {

  const Departments = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "Engineering", label: "Engineering" },
  ];

  const Prerequisites = [
    { value: "CSC 110", label: "CSC 110" },
    { value: "CSC 230", label: "CSC 230" },
    { value: "CSC 250", label: "CSC 250" },
  ];

  const handleChange = (event) => {};

  return (
    <SelectableTableElementOpenedDivView {...{ Type: 1 }} >
      <SelectableTableIconElementDivView>
        <BiCaretUp style={{ height: 30, width: 30 }}/>
        </SelectableTableIconElementDivView>
        <SelectableTableInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Course ID </p>
            <TextInputView {...{ placeholder: "Course Code" }}/>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Course Name </p>
            <TextInputView {...{ placeholder: "Course Name Goes Here" }}/>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Faculty </p>
            <Dropdown {...{ dropdownItems: Departments, handleChange: handleChange }}>
              Select From List
            </Dropdown>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Required By </p>
            <Dropdown {...{ dropdownItems: Departments, handleChange: handleChange }}>
              Select From List
            </Dropdown>
          </SelectableTableSingleInputDiv>
          <SelectableTableSingleInputDiv>
            <p> Prerequisite </p>
            <Dropdown {...{ dropdownItems: Prerequisites, handleChange: handleChange }}>
              Select From List
            </Dropdown>
          </SelectableTableSingleInputDiv>
        </SelectableTableInputDiv>
        <SelectableTableInputDiv style={{
          paddingLeft: 32,
          justifyContent: "start",
        }}>
          <SelectableTableCheckboxDiv>
            <CheckboxView {...{ checked: true, setChecked: () => console.log("clicked") }}>
              X
              </CheckboxView>
              <p style={{
                paddingLeft: 8,
                paddingRight: 12,
                paddingTop: 4
              }}>Fall</p>
          </SelectableTableCheckboxDiv>
          <SelectableTableCheckboxDiv>
          <CheckboxView {...{ checked: true, setChecked: () => console.log("clicked") }}>
            X
          </CheckboxView>
          <p style={{
            paddingLeft: 8,
            paddingRight: 12,
            paddingTop: 4
          }}>Spring</p>
          </SelectableTableCheckboxDiv>
          <SelectableTableCheckboxDiv>
          <CheckboxView {...{ checked: true, setChecked: () => console.log("clicked") }}>
            X
          </CheckboxView>
          <p style={{
            paddingLeft: 8,
            paddingRight: 12,
            paddingTop: 4
          }}>Summer</p>
          </SelectableTableCheckboxDiv>
        </SelectableTableInputDiv>
        <CustomButtonGroupView {...{ Amount: "Progession" }}>
          <ButtonDiv>
            <CustomButtonView {...{ Theme: "Cancel" }}>Delete</CustomButtonView>
            <CustomButtonView {...{ Theme: "Secondary" }}>Cancel</CustomButtonView>
            <CustomButtonView {...{ Theme: "Primary" }}>Save</CustomButtonView>
          </ButtonDiv>
        </CustomButtonGroupView>
    </SelectableTableElementOpenedDivView>
  )
};
