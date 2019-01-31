import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home/containers/HomePage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MoviePage from './pages/movie/containers/MoviePage';
import 'gestalt/dist/gestalt.css';
import LoginModalContainer from './shared/login/containers/LoginModalContainer';
import LoginModal from './shared/login/components/LoginModal';
import HeaderBar from './shared/components/HeaderBar/HeaderBar';
import { Container } from 'gestalt';


interface State {
  loginModalOpened: boolean;
  search: string;
}

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { loginModalOpened: false, search: 'Hero' };
  }

  handleLoginModalSetOpened = () => this.setState({ loginModalOpened: false });

  handleSearchChanged = (search: string) => this.setState({ search });

  render() {
    return [
      <Container>
        <HeaderBar search={this.state.search}
          onSearchChanged={this.handleSearchChanged} 
          onProfileClicked={() => this.setState({loginModalOpened: true})}/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <HomePage search={this.state.search} />} />
            <Route path="/movie/:movieId" component={MoviePage} />
          </Switch>
        </BrowserRouter></Container>,
      this.state.loginModalOpened && 
        <LoginModalContainer onOpenChanged={this.handleLoginModalSetOpened} />
    ];
  }
}

export default App;
