import { Resume as TResume } from "../api/resume/Resume";

export const RESUME_TITLE_FIELD = "name";

export const ResumeTitle = (record: TResume): string => {
  return record.name?.toString() || String(record.id);
};
