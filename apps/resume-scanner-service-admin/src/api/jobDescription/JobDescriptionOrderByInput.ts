import { SortOrder } from "../../util/SortOrder";

export type JobDescriptionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  requiredSkills?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
