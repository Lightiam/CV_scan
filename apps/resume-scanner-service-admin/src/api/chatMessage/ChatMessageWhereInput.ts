import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatMessageWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  resume?: ResumeWhereUniqueInput;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
