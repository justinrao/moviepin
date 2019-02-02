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

interface State {
  loginModalOpened: boolean;
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
    this.state = { loginModalOpened: false, search: 'Hero', user: DEFAULT_USER };

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

  handleSearchChanged = (search: string) => this.setState({ search });

  render() {
    return [
      <Container>
        <HeaderBar search={this.state.search}
          user={this.state.user}
          onSearchChanged={this.handleSearchChanged} 
          onProfileClicked={() => this.setState({loginModalOpened: true})}/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <HomePage search={this.state.search} />} />
            <Route path="/movie/:movieId" component={MoviePage} />
          </Switch>
        </BrowserRouter></Container>,
      this.state.loginModalOpened && 
        <LoginModalContainer 
          onOpenChanged={this.handleLoginModalSetOpened} 
          onUserAuthenticated={(user) => this.setState({user})}/>
    ];
  }
}

export default App;
