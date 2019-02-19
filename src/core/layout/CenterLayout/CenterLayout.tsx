
import { Box } from 'gestalt';
import React, { ReactChild } from 'react';

interface Props {
  children: ReactChild;
}

const CenterLayout = ({ children }: Props) => (
  <Box padding={6} display="flex" justifyContent="center" 
  direction="column" minHeight="800px">
    <Box alignSelf="center" flex="none">
        {children}
    </Box>
  </Box>)

export default CenterLayout;