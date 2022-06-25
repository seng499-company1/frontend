import { CustomButtonView } from "../Components/button/button.tsx";
import { Background } from "../Components/background/background.tsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { PostLoginInfo } from "../Util/LoginHelper.tsx";
import { ProfessorContext } from "./ProfessorDataInput/index.tsx";

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

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const navigate = useNavigate();

  function onSubmit() {
    var resp = PostLoginInfo({ username: username, password: password });
    console.log(resp);
    if (resp.first_name === "Rich") {
      setProfessor(resp);
      navigate(`/SelectProfessor/Qualifications`);
    } else {
    }
  }
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
            height: 250,
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
          </LoginBoxDiv>
        </Box>
      </BoxDiv>
    </Background>
  );
}

export default LoginPage;
