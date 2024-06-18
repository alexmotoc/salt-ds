import { Option, ListBox } from "@salt-ds/core";
import { ReactElement } from "react";
import { shortColorData } from "./exampleData";

export const Bordered = (): ReactElement => {
  return (
    <ListBox bordered style={{ width: "30%" }}>
      {shortColorData.slice(0, 5).map((color) => (
        <Option value={color} key={color} />
      ))}
    </ListBox>
  );
};
