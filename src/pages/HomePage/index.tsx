import React, { useRef } from "react";

import Feed from "../../components/Feed";
import PageHeader from "../../components/PageHeader";

import {
  Container,
  HomePageMain,
  HeaderContent,
  InputArea,
  AvatarWrapper,
  Avatar,
  WhoCanReply,
  WhoCanReplyButtonWrapper,
  WhoCanReplyButton,
  GlobeIcon,
  ButtonsArea,
  InputWrapper,
  Input,
  ButtonWrapper,
  InputIcons,
  InputIcon,
  LandscapeIcon,
  GifIcon,
  MetricsIcon,
  EmojiIcon,
  DateIcon,
  TweetButtonWrapper,
  TweetButton,
  Tweets,
} from "./styles";
import SideBar from "../../components/SideBar";

const HomePage: React.FC = () => {
  const tweetButton = useRef<HTMLButtonElement>(null);
  const whoCanReply = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    if (tweetButton.current) {
      tweetButton.current.classList.add("active");
    }
    if (whoCanReply.current) {
      whoCanReply.current.classList.add("active");
    }
  };

  return (
    <Container>
      <HomePageMain>
        <PageHeader hasBackIcon={false}>
          <HeaderContent>
            <strong>Página Inicial</strong>
          </HeaderContent>
        </PageHeader>

        <InputArea>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>

          <ButtonsArea>
            <InputWrapper>
              <Input
                placeholder="O que está acontecendo?"
                onFocus={handleFocus}
              />
            </InputWrapper>

            <WhoCanReply ref={whoCanReply}>
              <WhoCanReplyButtonWrapper>
                <WhoCanReplyButton>
                  <GlobeIcon />
                  <span>Todos podem responder</span>
                </WhoCanReplyButton>
              </WhoCanReplyButtonWrapper>
            </WhoCanReply>

            <ButtonWrapper>
              <InputIcons>
                <InputIcon>
                  <LandscapeIcon />
                </InputIcon>

                <InputIcon>
                  <GifIcon />
                </InputIcon>

                <InputIcon>
                  <MetricsIcon />
                </InputIcon>

                <InputIcon>
                  <EmojiIcon />
                </InputIcon>

                <InputIcon>
                  <DateIcon />
                </InputIcon>
              </InputIcons>

              <TweetButtonWrapper>
                <TweetButton ref={tweetButton}>Tweetar</TweetButton>
              </TweetButtonWrapper>
            </ButtonWrapper>
          </ButtonsArea>
        </InputArea>

        <Tweets>
          <Feed retweeted={false} />
        </Tweets>
      </HomePageMain>

      <SideBar />
    </Container>
  );
};

export default HomePage;
