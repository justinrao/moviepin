import { Text } from 'gestalt';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormModal from '../../../../core/ui/FormModal/FormModal';
import { logOutUser } from '../../../../store/auth/actions';
import { RootState } from '../../../../store/reducers';
import { closeLogoutDialog } from '../../../../store/ui/actions';


interface Props {
  opened: boolean,
  onSubmit: () => void;
  onDismiss: () => void;
}


const LogoutModalContainer = ({ opened, onSubmit, onDismiss }: Props) =>  (
  <div>
    {opened && <FormModal
      onDismiss={onDismiss}
      onSubmit={onSubmit} 
      submitLabel="Logout">
      <Text size="lg">
        You will be logged out of MoviePin. Would you like to proceed?
      </Text>
    </FormModal>}
  </div>
)

const mapStateToProps = (state: RootState) => ({
  opened: state.ui.logoutDialogOpened,
  loading: state.auth.loading,
  error: state.auth.errorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: () => dispatch(logOutUser()),
  onDismiss: () => dispatch(closeLogoutDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModalContainer);