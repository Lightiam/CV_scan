import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type ChatMessageUpdateInput = {
  message?: string | null;
  resume?: ResumeWhereUniqueInput | null;
  sender?: string | null;
  timestamp?: Date | null;
};
