import type { ReactElement } from "react";
import { Switch } from "@salt-ds/core";

export const Disabled = (): ReactElement => (
  <Switch label="Disabled" disabled />
);
