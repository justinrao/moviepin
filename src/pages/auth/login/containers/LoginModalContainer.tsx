import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logInUser } from '../../../../store/auth/actions';
import { RootState } from '../../../../store/reducers';
import LoginModal from '../components/LoginModal';
import { closeLoginDialog } from '../../../../store/ui/actions';


interface Props {
  opened: boolean;
  onDismiss: () => void;
  onSubmit: (value: LoginFormValues) => void;
  error: string | undefined;
}

interface LoginFormValues {
  email: string;
  password: string;
}

const INIT_FORM_VALUES = { email: '', password: '' };


const LoginModalContainer = ({ opened, onDismiss, onSubmit, error }: Props) => {

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
    <div>
      {opened && <LoginModal
        error={error}
        onDismiss={onDismiss}
        onSubmit={validAndSubmitForm}
        onFormValueChange={handleFormValueChange} />}
    </div> 
  )
}


const mapStateToProps = (state: RootState) => ({
  opened: state.ui.loginDialogOpened,
  loading: state.auth.loading,
  error: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (form: LoginFormValues) => dispatch(logInUser(form.email, form.password)),
  onDismiss: () => dispatch(closeLoginDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);