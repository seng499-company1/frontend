import React from "react";
import styled from "styled-components";

import CustomButtonView from "../../Components/button/button.tsx";
import CustomButtonGroupView from "../../Components/button/buttongroup.tsx";

const InsideDivStyle = styled.div`
  width: 55%;
  padding: 36px;
  border-radius: 8px;
  height: 100vh;
  min-height: 100vh;
  background-color: #fefefe;
`;

const OutsideDivStyle = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  justify-content: center;
  background-color: var(--primary-50);
  height: 100vh;
`;

export function Summary() {
  return (
    <OutsideDivStyle>
      <InsideDivStyle>
        <h1 text-align="center">Summary</h1>

        <h2>Classes</h2>
        <h2>Availibility</h2>
        <h4>Summer</h4>
        <h4>Fall</h4>
        <h4>Spring</h4>

        <CustomButtonGroupView {...{ Amount: "Double" }}>
          <CustomButtonView
            {...{ Theme: "Secondary" }}
            customClickEvent={() => {
              //navigate(`/SelectProfessor`);
            }}
          >
            {" "}
            Back{" "}
          </CustomButtonView>
          <CustomButtonView
            {...{ Theme: "Primary" }}
            customClickEvent={() => {}}
          >
            {" "}
            SUBMIT{" "}
          </CustomButtonView>
        </CustomButtonGroupView>
      </InsideDivStyle>
    </OutsideDivStyle>
  );
}

export default Summary;
