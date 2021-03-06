import { CustomButtonView } from "../Components/button/button.tsx";
import { Background } from "../Components/background/background.tsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { PostLoginInfo } from "../Util/LoginHelper.tsx";
import { GetProfessor } from "../Util/ProfessorHelper.tsx";
import { ProfessorContext } from "./ProfessorDataInput/index.tsx";
import React, { useEffect } from "react";
import TextInputView from "../Components/Input/input.tsx";
import { type } from "os";

const InnerBox = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--font-color);
  padding: var(--space-4x-large) var(--space-5x-large) var(--space-5x-large);
  max-width: 500px;
  margin: auto;
`;

const LineDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--space-large);
  font-weight: 500;
  align-items: center;
  box-sizing: border-box;

  & input {
    width: 100%;
    box-sizing: border-box;
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-large);
`;

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { selectedProfessor, setProfessor } = useContext(ProfessorContext);
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    PostLoginInfo({
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data.permissions === "admin") {
          navigate("/admin");
        } else {
          const id = response.data.id;
          GetProfessor(id).then((response) => {
            setProfessor(response.data);
            navigate(`/SelectProfessor/TimeAvail`);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Background centered={true}>
      <BoxDiv>
        <h2 style={{ fontWeight: "500" }}>
          Welcome the the UVic Course Scheduler
        </h2>
        <InnerBox>
          <StyledForm>
            <LineDiv>
              <p style={{ margin: 0 }}>Username</p>
              <TextInputView
                onChange={(event) => setUsername(event.target.value)}
                type="text"
              />
              <p style={{ margin: 0 }}>Password</p>
              <TextInputView
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
            </LineDiv>
            <RightDiv>
              <CustomButtonView
                {...{ Theme: "Primary" }}
                customClickEvent={(event) => {
                  onSubmit(event);
                }}
              >
                Submit
              </CustomButtonView>
            </RightDiv>
          </StyledForm>
        </InnerBox>
      </BoxDiv>
    </Background>
  );
}

export default LoginPage;
