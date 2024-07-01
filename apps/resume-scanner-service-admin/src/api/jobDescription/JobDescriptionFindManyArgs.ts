import { JobDescriptionWhereInput } from "./JobDescriptionWhereInput";
import { JobDescriptionOrderByInput } from "./JobDescriptionOrderByInput";

export type JobDescriptionFindManyArgs = {
  where?: JobDescriptionWhereInput;
  orderBy?: Array<JobDescriptionOrderByInput>;
  skip?: number;
  take?: number;
};
