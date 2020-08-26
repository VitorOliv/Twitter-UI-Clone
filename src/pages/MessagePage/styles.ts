import styled from "styled-components";
import { Search } from "../../styles/icons";
import Button from "../../components/Button";

export const Container = styled.div`
  display: flex;
  width: min(988px, 100%);
  height: 100vh;
`;

export const MessagePageMain = styled.main`
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

  @media (min-width: 1000px) {
    width: min(388px, 100%);
  }
`;

export const HeaderContent = styled.div`
  margin-left: 10px;
  padding: 7px 0;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 20px;
  }
`;

export const Conversation = styled.div``;

export const InputArea = styled.div`
  padding: 10px;
  height: 60px;
`;

export const SearchBlock = styled.div`
  height: calc(100% + 10px);
  border-bottom: 1px solid var(--outline);
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;

  font-size: 14px;
  padding: 0 10px 0 52px;

  border-radius: 19.5px;
  background: var(--search);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const NoCoversationContent = styled.div`
  padding: 39px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 19px;

  @media (min-width: 1000px) {
    max-width: 230px;
  }
`;

export const DirectMessagesDescription = styled.span`
  text-align: center;
  overflow-wrap: break-word;
  max-width: 280px;
  font-size: 15px;
  color: var(--gray);
  margin-bottom: 20px;
`;

export const StartConversationButton = styled(Button)`
  padding: 10px 15px;
`;

export const CustomSideBar = styled.aside`
  display: none;

  @media (min-width: 1000px) {
    width: min(600px, 100%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--outline);
  }
`;

export const NoSelectedConversation = styled.div`
  padding: 39px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoSelectedConversationTitle = styled.span`
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 19px;
`;

export const NoSelectedConversationDescription = styled.span`
  text-align: center;
  font-size: 15px;
  color: var(--gray);
  margin-bottom: 20px;
`;

export const NewMessageButton = styled(Button)`
  padding: 10px 15px;
`;
