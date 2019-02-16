import React from 'react';
import { RouteComponentProps, withRouter, Route } from "react-router";
import HeaderBar from "../HeaderBar/HeaderBar";
import { User } from "../../../models/user";
import { SearchBar } from "../../search/SearchBar";
import Menu from "../../menu/Menu/Menu";

interface Props extends RouteComponentProps {
  user: User | null;
  search: string;
  onSearchChanged: (search: string) => void;
  onLogoutClick: () => void;
  onLoginClick: () => void;
}

const HeaderBarContainer = ({ history, user, search, onSearchChanged, onLogoutClick, onLoginClick }: Props) => {

  const menuDefs = [
    { key: 'favorite', label: 'My Favorite', onClick: () => { history.push('/board') } },
    { key: 'logout', label: 'Log Out', onClick: onLogoutClick }
  ];

  const menu = <Menu menuDefs={menuDefs}/>;
  const onHomeClick = () => { history.push('/')};

  return (
    <HeaderBar {...{user, menu, onLoginClick, onHomeClick }}>
      <Route exact path="/" render={() =>
        <SearchBar search={search} onSearchChanged={onSearchChanged} />
      } />
    </HeaderBar>
  )
}

export default withRouter(HeaderBarContainer);