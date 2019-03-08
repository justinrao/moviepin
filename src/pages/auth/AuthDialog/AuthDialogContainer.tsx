import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { AuthDialogType } from '../../../store/ui/auth-dialog/reducer';
import LoginModalContainer from '../LoginModal/LoginModalContainer';
import LogoutModalContainer from '../LogoutModal/LogoutModalContainer';
import SignUpModalContainer from '../SignUpModal/SignUpModalContainer';


interface Props {
  type?: AuthDialogType;
  open: boolean;
}


const getAuthDialog = (type?: AuthDialogType): ComponentType => {
  switch (type) {
    case 'LOGIN':
      return LoginModalContainer;
    case 'SIGNUP':
      return SignUpModalContainer;
    default:
      return LogoutModalContainer;
  }
}

const AuthDialogContainer = ({ open, type }: Props) => {
  const AuthDialog = getAuthDialog(type);
  return (
    <div>
      {open && AuthDialog && <AuthDialog />}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  open: state.ui.authDialog.open,
  type: state.ui.authDialog.type
})

export default connect(mapStateToProps)(AuthDialogContainer);