import { CustomButtonView } from "../Components/button/button.tsx";
import styled from "styled-components";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const LoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
`;

const LineDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightDiv = styled.div`
  display: flex;
  float: right;
  gap: 8px;
`;

export function LoginPage() {
  return (
    <BoxDiv>
      <h2>Welcome</h2>
      <Box
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: 4,
          color: "#000",
          minHeight: 200,
          padding: 12,
          width: 500,
          height: 300,
        }}
      >
        <LoginBoxDiv>
          <h3>Admin Login</h3>
          <form>
            <LineDiv>
              <p>Username:</p>
              <input type="text" />
            </LineDiv>
            <LineDiv>
              <p>Password:</p>
              <input type="password" />
            </LineDiv>
            <RightDiv>
              <CustomButtonView
                {...{ Theme: "Primary" }}
                customClickEvent={() => {
                  console.log("Hello");
                }}
              >
                Submit
              </CustomButtonView>
            </RightDiv>
          </form>
          <div>
            <p>*Questionaire close on May 1st*</p>
            <CustomButtonView
              {...{ Theme: "Primary" }}
              customClickEvent={() => {
                console.log("Hello");
              }}
            >
              Submit Questionaire Here
            </CustomButtonView>
          </div>
        </LoginBoxDiv>
      </Box>
    </BoxDiv>
  );
}

export default LoginPage;
