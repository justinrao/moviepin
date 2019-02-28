
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import './App.css';
import AuthDialogContainer from './pages/auth/containers/AuthDialogContainer';
import BoardPage from './pages/board/containers/BoardPage';
import HomePage from './pages/home/containers/HomePage';
import MoviePage from './pages/movie/containers/MoviePage';
import HeaderBarContainer from './shared/header/HeaderBarContainer/HeaderBarContainer';
import { loadUserMovies } from './store/user-movie/actions';


interface Props {
  init: () => void
}

const App = ({ init }: Props) => {

  useEffect(() => { init() }, []);

  return (
    <div style={{ maxWidth: '1024px', margin: 'auto' }}>

      <HeaderBarContainer></HeaderBarContainer>
      <Box shape="roundedBottom">
        <div className="app-container">
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/board" render={() => <BoardPage />} />
        </div>
      </Box>
      <AuthDialogContainer />
    </div>
  );
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: () => dispatch(loadUserMovies())
})

export default connect(null, mapDispatchToProps, null, { pure: false })(App)
