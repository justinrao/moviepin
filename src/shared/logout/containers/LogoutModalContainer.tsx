import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import LogoutModal from '../components/LogoutModal';


interface Props {
  // opened: boolean,
  onOpenChanged: (opened: boolean) => void;
  onUserLoggedOut: () => void;
}


const LogoutModalContainer = ({ onOpenChanged, onUserLoggedOut }: Props) => {

  const [error, setError] = useState(null);
  const [logout, setLogout] = useState(false);

  const logOut = async () => {
    setError(null);
    try {

      await Auth.signOut();
      onUserLoggedOut();
      onOpenChanged(false);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    if (logout) {
      logOut();
    }
  }, [logout]);

  return (
    <LogoutModal
      onDismiss={() => onOpenChanged(false)}
      onSubmit={() => setLogout(true)}/>
  )
}

export default LogoutModalContainer;