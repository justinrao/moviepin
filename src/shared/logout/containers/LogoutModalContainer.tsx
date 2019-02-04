import React, { useState, useEffect } from 'react';
import LoginModal from '../components/LogoutModal';
import { Auth } from 'aws-amplify';
import { User } from '../../model/User.model';
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
      console.log(e);
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