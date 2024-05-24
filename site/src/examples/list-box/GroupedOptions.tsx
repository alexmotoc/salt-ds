import { Option, OptionGroup, ListBox } from "@salt-ds/core";
import { ReactElement } from "react";
import { shortColorData } from "./exampleData";

function groupByFirstLetter(data: string[]) {
  return data.reduce((acc, option) => {
    const groupName = option[0];
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(option);
    return acc;
  }, {} as Record<string, string[]>);
}

const colorGroups = groupByFirstLetter(shortColorData.slice(0, 8));

export const GroupedOptions = (): ReactElement => {
  return (
    <ListBox style={{ width: "30%" }}>
      {Object.entries(colorGroups).map(([firstLetter, options]) => (
        <OptionGroup label={firstLetter} key={firstLetter}>
          {options.slice(0, 2).map((color) => (
            <Option value={color} key={color} />
          ))}
        </OptionGroup>
      ))}
    </ListBox>
  );
};
