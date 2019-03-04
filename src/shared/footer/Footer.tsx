import React from 'react';
import { Box, Button, Avatar, Text } from 'gestalt';
import './Footer.css';
import avator from './avator.jpg';

const Footer = () => (
  <div className="footer">
    <Box
      color="white"
      shape="roundedBottom"
      paddingX={4}
      paddingY={3}
      display="flex"
      direction="row"
      alignItems="center" 
      justifyContent="end">
      <Box paddingX={0}>
        <Text size="xl">Created by Justin Rao</Text>
      </Box>
      <Box paddingX={2}>
        <Avatar
          size="md"
          src='/avator.jpg'
          name="Justin Rao"
        />
      </Box>
      <Box paddingX={2}>
        <Button text="Github" inline onClick={() => window.open('https://github.com/justinrao', '_blank')} />
      </Box>
      <Box paddingX={2}>
        <Button text="Linkedin" inline onClick={() => window.open('https://www.linkedin.com/in/justinrao/', '_blank')} />
      </Box>
    </Box>
  </div>
)

export default Footer;