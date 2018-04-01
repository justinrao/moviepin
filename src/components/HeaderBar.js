import React, { Component } from 'react';
import {Box, Icon, SearchField, IconButton} from "gestalt";


class HeaderBar extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
          <Box padding={3}>
            <Icon
              icon="globe"
              color="red"
              size={20}
              accessibilityLabel="moviepin"
            />
          </Box>
          <Box flex="grow" paddingX={2}>
            <SearchField
              accessibilityLabel="Search Field"
              id="searchField"
              onChange={({ value }) => this.props.onSearchChanged( value )}
              placeholder="Search and explore movies"
              value={this.props.search}
            />
          </Box>
          <Box paddingX={2}>
            <IconButton accessibilityLabel="Profile" icon="person" size="md" />
          </Box>
        </Box>
      );
    }
  }

export default HeaderBar;
