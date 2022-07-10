import React from "react";
import styled from "styled-components";
import NavBar from "../navBar/navBar.tsx";
import Logo from "../../Images/uvic.png";

const Header = styled.div`
  display: flex;
  gap: var(--space-2x-large);
  align-items: center;
  margin-bottom: var(--space-2x-large);
`;

const Title = styled.h2`
  margin: 0;
`;

const TitleDiv = styled.div`
  display: flex;
  gap: var(--space-2x-large);
  align-items: center;
  margin-right: var(--space-4x-large);
`;

const LogoImg = styled.img`
  height: 24px;
  width: auto;
  display: block;
`;

export function HeaderView() {
  return (
    <Header>
      <TitleDiv>
        <LogoImg src={Logo} width="auto" height="24px" />
        <Title>Course Scheduling</Title>
      </TitleDiv>
      <NavBar style={{ width: "100%" }} initialTabId="1"></NavBar>
    </Header>
  );
}
