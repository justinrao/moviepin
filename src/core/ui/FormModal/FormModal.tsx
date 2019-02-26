import { Box, Button, Modal, Text } from 'gestalt';
import React, { FormEvent, ReactChild } from 'react';
import ModalFooter from './FormModalFooter';

interface Props {
  submitLabel: string;
  error?: string;
  onDismiss: () => void;
  onSubmit: () => void;
  children: ReactChild
}

const FormModal = ({ error, onDismiss, onSubmit, children, submitLabel }: Props) => {

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
        footer={<ModalFooter {...{error, onCancel: onDismiss, submitLabel}}/>}
        size="md">
        <Box display="flex" direction="column" position="relative" padding={4}>
        {children}
        </Box>
      </Modal>
    </form>
  )
}

export default FormModal;