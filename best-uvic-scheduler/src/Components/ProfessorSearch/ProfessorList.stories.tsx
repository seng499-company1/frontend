import { ProfessorListDivView } from "./ProfessorList";
import { SearchBarView } from "../SearchBar/Searchbar";
import { ProfessorListElementView } from "./ProfessorListElement";

export default {
  title: "Components/ProfessorList",
  component: ProfessorListDivView,
  subcomponents: { SearchBarView, ProfessorListElementView },
};

export const EmptyProfessorListNoSearch = () => {
  return (
    <ProfessorListDivView/>
  )
};

export const EmptyProfessorListWithSearch = () => {
  return (
    <ProfessorListDivView>
      <SearchBarView {...{ InList: true }}/>
    </ProfessorListDivView>
  )
};

export const EmptyProfessorListWithSearchAndElements = () => {
  return (
    <ProfessorListDivView>
      <SearchBarView {...{ InList: true }}/>
      <ProfessorListElementView>Bill Burr</ProfessorListElementView>
      <ProfessorListElementView>Bill Test</ProfessorListElementView>
      <ProfessorListElementView>Test Test</ProfessorListElementView>
    </ProfessorListDivView>
  )
};

export const EmptyProfessorListWithSearchAndElementsSelected = () => {
  return (
    <ProfessorListDivView>
      <SearchBarView {...{ InList: true }}/>
      <ProfessorListElementView>Bill Burr</ProfessorListElementView>
      <ProfessorListElementView {...{ Selected: true }}>Bill Test</ProfessorListElementView>
      <ProfessorListElementView>Test Test</ProfessorListElementView>
    </ProfessorListDivView>
  )
};
