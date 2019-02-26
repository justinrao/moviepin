
import React from 'react';
import { Box, Button, Text } from "gestalt";

interface Props {
   error?: string;
   onCancel: () => void;
   submitLabel: string;
}

const ModalFooter = ({ error, onCancel, submitLabel }: Props) => (
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
      <Button type="submit" color="red" inline text={submitLabel} />
    </Box>
  </Box>
)

export default ModalFooter