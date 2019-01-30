import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';


interface Props {
    // opened: boolean,
    setOpened: (opened: boolean) => void;
}
const LoginModalContainer = ({setOpened}: Props) => {

    return (
        <LoginModal onDismiss={() => setOpened(false)}/>
    )
}

export default LoginModalContainer;