import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const JobDescriptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="requiredSkills" multiline source="requiredSkills" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
