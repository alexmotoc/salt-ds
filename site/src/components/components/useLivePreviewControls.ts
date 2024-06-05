import { useContext } from "react";
import {
  type LivePreviewContextType,
  LivePreviewContext,
} from "./LivePreviewControls";

export const useLivePreviewControls = (): LivePreviewContextType => {
  return useContext(LivePreviewContext);
};
