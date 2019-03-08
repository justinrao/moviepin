import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormModal from '../../../core/ui/FormModal/FormModal';
import { signUp } from '../../../store/auth/actions';
import { RootState } from '../../../store/reducers';
import { closeAuthDialog, openAuthLoginDialog } from '../../../store/ui/auth-dialog/actions';
import SignUpForm from './SignUpForm';


interface Props {
  onDismiss: () => void;
  onSubmit: (value: SignUpFormValues) => void;
  onSwitchToLogin: () => void;
  error: string | undefined;
}

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const INIT_FORM_VALUES = { email: '', password: '', confirmPassword: ''};

const LoginModalContainer = ({ onDismiss, onSubmit, onSwitchToLogin, error }: Props) => {

  const [formValues, setFormValues] = useState<SignUpFormValues>(INIT_FORM_VALUES);

  const [validationError, setValidationError] = useState<string>('');
  const validAndSubmitForm = () => {


    // todo: switch to use formik & yup for form validation
    if (!formValues.email || formValues.email.length === 0) {
      setValidationError('Email cannot be empty');
    } else if (!formValues.password || formValues.password.length === 0) {
      setValidationError('Password cannot be empty');
    } else if (formValues.password !== formValues.confirmPassword) {
      setValidationError('Confirm password must be the same as password');
    } else {
      onSubmit(formValues);
    }
  }

  const handleFormValueChange = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value })
  }

  return (
      <FormModal
        title="Sign-Up MoviePin"
        error={error || validationError}
        onDismiss={onDismiss}
        onSubmit={validAndSubmitForm}
        submitLabel="Sign Up">
        <SignUpForm onFormValueChange={handleFormValueChange} 
                    onLoginClicked={onSwitchToLogin}/>
      </FormModal>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  error: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (form: SignUpFormValues) => dispatch(signUp(form.email, form.password)),
  onDismiss: () => dispatch(closeAuthDialog()),
  onSwitchToLogin: () => dispatch(openAuthLoginDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);