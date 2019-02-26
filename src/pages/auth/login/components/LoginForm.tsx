import React from 'react';
import FormField from '../../../../core/ui/FormField/FormField';

interface Props {
  onFormValueChange: (key: string, value: string) => void;
}
const LoginForm = ({ onFormValueChange }: Props) => (
  <div>
    <FormField label="Email" field="email" type="email"
      onChange={v => onFormValueChange('email', v)} />
    <FormField label="Password" field="password" type="password"
      onChange={v => onFormValueChange('password', v)} />
  </div>
)

export default LoginForm