import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logIn } from '../../../store/auth/actions';
import { RootState } from '../../../store/reducers';
import FormModal from '../../../core/ui/FormModal/FormModal';
import { closeAuthDialog, openAuthSignupDialog } from '../../../store/ui/auth-dialog/actions';
import LoginForm from './LoginForm';


interface Props {
  onDismiss: () => void;
  onSubmit: (value: LoginFormValues) => void;
  onSwitchToSignUp: () => void;
  error: string | undefined;
  loading: boolean;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const INIT_FORM_VALUES = { email: 'guest@example.com', password: 'P@ssw0rd1!' };


const LoginModalContainer = ({ onDismiss, onSubmit, loading, error, onSwitchToSignUp }: Props) => {

  const [formValues, setFormValues] = useState<LoginFormValues>(INIT_FORM_VALUES);

  const [validationError, setValidationError] = useState<string>('');

  const validAndSubmitForm = () => {

    // todo: switch to use formik & yup for form validation
    if (!formValues.email || formValues.email.length === 0) {
      setValidationError('Email cannot be empty');
    } else if (!formValues.password || formValues.password.length === 0) {
      setValidationError('Password cannot be empty');
    } else {
      onSubmit(formValues);
    }
  }

  const handleFormValueChange = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value })
  }

  return (
      <FormModal
        title="Login to MoviePin"
        error={error || validationError}
        loading={loading}
        onDismiss={onDismiss}
        onSubmit={validAndSubmitForm}
        submitLabel="Login">
        <LoginForm onFormValueChange={handleFormValueChange}
                  onSignUpClicked={onSwitchToSignUp} />
      </FormModal>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  error: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (form: LoginFormValues) => dispatch(logIn(form.email, form.password)),
  onDismiss: () => dispatch(closeAuthDialog()),
  onSwitchToSignUp: () => dispatch(openAuthSignupDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);