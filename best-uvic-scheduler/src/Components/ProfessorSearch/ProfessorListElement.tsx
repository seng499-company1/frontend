import React from "react";
import styled from "styled-components";
import '../../index.css';

export interface ProfessorListElementProps {
  Selected: boolean;
  children: React.ReactNode;
}

export interface ProfessorListElementDivProps {
  Selected: boolean;
  children: React.ReactNode;
}

export interface ProfessorListElementTextProps {
  children: React.ReactNode;
}

const ProfessorListElementDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justifyContent: start;
  font-weight: bold;
  background-color: ${(props) => props.Selected ? "#D9D9D9" : "#FFFFFF"};
  color: ${(props) => props.Selected ? "#005791" : "#A9A9A9"};
`;

const ProfessorListElementText = styled.p`
  padding-left: 15px;
`;

ProfessorListElementDiv.defaultProps = {
  Selected: false
};

export function ProfessorListElementView(props: ProfessorListElementProps) {
  return (
    <ProfessorListElementDiv Selected={props.Selected}>
      <ProfessorListElementText>
        {props.children}
      </ProfessorListElementText>
    </ProfessorListElementDiv>
  );
}
