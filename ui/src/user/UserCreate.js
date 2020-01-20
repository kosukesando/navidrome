import React from 'react'
import {
  BooleanInput,
  Create,
  TextInput,
  PasswordInput,
  required,
  email,
  SimpleForm
} from 'react-admin'

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="userName" validate={[required()]} />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <PasswordInput source="password" validate={[required()]} />
      <BooleanInput source="isAdmin" initialValue={false} />
    </SimpleForm>
  </Create>
)

export default UserCreate
