import styled, { css } from "styled-components";

import Button from "../../components/Button";

import {
  InsertPhoto,
  Gif,
  Poll,
  SentimentSatisfiedAlt,
  Event,
  GlobeAmericas,
} from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  width: min(1000px, 100%);
`;

export const HomePageMain = styled.main`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 20px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 10px solid var(--search);

  max-width: 100%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const InputWrapper = styled.div`
  margin: 2px;
`;

export const Input = styled.input`
  padding: 10px 0;
  height: 40px;
  width: 100%;
  outline: 0;
  font-size: 22px;

  &:focus {
    ::placeholder {
      color: var(--white);
    }
  }

  &::placeholder {
    color: var(--gray);
    font-size: 22px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputIcons = styled.div`
  display: flex;
`;

export const InputIcon = styled.button`
  outline: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const TweetButtonWrapper = styled.div``;

export const Tweets = styled.div`
  > div:last-child {
    @media (max-width: 500px) {
      margin-bottom: 48px;
    }
  }
`;

export const TweetButton = styled(Button)`
  background: var(--twitter-light-hover);
  padding: 12px 24px;

  &.active {
    background: var(--twitter);
  }
`;

export const WhoCanReply = styled.div`
  display: none;

  padding-bottom: 10px;
  border-bottom: 1px solid var(--outline);

  &.active {
    display: block;
  }
`;

export const WhoCanReplyButtonWrapper = styled.div``;

export const WhoCanReplyButton = styled.button`
  display: flex;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  outline: 0;

  > span {
    font-weight: bold;
    color: var(--twitter);
    font-size: 13px;
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const GlobeIcon = styled(GlobeAmericas)`
  height: 17px;
  width: 17px;
  margin-right: 6.5px;

  > path {
    fill: var(--twitter);
  }
`;

const iconCSS = css`
  fill: var(--twitter);
  width: 30px;
  height: 30px;
`;

export const LandscapeIcon = styled(InsertPhoto)`
  ${iconCSS}
`;

export const GifIcon = styled(Gif)`
  ${iconCSS}
`;

export const MetricsIcon = styled(Poll)`
  ${iconCSS}
`;

export const EmojiIcon = styled(SentimentSatisfiedAlt)`
  ${iconCSS}
`;

export const DateIcon = styled(Event)`
  ${iconCSS}
`;
