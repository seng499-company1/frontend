import React from "react";
import styled from "styled-components";
import "../../index.css";

const InsideDivStyle = styled.div`
  width: 55%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 36px;
  border-radius: 8px;
  background-color: #fefefe;
  height: 100%;
  position: relative;
  box-shadow: 2px 12px 12px lightgray;
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
