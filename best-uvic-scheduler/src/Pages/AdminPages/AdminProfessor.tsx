import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetProfessorList } from "../../Util/ProfessorListHelper.tsx";
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

const TableDiv = styled.div`
  padding-top: 48px;
`;

const OpenEditablePartDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 4;
`;


export function AdminProfessorPage() {
  const [Professors, setProfessors] = useState([]);
  const [OpenedProfessor, setOpenedProfessor] = useState(0);
  const [RemovedProfessor, setRemovedProfessor] = useState(0);
  const [OpenDepartment, setOpenDepartment] = useState("");
  const [OpenEmail, setOpenEmail] = useState("");
  const [OpenFirstName, setFirstName] = useState("");
  const [OpenLastName, setLastName] = useState("");
  const [OpenProfessorType, setOpenProfessorType] = useState(0);
  const [OpenProfessorPENG, setOpenProfessorPENG] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
  GetProfessorList().then((response) => {
    setProfessors(response);
  })
  .catch((error) => {
    console.log(error);
  });
  }, []);

  useEffect(() => {
    if(OpenedProfessor !== 0){
      setOpenDepartment(OpenedProfessor.department);
      setOpenEmail(OpenedProfessor.email);
      setFirstName(OpenedProfessor.first_name);
      setLastName(OpenedProfessor.last_name);
      setOpenProfessorType(OpenedProfessor.is_teaching);
      setOpenProfessorPENG(OpenedProfessor.is_peng);
      console.log(OpenedProfessor);
    }
  }, [OpenedProfessor]);

  function SendEditedToBackend() {
    const ID = OpenedProfessor.id;

    let New_value = {
      department: OpenDepartment,
      email: OpenEmail,
      first_name: OpenFirstName,
      is_peng: OpenProfessorPENG,
      is_teaching: OpenProfessorType,
      last_name: OpenLastName
    };

    console.log(New_value);
  }

  function DeleteProfessor(index) {
    setRemovedProfessor(Professors.splice(index, 1));
    console.log(RemovedProfessor[0].id);
  }

  return (
    <TableDiv>
      <CustomButtonGroupView {...{ Amount: "Progession" }}>
        <CustomButtonView
        {...{ Theme: "Primary" }}
        customClickEvent={() => {
          navigate(`/Admin/Newprofessor`);
        }}
        >
        Add New Professor
        </CustomButtonView>
      </CustomButtonGroupView>
      <SelectableTableDivView columns={5}>
        <SelectableTableHeaderDivView>
          <SelectableTableIconElementDivView />
          <SelectableTableLabelDivView>
            <SelectableTableLabelsView>Department</SelectableTableLabelsView>
            <SelectableTableLabelsView>Name</SelectableTableLabelsView>
            <SelectableTableLabelsView>
              Teaching/Research
            </SelectableTableLabelsView>
            <SelectableTableLabelsView>PENG</SelectableTableLabelsView>
          </SelectableTableLabelDivView>
        </SelectableTableHeaderDivView>
        {Professors.map(function (Professor, index) {

          const FullName = Professor.first_name + " " + Professor.last_name;

          if (OpenedProfessor === Professor) {
            return (
              <SelectableTableElementOpenedDivView>
              <SelectableTableIconElementDivView>
                <BiCaretUp
                  style={{ height: 16, width: 16 }}
                  onClick={() => {
                    setOpenedProfessor(0);
                  }}
                />
              </SelectableTableIconElementDivView>
              <OpenEditablePartDiv>
              <SelectableTableInputDiv>
                <SelectableTableSingleInputDiv>
                  <p> Department </p>
                  <TextInputView
                      DefaultValue={OpenDepartment}
                      onChange={event => {
                        setOpenDepartment(event.target.value)
                      }}/>
                </SelectableTableSingleInputDiv>
                <SelectableTableSingleInputDiv style={{ width: 300 }}>
                  <p> Professors Email </p>
                  <TextInputView
                      DefaultValue={OpenEmail}
                      onChange={event => {
                        setOpenEmail(event.target.value)
                      }}/>
                </SelectableTableSingleInputDiv>
                </SelectableTableInputDiv>
                <SelectableTableInputDiv>
                <SelectableTableSingleInputDiv>
                  <p> First Name </p>
                  <TextInputView
                      DefaultValue={OpenFirstName}
                      onChange={event => {
                        setFirstName(event.target.value);
                      }}/>
                </SelectableTableSingleInputDiv>
                <SelectableTableSingleInputDiv>
                  <p> Last Name </p>
                  <TextInputView
                      DefaultValue={OpenLastName}
                      onChange={event => {
                        setLastName(event.target.value);
                      }}/>
                </SelectableTableSingleInputDiv>
              </SelectableTableInputDiv>
              <SelectableTableInputDiv>
              <SelectableTableCheckboxDiv>
                <CheckboxView
                    checked={OpenProfessorType}
                >
                  X
                </CheckboxView>
                <p>Teaching</p>
              </SelectableTableCheckboxDiv>
              <SelectableTableCheckboxDiv>
                <CheckboxView
                checked={!OpenProfessorType}
                >
                  X
                </CheckboxView>
                <p>Research</p>
              </SelectableTableCheckboxDiv>
              <CustomButtonView {...{ Theme: "Secondary" }}
              customClickEvent={() => {
                setOpenProfessorType(!OpenProfessorType)
              }}
              >
                Change
              </CustomButtonView>
              </SelectableTableInputDiv>
              <SelectableTableInputDiv>
              <SelectableTableCheckboxDiv>
                <CheckboxView
                    checked={OpenProfessorPENG}
                >
                  X
                </CheckboxView>
                <p>PENG</p>
              </SelectableTableCheckboxDiv>
              <SelectableTableCheckboxDiv>
                <CheckboxView
                checked={!OpenProfessorPENG}
                >
                  X
                </CheckboxView>
                <p>Not PENG</p>
              </SelectableTableCheckboxDiv>
              <CustomButtonView {...{ Theme: "Secondary" }}
              customClickEvent={() => {
                setOpenProfessorPENG(!OpenProfessorPENG)
              }}
              >
                Change
              </CustomButtonView>
              </SelectableTableInputDiv>
              <SelectableTableInputDiv>
              <CustomButtonView
                  {...{ Theme: "Cancel" }}
                  customClickEvent={() => {
                    DeleteProfessor(index)
                  }}
                >
                  Delete
                </CustomButtonView>
                <CustomButtonView
                  {...{ Theme: "Secondary" }}
                  customClickEvent={() => {
                    setOpenedProfessor(0);
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
              </SelectableTableInputDiv>
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
                      setOpenedProfessor(Professor);
                    }}
                  />
                </SelectableTableIconElementDivView>
                <SelectableTableLabelDivView>
                  <SelectableTableLabelsView>
                    {Professor.department}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {FullName}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {Professor.is_teaching ? "Teaching" : "Research"}
                  </SelectableTableLabelsView>
                  <SelectableTableLabelsView>
                    {Professor.is_peng ? "Yes" : "No"}
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

export default AdminProfessorPage;
