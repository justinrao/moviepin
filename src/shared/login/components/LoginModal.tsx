import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Modal, Box, Column, Label, Text, TextField, Button } from 'gestalt';
import { MovieUserRateApi } from '../../../services/movieUserRateApi';
import { Auth } from 'aws-amplify';
import { async } from 'q';
import { AnyCnameRecord } from 'dns';

interface Props {
  onDismiss: () => void;
  // onLogin: (email: string, password: String) => void;
}

const LoginModal = ({ onDismiss }: Props) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState(null);


  const signIn = async () => {
    console.log('password:', password);
    console.log('email:', email);
    console.log('formValue:', formValue);
    if (email && password) {
      setError(null);
      try {
        await Auth.signIn(email, password);
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    }
  }

  useEffect(() => {
    signIn();
  }, [formValue]);

  const validAndSubmitForm = () => {

    console.log('validAndSubmitForm');
    // todo: more validation
    if (email.length > 0 && password.length > 0) {
      setFormValue({ email, password })
    }
  }

  return (
    <Modal
      accessibilityCloseLabel="Close Login"
      accessibilityModalLabel="Login Form"
      heading="Login to MoviePin"
      onDismiss={onDismiss}
      footer={<LoginFooter error={error} onCancel={onDismiss} onLogin={validAndSubmitForm} />}
      size="md">
      <Box display="flex" direction="column" position="relative" padding={4}>
        <LoginField label="Email" field="email" type="email" onChange={v => setEmail(v)} />
        <LoginField label="Password" field="password" type="password" onChange={v => setPassword(v)} />
      </Box>
    </Modal>
  )
}

const LoginField = ({ label, field, type, onChange }:
  { label: string, field: string, type: 'email' | 'password', onChange: (value: string) => void }) => (
    <Box display="flex" direction="row" paddingX={4} paddingY={2}>
      <Column span={4}>
        <Label htmlFor={field}>
          <Text align="left" bold>{label}</Text>
        </Label>
      </Column>
      <Column span={8}>
        <TextField id={field} type={type} onChange={(args: { event: SyntheticEvent, value: string }) => onChange(args.value)} />
      </Column>
    </Box>
  )

const LoginFooter = ({ error, onCancel, onLogin }: { error: string | null, onCancel: () => void, onLogin: () => void }) => (
  <Box justifyContent="end" display="flex" direction="row" alignItems="center">
    {error && <Box flex="grow"paddingX={4}>
      <Text size="md" color='red' align="left">
        {error}
      </Text>
    </Box>}
    <Box paddingX={1} marginRight={2}>
      <Button text="Cancel" inline onClick={onCancel} />
    </Box>
    <Box paddingX={1}>
      <Button color="red" inline text="Login" onClick={onLogin} />
    </Box>
  </Box>
)

export default LoginModal;