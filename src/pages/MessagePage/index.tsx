import React from "react";

import PageHeader from "../../components/PageHeader";

import {
  Container,
  MessagePageMain,
  HeaderContent,
  Conversation,
  InputArea,
  SearchBlock,
  SearchIcon,
  SearchInput,
  NoCoversationContent,
  Title,
  DirectMessagesDescription,
  StartConversationButton,
  CustomSideBar,
  NoSelectedConversation,
  NoSelectedConversationTitle,
  NoSelectedConversationDescription,
  NewMessageButton,
} from "./styles";

const MessagePage: React.FC = () => {
  return (
    <Container>
      <MessagePageMain>
        <PageHeader hasBackIcon={false}>
          <HeaderContent>
            <strong>Messages</strong>
          </HeaderContent>
        </PageHeader>

        <Conversation>
          <InputArea>
            <SearchBlock>
              <SearchInput placeholder="Buscar pessoas e grupo" />
              <SearchIcon />
            </SearchBlock>
          </InputArea>

          <NoCoversationContent>
            <Title>Envie uma mensagem, receba uma mensagem</Title>

            <DirectMessagesDescription>
              Mensagens Diretas são conversas privadas entre você e outras
              pessoas no Twitter. Compartilhe Tweets, mídia e muito mais!
            </DirectMessagesDescription>

            <StartConversationButton>
              Inicie uma conversa
            </StartConversationButton>
          </NoCoversationContent>
        </Conversation>
      </MessagePageMain>

      <CustomSideBar>
        <NoSelectedConversation>
          <NoSelectedConversationTitle>
            Você não tem uma mensagem selecionada
          </NoSelectedConversationTitle>

          <NoSelectedConversationDescription>
            Escolha uma mensagem entre as existentes ou inicie uma nova.
          </NoSelectedConversationDescription>

          <NewMessageButton>Nova mensagem</NewMessageButton>
        </NoSelectedConversation>
      </CustomSideBar>
    </Container>
  );
};

export default MessagePage;
