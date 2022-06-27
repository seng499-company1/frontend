import React, { useState } from "react";
import styled from "styled-components";
import CustomButtonView from "../Components/button/button.tsx";
import { Background } from "../Components/background/background.tsx";
import TabGroup from "../Components/tab-group/tab-group.tsx";
import { getAlgo1 } from "../Util/AlgoIntegrationHelper.tsx";

interface IntegrationTestProps {}
interface IntegrationTestViewProps {
  company1Output: any;
  company2Output: any;
  onCompany1Request: any;
  onCompany2Request: any;
  company: number;
  setCompany: React.Dispatch<React.SetStateAction<number>>;
}

function useIntegrationTest(props: IntegrationTestProps) {
  const [company, setCompany] = useState(1);
  const [company1Output, setCompany1Output] = useState("");
  const [company2Output, setCompany2Output] = useState("");

  const onCompany1Request = async () => {
    const data = await getAlgo1("http://localhost:5000/scedule/company/1");
    setCompany1Output(JSON.stringify(data));
  };

  const onCompany2Request = async () => {
    const data = await getAlgo1("http://localhost:5000/scedule/company/2");
    setCompany2Output(JSON.stringify(data));
  };

  return {
    company,
    setCompany,
    company1Output,
    company2Output,
    onCompany1Request,
    onCompany2Request,
  };
}

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: var(--space-2x-large);
  box-sizing: border-box;
`;

const PageTitleH1 = styled.h1`
  text-align: center;
`;

const EmptyP = styled.p`
  padding: var(--space-3x-large);
  text-align: center;
`;

export function IntegrationTestView(props: IntegrationTestViewProps) {
  const {
    company,
    setCompany,
    company1Output,
    company2Output,
    onCompany1Request,
    onCompany2Request,
  } = props;
  return (
    <Background>
      <PageTitleH1>Integration test</PageTitleH1>
      <ButtonDiv>
        <CustomButtonView
          {...{ Theme: "Primary", customClickEvent: () => onCompany1Request() }}
        >
          Run Company 1 Algorithm
        </CustomButtonView>
        <CustomButtonView
          {...{ Theme: "Primary", customClickEvent: () => onCompany2Request() }}
        >
          Run Company 2 Algorithm
        </CustomButtonView>
      </ButtonDiv>
      <TabGroup initialTabId="1">
        <TabGroup.Tab size="medium" tabId="1" onClick={() => setCompany(1)}>
          Company 1 Output
        </TabGroup.Tab>
        <TabGroup.Tab size="medium" tabId="2" onClick={() => setCompany(2)}>
          Company 2 Output
        </TabGroup.Tab>
      </TabGroup>
      {company === 1 ? (
        company1Output ? (
          <code>{company1Output}</code>
        ) : (
          <EmptyP>
            No output from Company 1 yet. Click the run button to get output!
          </EmptyP>
        )
      ) : company2Output ? (
        <code>{company2Output}</code>
      ) : (
        <EmptyP>
          No output from Company 2 yet. Click the run button to get output!
        </EmptyP>
      )}
    </Background>
  );
}

export const IntegrationTest = (props: IntegrationTestProps) => {
  return <IntegrationTestView {...useIntegrationTest(props)} />;
};
