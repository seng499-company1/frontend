import { BrowserRouter } from "react-router-dom";
import NavBar from "./navBar";

export default {
  title: "Components/navBar",
  component: NavBar,
};

export const navBarActive = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
    </BrowserRouter>
  );
};
