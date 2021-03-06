import React from "react";
import styled from "styled-components";
import { DefaultShadowLarge } from "../../GlobalStyles.tsx";
import "../../index.css";

const InsideDivStyle = styled.div<{ centered: boolean }>`
  width: 100%;
  max-width: 1200px;
  padding: var(--space-4x-large);
  border-radius: 4px;
  background-color: var(--surface);
  height: ${(props) => (props.centered ? "100%" : "max(auto, 100%)")};
  position: relative;
  box-sizing: border-box;
  ${DefaultShadowLarge}
`;

const OutsideDivStyle = styled.div<{ centered: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.centered ? "center" : "stretch")};
  background-color: var(--primary-50);
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  padding: var(--space-4x-large);
`;

export function Background(props: { centered?: boolean; children: any }) {
  return (
    <OutsideDivStyle centered={props.centered || false}>
      <InsideDivStyle>{props.children}</InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default Background;
