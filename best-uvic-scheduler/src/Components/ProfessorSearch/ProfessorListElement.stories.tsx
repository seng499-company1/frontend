import { ProfessorListElementView } from "./ProfessorListElement";

export default {
  title: "Components/ProfessorListElement",
  component: ProfessorListElementView,
  subcomponents: { },
};

export const ProfessorListElementNoSelected = () => {
  return (
    <ProfessorListElementView>Bill Burr</ProfessorListElementView>
  )
};

export const ProfessorListElementSelected = () => {
  return (
    <ProfessorListElementView {...{ Selected: true }}>Bill Burr</ProfessorListElementView>
  )
};
