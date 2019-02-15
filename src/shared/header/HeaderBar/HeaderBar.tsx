import { Box, Flyout, Heading, Icon, IconButton, Text } from "gestalt";
import React, { ReactChild, useRef, useState } from 'react';
import { User } from "../../../models/user";
import "./HeaderBar.css";

interface Props {
  user: User | null;
  onLoginClick?: () => void;
  onHomeClick?: () => void;
  children: ReactChild;
  menu: ReactChild;
}

const HeaderBar = ({ user, onHomeClick, onLoginClick, menu, children }: Props) => {

  const profileRef = useRef<any>(null);
  const [profileMenuOpened, setProfileMenuOpened] = useState(false);
  console.log('menu', menu);

  return (<div className="header">
    <Box color="white" shape="roundedTop" paddingX={4} paddingY={3} display="flex" direction="row" alignItems="center" >
      <Box padding={3}>
        <div onClick={onHomeClick} >
          <Icon
            color="red"
            icon="globe"
            size={20}
            accessibilityLabel="moviepin">
          </Icon>
        </div>
      </Box>
      <Box>
        <Heading size="xs">Movie Pin</Heading>
      </Box>
      <Box flex="grow" paddingX={3}>
        {children}
      </Box>
      <Box paddingX={2} display="flex">
        <Box alignSelf="center">
          {user &&
            <Text>{user.userInfo.attributes.email}</Text>}
        </Box>
        <Box>
          {user
            ? <div ref={profileRef}>
              <IconButton
                accessibilityLabel="Profile"
                icon="person"
                size="md"
                onClick={() => setProfileMenuOpened(true)} />
            </div>
            : <IconButton
              accessibilityLabel="Login"
              icon="people"
              size="md"
              onClick={onLoginClick} />}
        </Box>
        {profileMenuOpened &&
          <div style={{ zIndex: 100 }} onClick={() => setProfileMenuOpened(false)}>
            <Flyout
              anchor={profileRef.current}
              idealDirection="down"
              onDismiss={() => setProfileMenuOpened(false)}
              size="sm">
              {menu}
            </Flyout></div>}
      </Box>

    </Box>
  </div>

  )
};


export default HeaderBar;
