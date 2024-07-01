import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  name?: StringNullableFilter;
};
