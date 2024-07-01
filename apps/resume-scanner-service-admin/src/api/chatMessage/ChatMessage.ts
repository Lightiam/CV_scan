import { Resume } from "../resume/Resume";

export type ChatMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  resume?: Resume | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
