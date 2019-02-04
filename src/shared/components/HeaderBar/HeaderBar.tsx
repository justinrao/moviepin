import { Box, Icon, IconButton, SearchField, Text } from "gestalt";
import React from 'react';
import { User } from '../../model/User.model';

interface Props {
  search?: string;
  user: User | null;
  onSearchChanged?: (e: string) => void;
  onProfileClicked?: () => void;
}

const HeaderBar = ({ search = '', user, onSearchChanged, onProfileClicked }: Props) => (
  <Box color="white" shape="roundedTop" padding={3} display="flex" direction="row" alignItems="center">
    <Box padding={3}>
      <Icon
        color="red"
        icon="globe"
        size={20}
        accessibilityLabel="moviepin">
      </Icon>
    </Box>
    <Box flex="grow" paddingX={2}>
      <SearchField
        accessibilityLabel="Search Field"
        id="searchField"
        onChange={({ value }) => onSearchChanged && onSearchChanged(value)}
        placeholder="Search and explore movies"
        value={search}
      />
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

export default HeaderBar;
