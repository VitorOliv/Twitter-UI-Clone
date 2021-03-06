import React from "react";

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

interface Props {
  retweeted: boolean;
}

const Tweet: React.FC<Props> = ({ retweeted }) => {
  return (
    <Container>
      {retweeted && (
        <Retweeted>
          <RocketseatIcon />
          Você retweetou
        </Retweeted>
      )}

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />

            <time>02 de ago</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              32
            </Status>
            <Status>
              <RetweetIcon />
              21
            </Status>
            <Status>
              <LikeIcon />
              892
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
