import React from "react";
import styled from "styled-components";
import { DefaultShadow } from "../../GlobalStyles.tsx";
import "../../index.css";

const InsideDivStyle = styled.div`
  width: 70%;
  margin-top: var(--space-4x-large);
  padding: 36px;
  border-radius: 4px;
  background-color: var(--surface);
  height: 100%;
  position: relative;
  ${DefaultShadow}
`;

const OutsideDivStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-50);
  min-height: 100vh;
  position: relative;
`;

export function Background({ children }) {
  return (
    <OutsideDivStyle>
      <InsideDivStyle>{children}</InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default Background;
