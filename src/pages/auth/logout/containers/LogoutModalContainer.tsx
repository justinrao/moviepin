import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import LogoutModal from '../components/LogoutModal';
import { Dispatch } from 'redux';
import { RootState } from '../../../../store/reducers';
import { logOutUser } from '../../../../store/auth/actions';
import { closeLogoutDialog } from '../../../../store/ui/actions';
import { connect } from 'react-redux';


interface Props {
  opened: boolean,
  onSubmit: () => void;
  onDismiss: () => void;
}


const LogoutModalContainer = ({ opened, onSubmit, onDismiss }: Props) => {

  return (<div>
    {opened && <LogoutModal
      onDismiss={onDismiss}
      onSubmit={onSubmit} />}
  </div>
  )
}



const mapStateToProps = (state: RootState) => ({
  opened: state.ui.logoutDialogOpened,
  loading: state.auth.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: () => dispatch(logOutUser()),
  onDismiss: () => dispatch(closeLogoutDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModalContainer);