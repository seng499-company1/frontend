import ProfessorTimetable from "./ProfessorTimetable";

export default {
  title: "Components/Prof Timetable",
  component: ProfessorTimetable,
};

export const Functional = () => {
  const props = {
    semesters: ["Fall 2022", "Spring 2023", "Summer 2023"],
    profName: "John Johnson",
  };
  return <ProfessorTimetable {...props} />;
};
