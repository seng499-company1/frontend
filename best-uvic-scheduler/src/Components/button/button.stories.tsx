import { CustomButtonView } from "./button";

export default {
  title: "Components/buttons",
  component: CustomButtonView,
};

export const PrimaryButton = () => {
  return <CustomButtonView {...{ Theme: "Primary" }}>Next</CustomButtonView>;
};

export const SecondaryButton = () => {
  return <CustomButtonView {...{ Theme: "Secondary" }}>Back</CustomButtonView>;
};

export const CancelButton = () => {
  return <CustomButtonView {...{ Theme: "Cancel" }}>Exit</CustomButtonView>;
};

export const DisabledPrimaryButton = () => {
  return <CustomButtonView {...{ Theme: "Primary", Disabled: true }}>Next</CustomButtonView>;
};

export const DisabledSecondaryButton = () => {
  return <CustomButtonView {...{ Theme: "Secondary", Disabled: true }}>Back</CustomButtonView>;
};

export const DisabledCancelButton = () => {
  return <CustomButtonView {...{ Theme: "Cancel", Disabled: true }}>Exit</CustomButtonView>;
};

export const NoneButton = () => {
  return <CustomButtonView>Nothing</CustomButtonView>;
};
