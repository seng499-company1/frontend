import React from "react";
import styled from "styled-components";
import "../../index.css";

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  background-color: #fefefe;
  height: 100vh;
  position: relative;
  z-index: -10;
`;

const OutsideDivStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-50);
  height: 100vh;
  position: relative;
  z-index: -10;
`;

export function Background() {
  return (
    <OutsideDivStyle>
      <InsideDivStyle></InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default Background;
