import React from 'react';
import FormField from '../../../core/ui/FormField/FormField';
import { Box, Text, Link } from 'gestalt';

interface Props {
  onFormValueChange: (key: string, value: string) => void;
  onLoginClicked: () => void;
}
const SignUpForm = ({ onFormValueChange, onLoginClicked }: Props) => (
  <Box>
    <Box>
      <FormField label="Email" field="email" type="email"
        onChange={v => onFormValueChange('email', v)} />
      <FormField label="Password" field="password" type="password"
        onChange={v => onFormValueChange('password', v)} />
      <FormField label="Confirm Password" field="confirmPassword" type="password"
        onChange={v => onFormValueChange('confirmPassword', v)} />
    </Box>

    <Box display="flex" paddingX={4} paddingY={2} marginTop={1}>
      <Text>If you already have an account, please
        <Text color="red" inline={true}>
          <Link href="#" onClick={onLoginClicked}> login</Link>
        </Text>
        .
      </Text>
    </Box>
  </Box>
)

export default SignUpForm