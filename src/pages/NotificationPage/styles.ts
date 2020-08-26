import styled, { css } from "styled-components";

import { Star, Chat, Rocketseat, Favorite } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  width: min(1000px, 100%);
`;

export const NotificationPageMain = styled.main`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  > div > div {
    padding-left: 0;
    padding-bottom: 0;
  }

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid var(--outline);

  > strong {
    font-size: 20px;
    padding: 0 15px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: min(601px, 100%);
  margin-top: 10px;

  > a {
    text-decoration: none;
    width: 100%;
  }

  > a.selected {
    > div {
      color: var(--twitter);
      border-bottom: 2px solid var(--twitter);
    }
  }
`;

export const Tab = styled.div`
  width: 100%;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--gray);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid var(--outline);

  > div:first-child {
    margin-left: 25px;
    padding: 7px 15px;
  }
`;

export const StarIcon = styled(Star)`
  width: 40px;
  height: 40px;
  fill: var(--twitter);
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;

  > p {
    color: var(--gray);
    padding-bottom: 10px;
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const Title = styled.div`
  padding: 15px 0;
`;

export const Mention = styled.article`
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid var(--outline);
`;

export const MentionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const SendingInfo = styled.div`
  display: flex;
  margin-bottom: 2px;
  align-items: center;
`;

export const SenderName = styled.span`
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SenderProfile = styled.span`
  font-size: 15px;
  color: var(--gray);
  margin-left: 5px;

  @media (max-width: 500px) {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const SendingTime = styled.time`
  font-size: 15px;
  color: var(--gray);

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    max-width: 100px;
    overflow: hidden;
  }
`;

export const ResponseTo = styled.p`
  margin-bottom: 2px;
  font-size: 15px;
  color: var(--gray);

  > span {
    color: var(--twitter);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MentionText = styled.p`
  font-size: 15px;

  > span {
    color: var(--twitter);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MentionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  margin: 11px auto 0;

  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Rocketseat)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
