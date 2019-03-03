import React from 'react';
import FormField from '../../../core/ui/FormField/FormField';
import { Box, Text, Link } from 'gestalt';

interface Props {
  onFormValueChange: (key: string, value: string) => void;
  onSignUpClicked: () => void;
}

const LoginForm = ({ onFormValueChange, onSignUpClicked }: Props) => (
  <Box>
    <Box >
      <FormField label="Email" field="email" type="email"
        onChange={v => onFormValueChange('email', v)} />
      <FormField label="Password" field="password" type="password"
        onChange={v => onFormValueChange('password', v)} />
    </Box>
    <Box display="flex" paddingX={4} paddingY={2} marginTop={1}> 
      <Text>If you don't have an account, please
        <Text color="red" inline={true}>
          <Link href="#" onClick={onSignUpClicked}> sign-up</Link>
        </Text>
        .
      </Text>
    </Box>
  </Box>
)

export default LoginForm