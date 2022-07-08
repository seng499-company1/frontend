import React from "react";
import styled from "styled-components";

export interface ToggleViewProps {
  children: "string" | React.ReactNode;
  active: boolean;
  onClick: any;
  id: any;
}

const StyledLabel = styled.label`
  user-select: none;
  display: inline-block;
  padding: var(--space-2x-small) var(--space-med);
  cursor: pointer;
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: transparent;
  border-radius: 4px;
  font-size: var(--font-size-normal);
`;

const ToggleCheckBox = styled.input`
  &:not(:checked),
  &:checked {
    display: none;
  }

  &:checked + ${StyledLabel} {
    color: var(--surface);
    background-color: var(--primary);
  }
`;

const ContainerDiv = styled.div`
  display: inline-block;
  position: relative;
`;

export function ToggleView(props: ToggleViewProps) {
  const { children, id, active, onClick } = props;
  return (
    <ContainerDiv>
      <ToggleCheckBox
        type={"checkbox"}
        id={id}
        name={id}
        checked={active}
        onClick={() => onClick()}
      />
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
    </ContainerDiv>
  );
}
