import React from "react";
import styled from "styled-components";
import { DefaultShadowLarge } from "../../GlobalStyles.tsx";
import "../../index.css";

const InsideDivStyle = styled.div`
  width: 70%;
  padding: var(--space-3x-large);
  border-radius: 4px;
  background-color: var(--surface);
  height: 100%;
  position: relative;
  box-sizing: border-box;
  ${DefaultShadowLarge}
`;

const OutsideDivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-50);
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  padding: var(--space-4x-large);
`;

export function Background({ children }) {
  return (
    <OutsideDivStyle>
      <InsideDivStyle>{children}</InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default Background;
