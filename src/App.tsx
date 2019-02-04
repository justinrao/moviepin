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
import { User } from './shared/model/User.model';
import { Auth } from 'aws-amplify';
import LogoutModal from './shared/logout/components/LogoutModal';
import LogoutModalContainer from './shared/logout/containers/LogoutModalContainer';

interface State {
  loginModalOpened: boolean;
  logoutModalOpened: boolean;
  search: string;
  user: User | null;
}


    const DEFAULT_USER: User | null = null;
    // const DEFAULT_USER: User = {
      
    //   userInfo: {
    //     attributes: {
    //       email: 'test@test.com'
    //     }
    //   }
    // }

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { loginModalOpened: false, logoutModalOpened: false, search: 'Hero', user: DEFAULT_USER };

  }

  componentDidMount() {

    const loadUser = async() => {

      const user: User  = {
        cognitoUser: await Auth.currentAuthenticatedUser(),
        userInfo: await Auth.currentUserInfo()
      }
  
      console.log('relaod user:', user);
      this.setState({user});
    };

    loadUser();
  }

  handleLoginModalSetOpened = () => this.setState({ loginModalOpened: false });

  handleLogoutModalSetOpened = () => this.setState({ logoutModalOpened: false });

  handleSearchChanged = (search: string) => this.setState({ search });

  handleProfileClicked = () => {
    if (this.state.user) {
      this.setState({logoutModalOpened: true});
    } else {
      this.setState({loginModalOpened: true});
    }
  }

  render() {
    return [
      <Container>
        <HeaderBar search={this.state.search}
          user={this.state.user}
          onSearchChanged={this.handleSearchChanged} 
          onProfileClicked={this.handleProfileClicked}/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <HomePage search={this.state.search} />} />
            <Route path="/movie/:movieId" component={MoviePage} />
          </Switch>
        </BrowserRouter></Container>,
      this.state.loginModalOpened && 
        <LoginModalContainer 
          onOpenChanged={this.handleLoginModalSetOpened} 
          onUserAuthenticated={(user) => this.setState({user})}/>,
      this.state.logoutModalOpened && 
        <LogoutModalContainer 
          onOpenChanged={this.handleLogoutModalSetOpened} 
          onUserLoggedOut={() => this.setState({user: null})}/>
    ];
  }
}

export default App;
