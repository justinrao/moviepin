
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AuthDialogContainer from './pages/auth/containers/AuthDialogContainer';
import BoardPage from './pages/board/containers/BoardPage';
import HomePage from './pages/home/containers/HomePage';
import MoviePage from './pages/movie/containers/MoviePage';
import HeaderBarContainer from './shared/header/HeaderBarContainer/HeaderBarContainer';
import Footer from './shared/footer/Footer';


const App = () => (
  <div className="app">
    <HeaderBarContainer></HeaderBarContainer>
      <div className="app-container">
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route path="/board" render={() => <BoardPage />} />
      </div>
    <Footer></Footer>
    <AuthDialogContainer />
  </div> 
);

export default App;
