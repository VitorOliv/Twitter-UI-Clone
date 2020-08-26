import React from "react";

import {
  Container,
  BookmarkPageMain,
  HeaderContent,
  NoBookmarkContent,
  NoBookmarkTitle,
  NoBookmarkDescription,
} from "./styles";
import PageHeader from "../../components/PageHeader";
import SideBar from "../../components/SideBar";

const BookmarkPage: React.FC = () => {
  return (
    <Container>
      <BookmarkPageMain>
        <PageHeader hasBackIcon={false}>
          <HeaderContent>
            <strong>Itens Salvos</strong>
            <span>@Vitor4444444444</span>
          </HeaderContent>
        </PageHeader>

        <NoBookmarkContent>
          <NoBookmarkTitle>
            Você ainda não adicionou nenhum Tweet aos Itens salvos
          </NoBookmarkTitle>

          <NoBookmarkDescription>
            Quando adicionar, eles serão exibidos aqui.
          </NoBookmarkDescription>
        </NoBookmarkContent>
      </BookmarkPageMain>

      <SideBar />
    </Container>
  );
};

export default BookmarkPage;
