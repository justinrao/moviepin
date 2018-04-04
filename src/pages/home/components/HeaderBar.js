import React from 'react';
import {Box, SearchField, IconButton, Icon} from "gestalt";


const HeaderBar = ({search, onSearchChanged}) =>  (
    <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
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
          onChange={({value}) => onSearchChanged(value)}
          placeholder="Search and explore movies"
          value={search}
        />
      </Box>
      <Box paddingX={2}>
        <IconButton accessibilityLabel="Profile" icon="person" size="md"/>
      </Box>
    </Box>
  );

export default HeaderBar;
