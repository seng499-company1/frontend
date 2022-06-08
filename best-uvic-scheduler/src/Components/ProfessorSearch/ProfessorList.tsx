import React from "react";
import styled from "styled-components";
import '../../index.css';

export interface ProfessorListDivProps {
  children: React.ReactNode;
}

const ProfessorListDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 250px;
  display: flex;
  flex-direction: column; 
  justifyContent: start;
  background-color: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 8px;
`;

export function ProfessorListDivView(props: ProfessorListDivProps) {
  return (
    <ProfessorListDiv >{props.children}</ProfessorListDiv>
  );
}
