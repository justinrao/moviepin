import { Box, Icon, IconButton, SearchField, Text, Heading } from "gestalt";
import React, { ReactChild } from 'react';
import { User } from '../../model/User.model';
import { History } from 'history';
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  search?: string;
  user: User | null;
  children: ReactChild;
  onProfileClicked?: () => void;
}

const HeaderBar = ({ search = '', user, history, children, onProfileClicked }: Props) => (
  <Box color="white" shape="roundedTop" padding={4} display="flex" direction="row" alignItems="center" paddingY={1}>
    <Box padding={3}>
    <div onClick={() => history.push("/")} style={{cursor: 'pointer'}} >
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

);

export default withRouter(HeaderBar);
