import React from "react";
import StickyBox from "react-sticky-box";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion
                name="Vinicius Santos"
                nickname="@vinicius44444444444"
              />,
              <FollowSuggestion
                name="Fulano de Tal"
                nickname="@fulano4444444444"
              />,
              <FollowSuggestion
                name="Beltano de Tal"
                nickname="@beltano44444444444"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
