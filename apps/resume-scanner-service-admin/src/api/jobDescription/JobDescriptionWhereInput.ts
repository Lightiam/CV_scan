import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobDescriptionWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  requiredSkills?: StringNullableFilter;
  title?: StringNullableFilter;
};
