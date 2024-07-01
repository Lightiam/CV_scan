import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ChatMessageTitle } from "../chatMessage/ChatMessageTitle";

export const ResumeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
