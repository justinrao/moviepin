import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { AuthDialogType } from '../../../store/ui/reducer';
import LoginModalContainer from './LoginModalContainer';
import LogoutModalContainer from './LogoutModalContainer';
import SignUpModalContainer from './SignUpModalContainer';


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