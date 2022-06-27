import React from "react";
import styled from "styled-components";
import CustomButtonView from "../Components/button/button.tsx";
import { Background } from "../Components/background/background.tsx";
import TabGroup from "../Components/tab-group/tab-group.tsx";

interface IntegrationTestProps {}
interface IntegrationTestViewProps {}

function useIntegrationTest(props: IntegrationTestProps) {
  return {};
}

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: var(--space-2x-large);
`;

const PageTitleH1 = styled.h1`
  text-align: center;
`;

export function IntegrationTestView(props: IntegrationTestViewProps) {
  const {} = props;
  return (
    <Background>
      <PageTitleH1>Integration test</PageTitleH1>
      <ButtonDiv>
        <CustomButtonView {...{ Theme: "Primary" }}>
          Run Company 1 Algorithm
        </CustomButtonView>
        <CustomButtonView {...{ Theme: "Primary" }}>
          Run Company 2 Algorithm
        </CustomButtonView>
      </ButtonDiv>
      <TabGroup initialTabId="1">
        <TabGroup.Tab size="medium" tabId="1">
          Company 1 Output
        </TabGroup.Tab>
        <TabGroup.Tab size="medium" tabId="2">
          Company 2 Output
        </TabGroup.Tab>
      </TabGroup>
    </Background>
  );
}

export const IntegrationTest = (props: IntegrationTestProps) => {
  return <IntegrationTestView {...useIntegrationTest(props)} />;
};
