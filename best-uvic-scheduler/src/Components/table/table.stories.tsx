import { tableStyleView } from "./tableStyle";

export default {
  title: "Components/Checkbox Group",
  component: tableStyleView,
};

export const ActivetableStyle = () => {
  return (
    <tableStyleView {...{ theme: "Header", num_rows: 3 }}>X</tableStyleView>
  );
};
