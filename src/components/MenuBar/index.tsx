import React from "react";
import { NavLink } from "react-router-dom";

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  BookmarkIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";

import Button from "../Button";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <NavLink exact to="/" activeClassName="selected">
            <HomeIcon />

            <span>Página Inicial</span>
          </NavLink>
        </MenuButton>

        <MenuButton>
          <NavLink to="/explore" activeClassName="selected">
            <ExploreIcon />

            <span>Explorar</span>
          </NavLink>
        </MenuButton>

        <MenuButton>
          <NavLink to="/notifications" activeClassName="selected">
            <BellIcon />
            <span>Notificações</span>
          </NavLink>
        </MenuButton>

        <MenuButton>
          <NavLink to="/messages" activeClassName="selected">
            <EmailIcon />
            <span>Mensagens</span>
          </NavLink>
        </MenuButton>

        <MenuButton>
          <NavLink to="/bookmarks" activeClassName="selected">
            <BookmarkIcon />
            <span>Itens Salvos</span>
          </NavLink>
        </MenuButton>

        <MenuButton>
          <NavLink to="/Vitor4444444444" activeClassName="selected">
            <ProfileIcon />

            <span>Perfil</span>
          </NavLink>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Vitor Santos</strong>
          <span>@Vitor44444444444</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
