import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logInUser } from '../../../store/auth/actions';
import { RootState } from '../../../store/reducers';
import FormModal from '../../../core/ui/FormModal/FormModal';
import { closeAuthDialog } from '../../../store/ui/actions';
import LoginForm from '../components/LoginForm';


interface Props {
  onDismiss: () => void;
  onSubmit: (value: LoginFormValues) => void;
  error: string | undefined;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const INIT_FORM_VALUES = { email: '', password: '' };


const LoginModalContainer = ({ onDismiss, onSubmit, error }: Props) => {

  const [formValues, setFormValues] = useState<LoginFormValues>(INIT_FORM_VALUES);

  const validAndSubmitForm = () => {

    // todo: more validation
    if (formValues.email && formValues.email.length > 0
      && formValues.password && formValues.password.length > 0) {
      onSubmit(formValues);
    }
  }

  const handleFormValueChange = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value })
  }

  return (
      <FormModal
        error={error}
        onDismiss={onDismiss}
        onSubmit={validAndSubmitForm}
        submitLabel="Login">
        <LoginForm onFormValueChange={handleFormValueChange} />
      </FormModal>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  error: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (form: LoginFormValues) => dispatch(logInUser(form.email, form.password)),
  onDismiss: () => dispatch(closeAuthDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);