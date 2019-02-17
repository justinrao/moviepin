
import 'gestalt/dist/gestalt.css';
import { Auth } from 'aws-amplify';
import { Container, Box } from 'gestalt';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { User } from './models/user';
import BoardPage from './pages/board/containers/BoardPage';
import HomePage from './pages/home/containers/HomePage';
import MoviePage from './pages/movie/containers/MoviePage';
import HeaderBar from './shared/header/HeaderBar/HeaderBar';
import LoginModalContainer from './shared/login/containers/LoginModalContainer';
import LogoutModalContainer from './shared/logout/containers/LogoutModalContainer';
import { SearchBar } from './shared/search/SearchBar';
import HeaderBarContainer from './shared/header/HeaderBarContainer/HeaderBarContainer';

const App = () => {

  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [logoutModalOpened, setLogoutModalOpened] = useState(false);
  const [search, setSearch] = useState('Hero');
  const [user, setUser] = useState<User | null>(null);

  const loadUser = async () => {
    const user: User = {
      cognitoUser: await Auth.currentAuthenticatedUser(),
      userInfo: await Auth.currentUserInfo()
    }
    console.log('relaod user:', user);
    setUser(user);
  };
  useEffect(() => { loadUser() }, []);

  return (
    <div style={{minWidth: '800px', maxWidth: '1024px',  margin: 'auto'}}>

      <HeaderBarContainer
        user={user}
        search={search}
        onSearchChanged={setSearch}
        onLoginClick={() => setLoginModalOpened(true)}
        onLogoutClick={() => setLogoutModalOpened(true)}
      ></HeaderBarContainer>
      <Box shape="roundedBottom">
        <div className="app-container">
          <Route exact path="/" component={() => <HomePage search={search} />} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/board" component={BoardPage} />
        </div>
      </Box>

      {loginModalOpened &&
        <LoginModalContainer
          onOpenChanged={(opened) => setLoginModalOpened(opened)}
          onUserAuthenticated={(user) => setUser(user)} />}
      {logoutModalOpened &&
        <LogoutModalContainer
          onOpenChanged={(opened) => setLogoutModalOpened(opened)}
          onUserLoggedOut={() => setUser(null)} />}
    </div>
  );
}

export default App;
