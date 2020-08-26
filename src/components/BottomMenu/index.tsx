import React from "react";

import { Container, HomeIcon, SearchIcon, BellIcon, EmailIcon } from "./styles";
import { NavLink } from "react-router-dom";

const BottomMenu: React.FC = () => {
  return (
    <Container>
      <NavLink exact to="/" activeClassName="selected">
        <HomeIcon />
      </NavLink>
      <NavLink to="/explore" activeClassName="selected">
        <SearchIcon />
      </NavLink>
      <NavLink to="/notifications" activeClassName="selected">
        <BellIcon />
      </NavLink>
      <NavLink to="/messages" activeClassName="selected">
        <EmailIcon />
      </NavLink>
    </Container>
  );
};

export default BottomMenu;
