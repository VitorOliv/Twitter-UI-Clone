import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: min(1000px, 100%);
`;

export const BookmarkPageMain = styled.main`
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
    font-size: 19px;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const NoBookmarkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 39px 20px;
`;

export const NoBookmarkTitle = styled.span`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NoBookmarkDescription = styled.span`
  color: var(--gray);
  font-size: 15px;
`;
