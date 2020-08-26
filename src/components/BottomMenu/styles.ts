import styled, { css } from "styled-components";
import { Home, Search, Notifications, Email } from "../../styles/icons";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  > a.selected {
    > svg {
      fill: var(--twitter);
    }
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
