import { Option, ListBox, Text, StackLayout } from "@salt-ds/core";
import { ReactElement } from "react";
import { shortColorWithHex } from "./exampleData";

export const ComplexOptions = (): ReactElement => {
  return (
    <ListBox style={{ width: "30%" }}>
      {shortColorWithHex.slice(0, 5).map(({ color, hex }) => (
        <Option value={color} key={color}>
          <StackLayout gap={0.5} align="start">
            <Text>
              <strong>{color}</strong>
            </Text>
            <Text styleAs="label" color="secondary">
              {hex}
            </Text>
          </StackLayout>
        </Option>
      ))}
    </ListBox>
  );
};
