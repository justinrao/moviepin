import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { AuthDialogType } from '../../../store/ui/reducer';
import LoginModalContainer from './LoginModalContainer';
import LogoutModalContainer from './LogoutModalContainer';


interface Props {
  type: AuthDialogType;
  open: boolean;
}


const getAuthDialog = (type: AuthDialogType): ComponentType => {
  switch(type) {
    case 'LOGIN':
      return LoginModalContainer;
    default:
      return LogoutModalContainer
  }
}

const AuthContainer = ({ open, type }: Props) => {

  const AuthDialog = getAuthDialog(type);
  return (
    <div>
      {open && <AuthDialog/>}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  open: state.ui.authDialog.open,
  type: state.ui.authDialog.type
})

export default connect(mapStateToProps)(LoginModalContainer);