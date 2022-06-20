import { CustomButtonView } from "../Components/button/button.tsx";
import { Background } from "../Components/background/background.tsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const LineDiv2 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightDiv = styled.div`
  display: flex;
  float: right;
  gap: 8px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  float: center;
`;

export function LoginPage() {
  function onSubmit() {
    console.log("username: " + username + " password: " + password);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <Background>
      <BoxDiv>
        <h2>Welcome</h2>
        <Box
          style={{
            backgroundColor: "#D9D9D9",
            borderRadius: 4,
            color: "#000",
            minHeight: 200,
            padding: 8,
            width: 500,
            height: 300,
          }}
        >
          <LoginBoxDiv>
            <h3>Admin Login</h3>
            <form>
              <LineDiv>
                <p>Username:</p>
                <input
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                />
              </LineDiv>
              <LineDiv2>
                <p>Password:</p>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                />
              </LineDiv2>
              <RightDiv>
                <CustomButtonView
                  {...{ Theme: "Primary" }}
                  customClickEvent={() => {
                    onSubmit();
                  }}
                >
                  Submit
                </CustomButtonView>
              </RightDiv>
            </form>
            <Center>
              <p>*Questionaire close on May 1st*</p>
              <CustomButtonView
                {...{ Theme: "Primary" }}
                customClickEvent={() => {
                  navigate(`/SelectProfessor`);
                }}
              >
                Submit Questionaire Here
              </CustomButtonView>
            </Center>
          </LoginBoxDiv>
        </Box>
      </BoxDiv>
    </Background>
  );
}

export default LoginPage;
