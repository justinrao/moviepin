import React, { useState, useEffect, SyntheticEvent, FormEvent } from 'react';
import { Modal, Box, Column, Label, Text, TextField, Button } from 'gestalt';
import { MovieUserRateApi } from '../../../services/movieUserRateApi';
import { Auth } from 'aws-amplify';
import { async } from 'q';
import { AnyCnameRecord } from 'dns';

interface Props {
  error: string | null;
  onDismiss: () => void;
  onFormValueChange: (key: string, value: string) => void;
  onSubmit: () => void;
}

const LoginModal = ({ error, onDismiss, onFormValueChange, onSubmit }: Props) => {


  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Modal
        accessibilityCloseLabel="Close Login"
        accessibilityModalLabel="Login Form"
        heading="Login to MoviePin"
        onDismiss={onDismiss}
        footer={<LoginFooter error={error} onCancel={onDismiss} />}
        size="md">
        <Box display="flex" direction="column" position="relative" padding={4}>
          <LoginField label="Email" field="email" type="email"
            onChange={v => onFormValueChange('email', v)} />
          <LoginField label="Password" field="password" type="password"
            onChange={v => onFormValueChange('password', v)} />
        </Box>
      </Modal>
    </form>
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

const LoginFooter = ({ error, onCancel }: { error: string | null, onCancel: () => void}) => (
  <Box justifyContent="end" display="flex" direction="row" alignItems="center">
    {error && <Box flex="grow" paddingX={4}>
      <Text size="md" color='red' align="left">
        {error}
      </Text>
    </Box>}
    <Box paddingX={1} marginRight={2}>
      <Button text="Cancel" inline onClick={onCancel} />
    </Box>
    <Box paddingX={1}>
      <Button type="submit" color="red" inline text="Login" />
    </Box>
  </Box>
)

export default LoginModal;