import React from 'react';
import FormField from '../../../core/ui/FormField/FormField';

interface Props {
  onFormValueChange: (key: string, value: string) => void;
}
const SignUpForm = ({ onFormValueChange }: Props) => (
  <div>
    <FormField label="Email" field="email" type="email"
      onChange={v => onFormValueChange('email', v)} />
    <FormField label="Password" field="password" type="password"
      onChange={v => onFormValueChange('password', v)} />
    <FormField label="Confirm Password" field="confirmPassword" type="password"
      onChange={v => onFormValueChange('confirmPassword', v)} />
  </div>
)

export default SignUpForm