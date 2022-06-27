import { TextInputView } from "./input.tsx";

export default {
  title: "Components/Input",
  component: TextInputView,
  subcomponents: { },
};

export const TextInput = () => {
  return (
    <TextInputView {...{ placeholder: "Example" }}/>
  )
};
