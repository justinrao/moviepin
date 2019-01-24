import React from 'react';
import { Modal, Box, Column, Label, Text, TextField, Button } from 'gestalt';

const LoginModal = () => (
  <Box dangerouslySetInlineStyle={{ __style: { zIndex: 1 } }}>
    <Modal
      accessibilityCloseLabel="Close Login"
      accessibilityModalLabel="Login Form"
      heading="Login to MoviePin"
      onDismiss={() => console.log('dismissed')}
      footer={<LoginFooter />}
      size="md">
      <Box display="flex" direction="column" position="relative" padding={4}>
        <LoginField label="Password" field="password" type="password" />
        <LoginField label="Email" field="email" type="email" />
      </Box>
    </Modal>
  </Box>
)

const LoginField = ({ label, field, type }: { label: string, field: string, type: 'email' | 'password' }) => (
  <Box display="flex" direction="row" paddingX={4} paddingY={2}>
    <Column span={4}>
      <Label htmlFor={field}>
        <Text align="left" bold>{label}</Text>
      </Label>
    </Column>
    <Column span={8}>
      <TextField id={field} type={type} onChange={() => undefined} />
    </Column>
  </Box>
)

const LoginFooter = () => (
  <Box justifyContent="end" display="flex" direction="row">
    <Box paddingX={1} marginRight={2}>
      <Button text="Cancel" inline onClick={() => console.log('cancel')} />
    </Box>
    <Box paddingX={1}>
      <Button color="red" inline text="Login" />
    </Box>
  </Box>
)

export default LoginModal;