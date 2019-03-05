import React from 'react';
import { Toast, Box } from 'gestalt';
import { RootState } from '../../store/reducers';
import { Notification } from '../../store/ui/notification/reducer';
import { connect } from 'react-redux';

interface Props {
  notification?: Notification;
}
const NotificationToast = ({ notification }: Props) => (
  <div>{
    notification && <Box
      fit
      dangerouslySetInlineStyle={{
        __style: {
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
        },
      }}
      paddingX={1}
      position='fixed'
    >
      <Toast color="orange"
        text={[notification.line1, notification.line2]}
      />
    </Box>}
  </div>);

const mapStateToProps = (state: RootState) => ({
  notification: state.ui.notification.notification
})

export default connect(mapStateToProps)(NotificationToast);