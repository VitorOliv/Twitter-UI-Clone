import React from "react";

import Feed from "../../components/Feed";
import PageHeader from "../../components/PageHeader";

import {
  Container,
  ProfilePageMain,
  ProfileInfo,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
  Tab,
} from "./styles";
import SideBar from "../../components/SideBar";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <ProfilePageMain>
        <PageHeader hasBackIcon={true}>
          <ProfileInfo>
            <strong>Vitor Santos</strong>
            <span>666 Tweets</span>
          </ProfileInfo>
        </PageHeader>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Vitor Santos</h1>
          <h2>@Vitor44444444444</h2>

          <p>
            Vagabond at <a href="https://rocketseat.com.br">@home</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 30 de setembro de 2000
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>175</strong>
            </span>
            <span>
              <strong>1</strong> seguidores
            </span>
          </Followage>
        </ProfileData>

        <Tab>Tweets</Tab>

        <Feed retweeted={true} />
      </ProfilePageMain>

      <SideBar />
    </Container>
  );
};

export default ProfilePage;
