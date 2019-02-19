
import React from 'react';
import { Box, Heading, Text } from 'gestalt';
import CenterLayout from '../CenterLayout/CenterLayout';

interface Props {
  children: string;
}

const SingleMessage = ({ children }: Props) => (
  <CenterLayout>
    <Text size="xl">
      {children}
    </Text>
  </CenterLayout>)

export default SingleMessage;