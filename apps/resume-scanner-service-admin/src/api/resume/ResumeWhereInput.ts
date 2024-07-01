import { ChatMessageListRelationFilter } from "../chatMessage/ChatMessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResumeWhereInput = {
  chatMessages?: ChatMessageListRelationFilter;
  email?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  skills?: StringNullableFilter;
};
