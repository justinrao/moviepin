import React, { useState, useEffect, SyntheticEvent, FormEvent } from 'react';
import { Modal, Box, Column, Label, Text, TextField, Button } from 'gestalt';
import { UserMovieApi } from '../../../services/userMovieApi';
import { Auth } from 'aws-amplify';
import { async } from 'q';
import { AnyCnameRecord } from 'dns';

interface Props {
  onDismiss: () => void;
  onSubmit: () => void;
}

const LogoutModal = ({ onDismiss, onSubmit }: Props) => {


  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Modal
        accessibilityCloseLabel="Close Logout"
        accessibilityModalLabel="Logout Confirmation"
        heading="Logout MoviePin"
        onDismiss={onDismiss}
        footer={<LogoutFooter onCancel={onDismiss} />}
        size="md">
        <Box padding={6}>
          <Text size="lg">
            You will be logged out of MoviePin. Would you like to proceed?
          </Text>
        </Box>
      </Modal>
    </form>
  )
}

const LogoutFooter = ({ onCancel }: { onCancel: () => void}) => (
  <Box justifyContent="end" display="flex" direction="row" alignItems="center">
    <Box paddingX={1} marginRight={2}>
      <Button text="Cancel" inline onClick={onCancel} />
    </Box>
    <Box paddingX={1}>
      <Button type="submit" color="red" inline text="Logout" />
    </Box>
  </Box>
)

export default LogoutModal;