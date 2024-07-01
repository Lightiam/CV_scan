import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ResumeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Resumes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="file" source="file" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
