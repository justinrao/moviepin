import { Box, Button, Modal, Text } from 'gestalt';
import React, { FormEvent, ReactChild } from 'react';
import ModalFooter from './FormModalFooter';

interface Props {
  title: string;
  submitLabel: string;
  error?: string;
  loading?: boolean;
  onDismiss: () => void;
  onSubmit: () => void;
  children: ReactChild
}

const FormModal = ({ title, error, loading, onDismiss, onSubmit, children, submitLabel }: Props) => {

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Modal
        accessibilityCloseLabel="Close"
        accessibilityModalLabel={title + " Modal"}
        heading={title}
        onDismiss={onDismiss}
        footer={<ModalFooter {...{error, loading, onCancel: onDismiss, submitLabel}}/>}
        size="md">
        <Box display="flex" direction="column" position="relative" padding={4}>
        {children}
        </Box>
      </Modal>
    </form>
  )
}

export default FormModal;