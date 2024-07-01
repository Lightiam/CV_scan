import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
};
