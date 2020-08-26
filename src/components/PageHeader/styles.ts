import styled from "styled-components";
import { ArrowLeft } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);
`;

export const Header = styled.div`
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;
