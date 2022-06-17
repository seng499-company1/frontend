import Background from "./background";

export default {
  title: "Components/background",
  component: Background,
};

export const BackgroundActive = () => {
  return (
    <Background>
      <p>hello world</p>
    </Background>
  );
};
