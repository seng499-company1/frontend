import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Background } from "../Components/background/background.tsx";
import Logo from "../Images/Uvic-logo.png";
import Alert from "../Components/Alert/alert.tsx";
import NavBar from "../Components/navBar/navBar.tsx";

export function LandingPage() {
  const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
  `;

  const Title = styled.h1`
    text-align: center;
    font-size: 32px;
    padding-left: 0px;
    padding-right: 0px;
    grid-column: 2 / 3;
    grid-row: 1;
  `;

  const LogoDiv = styled.div`
    padding-left: 32px;
    padding-right: 0px;
    grid-column: 1 / 3;
    grid-row: 1;
  `;

  const ProfListDiv = styled.div`
    background-color: grey;
    border-style: solid;
  `;
  const DataEntryDiv = styled.h4`
    padding-left: 12px;
  `;

  return (
    <Background>
      <Header>
        <LogoDiv>
          <img src={Logo} width="70px" height="110px" />
        </LogoDiv>
        <Title>UVIC Course Scheduler</Title>
      </Header>

      <NavBar></NavBar>
      <br></br>
      <Alert {...{ new_entries: 3 }}></Alert>
      <br></br>
      <ProfListDiv>
        <DataEntryDiv>New Data Entries:</DataEntryDiv>
        <DataEntryDiv>Excisting Data Entires:</DataEntryDiv>
      </ProfListDiv>
    </Background>
  );
}

export default LandingPage;
