
import 'gestalt/dist/gestalt.css';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AuthDialogContainer from './pages/auth/AuthDialog/AuthDialogContainer';
import BoardPage from './pages/board/BoardPage/BoardPage';
import HomePage from './pages/home/HomePage/HomePage';
import MoviePage from './pages/movie/MoviePage/MoviePage';
import Footer from './shared/Footer/Footer';
import HeaderBarContainer from './shared/HeaderBar/HeaderBarContainer';
import NotificationToast from './shared/NotificationToast/NotificationToast';


const App = () => (
  <div className="app">
    <HeaderBarContainer></HeaderBarContainer>
      <div className="app-container">
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/movie/:movieId" component={MoviePage} />
        <Route path="/board" render={() => <BoardPage />} />
      </div>
    <Footer></Footer>
    <NotificationToast></NotificationToast>
    <AuthDialogContainer />
  </div> 
);

export default App;
