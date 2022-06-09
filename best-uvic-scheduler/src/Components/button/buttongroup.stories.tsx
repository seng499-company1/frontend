import { CustomButtonView } from "./button";
import { CustomButtonGroupView } from "./buttongroup";

export default {
  title: "Components/buttonsgroups",
  component: CustomButtonGroupView,
  subcomponents: { CustomButtonView },
};

export const SingleButton = () => {
  return (
    <CustomButtonGroupView {...{ Amount: "Single" }}>
      <CustomButtonView {...{ Theme: "Primary" }}>Confirm</CustomButtonView>
    </CustomButtonGroupView>
  )
};

export const ButtonBar = () => {
  return (
    <CustomButtonGroupView {...{ Amount: "Progession" }}>
      <CustomButtonView {...{ Theme: "Primary" }}>Continue</CustomButtonView>
    </CustomButtonGroupView>
  )
};

export const DoubleButtonBar = () => {
  return (
    <CustomButtonGroupView {...{ Amount: "Double" }}>
      <CustomButtonView {...{ Theme: "Secondary" }}>Back</CustomButtonView>
      <CustomButtonView {...{ Theme: "Primary" }}>Next</CustomButtonView>
    </CustomButtonGroupView>
  )
};
