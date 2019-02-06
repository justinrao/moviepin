import { Auth } from 'aws-amplify';
import { Container } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/containers/HomePage';
import MoviePage from './pages/movie/containers/MoviePage';
import HeaderBar from './shared/header/HeaderBar/HeaderBar';
import LoginModalContainer from './shared/login/containers/LoginModalContainer';
import LogoutModalContainer from './shared/logout/containers/LogoutModalContainer';
import { User } from './models/user';
import { SearchBar } from './shared/search/SearchBar';

interface State {
  loginModalOpened: boolean;
  logoutModalOpened: boolean;
  search: string;
  user: User | null;
}

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { loginModalOpened: false, logoutModalOpened: false, search: 'Hero', user: null };
  }

  componentDidMount() {

    const loadUser = async () => {

      const user: User = {
        cognitoUser: await Auth.currentAuthenticatedUser(),
        userInfo: await Auth.currentUserInfo()
      }

      console.log('relaod user:', user);
      this.setState({ user });
    };

    loadUser();
  }

  handleLoginModalSetOpened = () => this.setState({ loginModalOpened: false });

  handleLogoutModalSetOpened = () => this.setState({ logoutModalOpened: false });

  handleSearchChanged = (search: string) => this.setState({ search });

  handleProfileClicked = () => {
    if (this.state.user) {
      this.setState({ logoutModalOpened: true });
    } else {
      this.setState({ loginModalOpened: true });
    }
  }

  render() {
    return [
      <Container>
        <BrowserRouter>
          <div>
            <HeaderBar user={this.state.user} onProfileClicked={this.handleProfileClicked} >
              <Route exact path="/" component={() =>
                <SearchBar search={this.state.search} onSearchChanged={search => this.setState({ search })} />
              } />
            </HeaderBar>
            <Route exact path="/" component={() => <HomePage search={this.state.search} />} />
            <Route path="/movie/:movieId" component={MoviePage} />
          </div>
        </BrowserRouter>
      </Container>,
      this.state.loginModalOpened &&
      <LoginModalContainer
        onOpenChanged={this.handleLoginModalSetOpened}
        onUserAuthenticated={(user) => this.setState({ user })} />,
      this.state.logoutModalOpened &&
      <LogoutModalContainer
        onOpenChanged={this.handleLogoutModalSetOpened}
        onUserLoggedOut={() => this.setState({ user: null })} />
    ];
  }
}

export default App;
