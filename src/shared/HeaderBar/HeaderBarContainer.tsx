import React from 'react';
import { RouteComponentProps, withRouter, Route } from "react-router";
import HeaderBar from "./HeaderBar";
import { User } from "../../models/user";
import { SearchBar } from "../SearchBar/SearchBar";
import Menu from '../../core/ui/Menu/Menu';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Dispatch } from 'redux';
import { openAuthLoginDialog, openAuthLogoutDialog } from '../../store/ui/auth-dialog/actions';
import { searchMovies, updateSearchText } from '../../store/movie-search/actions';

interface Props extends RouteComponentProps {
  user?: User;
  onLogoutClick: () => void;
  onLoginClick: () => void;
  search: string;
  onSearchChanged: (search: string) => void;
}

const HeaderBarContainer = ({ history, user, search, onSearchChanged, onLogoutClick, onLoginClick }: Props) => {

  const menuDefs = [
    { key: 'favorite', label: 'My Favorite', onClick: () => { history.push('/board') } },
    { key: 'logout', label: 'Log Out', onClick: onLogoutClick }
  ];

  const menu = <Menu menuDefs={menuDefs} />;
  const onHomeClick = () => { history.push('/') };
  const onFavoriteClick = () => { history.push('/board') };

  return (
    <HeaderBar {...{ user, menu, onLoginClick, onHomeClick, onFavoriteClick }}>
      <Route exact path="/" render={() =>
        <SearchBar search={search} onSearchChanged={onSearchChanged} />
      } />
    </HeaderBar>
  )
}

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
  search: state.movieSearch.search,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoginClick: () => dispatch(openAuthLoginDialog()),
  onLogoutClick: () => dispatch(openAuthLogoutDialog()),
  onSearchChanged: (search: string) => dispatch(updateSearchText(search))
})

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(withRouter(HeaderBarContainer));