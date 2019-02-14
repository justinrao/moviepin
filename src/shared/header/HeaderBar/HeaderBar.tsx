import { Box, Heading, Icon, IconButton, Text } from "gestalt";
import React, { ReactChild } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { User } from "../../../models/user";
import "./HeaderBar.css";

interface Props extends RouteComponentProps {
  user: User | null;
  onProfileClicked?: () => void;
  children: ReactChild;
}

const HeaderBar = ({ user, history, children, onProfileClicked }: Props) => (
  <div className="header">
    <Box color="white" shape="roundedTop" paddingX={4} display="flex" direction="row" alignItems="center" paddingY={2} >
      <Box padding={3}>
        <div onClick={() => history.push("/")} style={{ cursor: 'pointer' }} >
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
          <IconButton
            accessibilityLabel="Profile"
            icon={user ? "person" : "people"}
            size="md"
            onClick={onProfileClicked} />
        </Box>
      </Box>
    </Box>
  </div>

);

export default withRouter(HeaderBar);
