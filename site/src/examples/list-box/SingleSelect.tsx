import { Option, ListBox } from "@salt-ds/core";
import { ReactElement } from "react";
import { shortColorData } from "./exampleData";

export const SingleSelect = (): ReactElement => {
  return (
    <ListBox style={{ width: "30%" }}>
      {shortColorData.slice(0, 5).map((color) => (
        <Option value={color} key={color} />
      ))}
    </ListBox>
  );
};
