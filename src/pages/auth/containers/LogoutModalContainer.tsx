import { Text } from 'gestalt';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormModal from '../../../core/ui/FormModal/FormModal';
import { logOut } from '../../../store/auth/actions';
import { RootState } from '../../../store/reducers';
import { closeAuthDialog } from '../../../store/ui/auth-dialog/actions';
import LogoutMessage from '../components/LogoutMessage';


interface Props {
  onSubmit: () => void;
  onDismiss: () => void;
}

const LogoutModalContainer = ({ onSubmit, onDismiss }: Props) =>  (
     <FormModal
     title="Logout MoviePin"
      onDismiss={onDismiss}
      onSubmit={onSubmit} 
      submitLabel="Logout">
      <LogoutMessage/>
    </FormModal>
)

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  error: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: () => dispatch(logOut()),
  onDismiss: () => dispatch(closeAuthDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModalContainer);