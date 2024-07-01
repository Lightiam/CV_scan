import { JobDescription as TJobDescription } from "../api/jobDescription/JobDescription";

export const JOBDESCRIPTION_TITLE_FIELD = "title";

export const JobDescriptionTitle = (record: TJobDescription): string => {
  return record.title?.toString() || String(record.id);
};
