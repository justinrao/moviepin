
import React from 'react';
import { Box, Heading, Text } from 'gestalt';

interface Props {
  children: string;
}

const SingleMessage = ({ children }: Props) => (
  <Box padding={6} display="flex" justifyContent="center" 
  direction="column" minHeight="800px">
    <Box alignSelf="center" flex="none">
      <Text size="xl">
        {children}
      </Text>
    </Box>
  </Box>)

export default SingleMessage;