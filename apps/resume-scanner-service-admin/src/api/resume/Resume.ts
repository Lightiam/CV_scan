import { ChatMessage } from "../chatMessage/ChatMessage";
import { JsonValue } from "type-fest";

export type Resume = {
  chatMessages?: Array<ChatMessage>;
  createdAt: Date;
  email: string | null;
  file: JsonValue;
  id: string;
  name: string | null;
  skills: string | null;
  updatedAt: Date;
};
