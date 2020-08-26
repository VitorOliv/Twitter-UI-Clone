import styled from "styled-components";

import { Search } from "../../styles/icons";
import Button from "../../components/Button";

interface DotProps {
  isWhite?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: min(1000px, 100%);
`;

export const ExplorePageMain = styled.main`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);
  height: 100vh;
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

export const SearchWrapper = styled.div`
  padding: 0px 24px;
  width: min(601px, 100%);

  background: var(--primary);
  height: 100%;
  max-height: 39px;
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

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
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
  width: max-content;
  padding: 15px;
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

export const FakeBigImage = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px 15px;
  width: 100%;
  height: 201px;
  background: var(--twitter);
  border-bottom: 10px solid var(--outline);

  @media (min-width: 500px) {
    height: 340px;
  }
`;

export const SubjectInfo = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 13px;
    font-weight: bold;
    color: white;
  }
`;

export const Local = styled.span`
  font-size: 13px;
  color: white;
`;

export const Dot = styled.div<DotProps>`
  background: ${(props) => (props.isWhite ? "white" : "var(--gray)")};
  width: 2px;
  height: 2px;
  margin: 0 10px;
  border-radius: 50%;
`;

export const Time = styled.span`
  font-size: 13px;
  color: white;
`;

export const FakeBigImageTitle = styled.span`
  font-size: 23px;
  font-weight: bold;
  color: white;
`;

export const Trend = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-bottom: 1px solid var(--outline);
  transition: background-color 0.2s;

  &:hover {
    background: var(--secondary);
  }
`;

export const NoCategoryTrend = styled.span`
  font-size: 13px;
  color: var(--gray);
`;

export const TrendTitle = styled.span`
  padding-top: 2px;
  font-weight: bold;
  font-size: 15px;
  color: var(--white);
`;

export const TweetCount = styled.span`
  padding-top: 5px;
  font-size: 13px;
  color: var(--gray);
`;

export const TrendContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryTrend = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Avatar = styled.div`
  width: 15px;
  height: 15px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 5px;
`;

export const Profile = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: var(--white) !important;
`;

export const TrendImage = styled.div`
  flex-shrink: 0;
  height: 85px;
  width: 85px;
  background: var(--gray);
  border-radius: 10px;
`;

export const SideBar = styled.aside`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 24px 200px;
  margin-top: 3px;
`;

export const CovidWarning = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 20px solid var(--outline);
  border-bottom: 10px solid var(--outline);
`;

export const WarningTitle = styled.h1`
  font-size: 23px;
  max-width: 500px;
`;

export const WarningBody = styled.span`
  margin: 10px;
  font-size: 15px;
  color: var(--gray);
`;

export const WarningButton = styled(Button)`
  margin: 10px 10px 0;
`;

export const MatchInfo = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`;

export const CompetitionName = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: var(--white);
`;

export const CompetitionStage = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: var(--gray);
`;

export const TeamWrapper = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const RedTeam = styled.div`
  height: 49px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background: #c3281e;

  > div {
    width: 39px;
    height: 39px;
  }
`;

export const BlackTeam = styled.div`
  height: 49px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background: var(--primary);

  > div {
    width: 39px;
    height: 39px;
  }
`;

export const TeamName = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin: 0 10px;
  width: 100%;
`;

export const Score = styled.span`
  font-size: 23px;
  font-weight: bold;
  color: white;
  margin: 0 10px;
`;

export const TrendingInBrazil = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid var(--outline);

  > span {
    font-size: 19px;
    font-weight: bold;
  }
`;
