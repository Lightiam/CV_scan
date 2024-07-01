import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ChatMessageTitle } from "../chatMessage/ChatMessageTitle";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chatMessages"
          reference="ChatMessage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatMessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="skills" multiline source="skills" />
      </SimpleForm>
    </Create>
  );
};
