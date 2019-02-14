
import 'gestalt/dist/gestalt.css';
import { Auth } from 'aws-amplify';
import { Container } from 'gestalt';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { User } from './models/user';
import { BoardPage } from './pages/board/containers/BoardPage';
import HomePage from './pages/home/containers/HomePage';
import MoviePage from './pages/movie/containers/MoviePage';
import HeaderBar from './shared/header/HeaderBar/HeaderBar';
import LoginModalContainer from './shared/login/containers/LoginModalContainer';
import LogoutModalContainer from './shared/logout/containers/LogoutModalContainer';
import { SearchBar } from './shared/search/SearchBar';

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

  const handleProfileClicked = () => {
    const setModalOpened = user ? setLogoutModalOpened : setLoginModalOpened;
    setModalOpened(true);
  }

  return (
    <Container>
          <HeaderBar user={user} onProfileClicked={handleProfileClicked} >
            <Route exact path="/" component={() =>
              <SearchBar search={search} onSearchChanged={search => setSearch(search)} />
            } />
          </HeaderBar>

        <div className="app-container">
          <Route exact path="/" component={() => <HomePage search={search} />} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/board" component={BoardPage} />
        </div>

      {loginModalOpened &&
        <LoginModalContainer
          onOpenChanged={(opened) => setLoginModalOpened(opened)}
          onUserAuthenticated={(user) => setUser(user)} />}
      {logoutModalOpened &&
        <LogoutModalContainer
          onOpenChanged={(opened) => setLogoutModalOpened(opened)}
          onUserLoggedOut={() => setUser(null)} />}
    </Container>
  );
}

export default App;
