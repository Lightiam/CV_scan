import { ChatMessageCreateNestedManyWithoutResumesInput } from "./ChatMessageCreateNestedManyWithoutResumesInput";
import { InputJsonValue } from "../../types";

export type ResumeCreateInput = {
  chatMessages?: ChatMessageCreateNestedManyWithoutResumesInput;
  email?: string | null;
  file?: InputJsonValue;
  name?: string | null;
  skills?: string | null;
};
