import React from "react";
import styled from "styled-components";
import NavBar from "../navBar/navBar.tsx";
import Logo from "../../Images/uvic-wordmark-colour.svg";

const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: var(--space-2x-large);
  align-items: center;
  margin-bottom: var(--space-4x-large);
`;

const Title = styled.h3`
  margin: 0;
  color: var(--primary-500);
  font-weight: 700;
  min-width: max-content;
`;

const TitleDiv = styled.div`
  display: flex;
  gap: var(--space-small);
  align-items: center;
  flex-direction: column;
  margin-right: var(--space-4x-large);
`;

const LogoImg = styled.img`
  height: 24px;
  width: auto;
  display: block;
`;

export function HeaderView() {
  return (
    <HeaderDiv>
      <TitleDiv>
        <LogoImg src={Logo} width="auto" height="24px" />
        <Title>Course Scheduling</Title>
      </TitleDiv>
      <NavBar style={{ width: "100%" }} initialTabId="1"></NavBar>
      <div></div>
    </HeaderDiv>
  );
}
