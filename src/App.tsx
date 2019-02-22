
import { Auth } from 'aws-amplify';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import './App.css';
import { User } from './models/user';
import BoardPage from './pages/board/containers/BoardPage';
import HomePage from './pages/home/containers/HomePage';
import MoviePage from './pages/movie/containers/MoviePage';
import HeaderBarContainer from './shared/header/HeaderBarContainer/HeaderBarContainer';
import { loadUserMovies } from './store/user-movie/actions';
import LoginModalContainer from './pages/auth/login/containers/LoginModalContainer';
import LogoutModalContainer from './pages/auth/logout/containers/LogoutModalContainer';


interface Props {
  init: () => void
}

const App = ({ init }: Props) => {

  const [search, setSearch] = useState('Hero');
  
  useEffect(() => { init() }, []);

  return (
    <div style={{ maxWidth: '1024px', margin: 'auto' }}>

      <HeaderBarContainer
        search={search}
        onSearchChanged={setSearch}
      ></HeaderBarContainer>
      <Box shape="roundedBottom">
        <div className="app-container">
          <Route exact path="/" component={() => <HomePage search={search} />} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/board" component={BoardPage} />
        </div>
      </Box>
      <LoginModalContainer />
      <LogoutModalContainer />
    </div>
  );
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: () => dispatch(loadUserMovies())
})

export default connect(null, mapDispatchToProps, null, { pure: false })(App)
