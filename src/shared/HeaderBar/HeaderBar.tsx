import { Box, Flyout, Heading, Icon, IconButton, Text, Sticky } from "gestalt";
import React, { ReactChild, useRef, useState } from 'react';
import { User } from "../../models/user";
import "./HeaderBar.css";

interface Props {
  user?: User;
  onLoginClick?: () => void;
  onHomeClick?: () => void;
  onFavoriteClick?: () => void;
  children: ReactChild;
  menu: ReactChild;
}

const HeaderBar = ({ user, onHomeClick, onLoginClick, onFavoriteClick, menu, children }: Props) => {

  const profileRef = useRef<any>(null);
  const [profileMenuOpened, setProfileMenuOpened] = useState(false);

  return (
    <div className="header">
      <Box color="white" shape="roundedTop" paddingX={4} paddingY={3} display="flex" direction="row" alignItems="center" >
        <HeaderBarHome onClick={onHomeClick}></HeaderBarHome>
        <Box flex="grow" paddingX={3}>
          {children}
        </Box>
          <Box paddingX={2} display="flex">
          {user && user.userInfo &&
            <Box alignSelf="center" display="none" mdDisplay="block" lgDisplay="block" >
              <Text>{user.userInfo.attributes.email}</Text>
            </Box>
          }
          {user && user.userInfo &&
            <Box >
              <IconButton
                accessibilityLabel="My Favorite"
                bgColor="white"
                icon="heart"
                iconColor="red"
                onClick={onFavoriteClick}
              />
            </Box>
          }
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


const HeaderBarHome = ({ onClick }: { onClick?: () => void }) => (
  <div onClick={onClick} className="header-home">
    <Box display="flex" direction="row" alignItems="center" padding={2}>
      <Box marginRight={4} >
        <Icon
          color="red"
          icon="globe"
          size={20}
          accessibilityLabel="moviepin">
        </Icon>
      </Box>
      <Box display="none" smDisplay="block">
        <Heading size="xs">Movie Pin</Heading>
      </Box>
    </Box>
  </div>)

export default HeaderBar;
