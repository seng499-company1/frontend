import { SearchBarInputView, SearchBarDivView, SearchBarView } from "./Searchbar";

export default {
  title: "Components/SearchBar",
  component: SearchBarView,
  subcomponents: { SearchBarInputView, SearchBarDivView },
};

export const SearchBarObject = () => {
  return (
    <SearchBarView/>
  )
};
