import React, {Component} from 'react';
import {Container, Box} from 'gestalt';
import HeaderBar from '../../../shared/components/HeaderBar/HeaderBar';
import MovieFlow from './MovieFlow';
import '../HomePage.css';

interface State {
  // search: string
}

interface Props{
  search: string;
}

class HomePage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // this.state = {search: 'Hero'};
  }

  // handleSearchChanged = (search: string) => {
  //   this.setState({search});
  // };

  render() {
    return (
      <Box color="lightGray" >
        <MovieFlow search={this.props.search}/>
     </Box>
    );
  }
}

export default HomePage;
