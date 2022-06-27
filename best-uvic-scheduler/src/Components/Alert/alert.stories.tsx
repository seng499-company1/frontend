import Background, { Alert } from "./alert";

export default {
  title: "Components/alert",
  component: Background,
};

export const BackgroundActive = () => {
  return <Alert {...{ new_entries: 3 }}></Alert>;
};
