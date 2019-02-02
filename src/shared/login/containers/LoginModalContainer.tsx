import React, { useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import { Auth } from 'aws-amplify';
import { User } from '../../model/User.model';


interface Props {
  // opened: boolean,
  onOpenChanged: (opened: boolean) => void;
  onUserAuthenticated: (user: User) => void;
}

interface LoginFormValues {
  email?: string;
  password?: string;
}

const LoginModalContainer = ({ onOpenChanged, onUserAuthenticated }: Props) => {

  const [formValues, setFormValues] = useState<LoginFormValues>({});
  const [submitValues, setSubmitValues] = useState<LoginFormValues>({});
  const [error, setError] = useState(null);

  const signIn = async () => {
    console.log('submitValues:', submitValues);
    const { email, password } = submitValues;
    if (email && password) {
      setError(null);
      try {
        
        const cognitoUser = await Auth.signIn(email, password);
        const userInfo = await Auth.currentUserInfo();
        const user = {cognitoUser, userInfo};
        console.log('user signed in:', user);
        onUserAuthenticated(user);
        onOpenChanged(false);
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    }
  }

  useEffect(() => {
    signIn();
  }, [submitValues]);

  const validAndSubmitForm = () => {

    console.log('validAndSubmitForm');
    // todo: more validation
    if (formValues.email && formValues.email.length > 0
      && formValues.password && formValues.password.length > 0) {
      setSubmitValues(formValues);
    }
    
  }

  const handleFormValueChange = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value })
  }

  return (
    <LoginModal
      error={error}
      onDismiss={() => onOpenChanged(false)}
      onSubmit={validAndSubmitForm}
      onFormValueChange={handleFormValueChange} />
  )
}

export default LoginModalContainer;