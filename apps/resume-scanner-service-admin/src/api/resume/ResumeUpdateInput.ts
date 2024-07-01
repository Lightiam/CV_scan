import { ChatMessageUpdateManyWithoutResumesInput } from "./ChatMessageUpdateManyWithoutResumesInput";
import { InputJsonValue } from "../../types";

export type ResumeUpdateInput = {
  chatMessages?: ChatMessageUpdateManyWithoutResumesInput;
  email?: string | null;
  file?: InputJsonValue;
  name?: string | null;
  skills?: string | null;
};
