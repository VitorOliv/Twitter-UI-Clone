import React from "react";
import { useRouteMatch, NavLink, Switch, Route } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import List from "../../components/List";
import FollowSuggestion from "../../components/FollowSuggestion";

import {
  Container,
  ExplorePageMain,
  HeaderContent,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Tabs,
  Tab,
  FakeBigImage,
  SubjectInfo,
  Local,
  Dot,
  Time,
  FakeBigImageTitle,
  Trend,
  NoCategoryTrend,
  TrendTitle,
  TweetCount,
  CategoryTrend,
  Avatar,
  Profile,
  TrendContent,
  TrendImage,
  SideBar,
  ListWrapper,
  CovidWarning,
  WarningTitle,
  WarningBody,
  WarningButton,
  MatchInfo,
  CompetitionName,
  CompetitionStage,
  TeamWrapper,
  RedTeam,
  BlackTeam,
  TeamName,
  Score,
  TrendingInBrazil,
} from "./styles";

const ExplorePage: React.FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <ExplorePageMain>
        <PageHeader hasBackIcon={false}>
          <HeaderContent>
            <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
            </SearchWrapper>

            <Tabs>
              <NavLink exact to={`${url}`} activeClassName="selected">
                <Tab>Para você</Tab>
              </NavLink>

              <NavLink to={`${url}/tabs/covid-19`} activeClassName="selected">
                <Tab>Covid-19</Tab>
              </NavLink>

              <NavLink to={`${url}/tabs/trending`} activeClassName="selected">
                <Tab>Assuntos do Momento</Tab>
              </NavLink>

              <NavLink to={`${url}/tabs/news`} activeClassName="selected">
                <Tab>Notícias</Tab>
              </NavLink>

              <NavLink to={`${url}/tabs/sports`} activeClassName="selected">
                <Tab>Esportes</Tab>
              </NavLink>
            </Tabs>
          </HeaderContent>
        </PageHeader>

        <Switch>
          <Route exact path={path}>
            <FakeBigImage>
              <SubjectInfo>
                <Local>São Paulo</Local>
                <Dot isWhite={true} />
                <Time>Ontem</Time>
              </SubjectInfo>

              <FakeBigImageTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </FakeBigImageTitle>
            </FakeBigImage>

            <Trend>
              <NoCategoryTrend>Assunto do Momento em Brasil</NoCategoryTrend>
              <TrendTitle>Lorem Ipsum</TrendTitle>
              <TweetCount>3.509 Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>Futebol</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>1.416 Tweets</TweetCount>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <Avatar />
                    <Profile>Revista X</Profile>
                    <Dot />
                    <span>Esta tarde</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>Gaming</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>12,7 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <NoCategoryTrend>Assunto do Momento em Brasil</NoCategoryTrend>
              <TrendTitle>Lorem Ipsum</TrendTitle>
              <TweetCount>3.509 Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>Futebol</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>1.416 Tweets</TweetCount>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <Avatar />
                    <Profile>Revista X</Profile>
                    <Dot />
                    <span>Esta tarde</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>Gaming</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>12,7 mil Tweets</TweetCount>
            </Trend>
          </Route>

          <Route exact path={`${path}/tabs/covid-19`}>
            <FakeBigImage>
              <SubjectInfo>
                <Local>Covid-19</Local>
                <Dot isWhite={true} />
                <Time>há 4 horas</Time>
              </SubjectInfo>

              <FakeBigImageTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </FakeBigImageTitle>
            </FakeBigImage>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Covid-19</span>
                    <Dot />
                    <span>Esta tarde</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Covid-19</span>
                    <Dot />
                    <span>há 2 horas</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Covid-19</span>
                    <Dot />
                    <span>AO VIVO</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Covid-19</span>
                    <Dot />
                    <span>Ontem</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <CovidWarning>
              <WarningTitle>
                Como proteger você e outras pessoas contra a COVID-19
              </WarningTitle>

              <WarningBody>
                As agências e autoridades de saúde compartilham informações
                confiáveis sobre como reduzir a disseminação da COVID-19 e
                manter-se saudável.
              </WarningBody>

              <WarningButton>
                Informações das autoridades de saúde
              </WarningButton>
            </CovidWarning>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <Avatar />
                    <Profile>Revista X</Profile>
                    <Dot />
                    <span>Esta tarde</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Covid-19</span>
                    <Dot />
                    <span>Esta tarde</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>
          </Route>

          <Route exact path={`${path}/tabs/trending`}>
            <TrendingInBrazil>
              <span>Tendências de Brasil</span>
            </TrendingInBrazil>

            <Trend>
              <CategoryTrend>
                <span>1</span>
                <Dot />
                <span>Pop</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>158 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>2</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>16,9 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>3</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>75,9 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>4</span>
                <Dot />
                <span>Política</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>105 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>5</span>
                <Dot />
                <span>Tecnologia</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>31,5 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>6</span>
                <Dot />
                <span>Tecnologia</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>32,1 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>7</span>
                <Dot />
                <span>Futebol</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>24,5 mil Tweets</TweetCount>
            </Trend>

            <Trend>
              <CategoryTrend>
                <span>5</span>
                <Dot />
                <span>Música</span>
                <Dot />
                <span>Assunto do Momento</span>
              </CategoryTrend>
              <TrendTitle>Lorem</TrendTitle>
              <TweetCount>11,6 mil Tweets</TweetCount>
            </Trend>
          </Route>

          <Route exact path={`${path}/tabs/news`}>
            <FakeBigImage>
              <SubjectInfo>
                <Avatar />
                <span>Revista X</span>
                <Dot isWhite={true} />
                <Time>Ontem</Time>
              </SubjectInfo>

              <FakeBigImageTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </FakeBigImageTitle>
            </FakeBigImage>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Notícia</span>
                    <Dot />
                    <span>Esta tarde</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Notícia Mundial</span>
                    <Dot />
                    <span>Hoje cedo</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Política</span>
                    <Dot />
                    <span>AO VIVO</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <Avatar />
                    <Profile>Revista X</Profile>
                    <Dot />
                    <span>Ontem</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Internacional</span>
                    <Dot />
                    <span>AO VIVO</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <Avatar />
                    <Profile>TV X</Profile>
                    <Dot />
                    <span>há 18 minutos</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>
          </Route>

          <Route exact path={`${path}/tabs/sports`}>
            <FakeBigImage>
              <SubjectInfo>
                <Local>Futebol</Local>
                <Dot isWhite={true} />
                <Time>há 3 horas</Time>
              </SubjectInfo>

              <FakeBigImageTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </FakeBigImageTitle>
            </FakeBigImage>

            <Trend>
              <MatchInfo>
                <CompetitionName>Lorem Ipsum</CompetitionName>
                <CompetitionStage>Final</CompetitionStage>
              </MatchInfo>

              <TeamWrapper>
                <RedTeam>
                  <Avatar />

                  <TeamName>Lorem Ipsum</TeamName>

                  <Score>1</Score>
                </RedTeam>
                <BlackTeam>
                  <Avatar />

                  <TeamName>Lorem Ipsum</TeamName>

                  <Score>1</Score>
                </BlackTeam>
              </TeamWrapper>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Champions League</span>
                    <Dot />
                    <span>Hoje</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Futebol Internacional</span>
                    <Dot />
                    <span>Ontem</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Esportes</span>
                    <Dot />
                    <span>25 de agosto de 2020</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Esportes</span>
                    <Dot />
                    <span>24 de agosto de 2020</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>

            <Trend>
              <TrendContent>
                <div>
                  <CategoryTrend>
                    <span>Futebol</span>
                    <Dot />
                    <span>23 de agosto de 2020</span>
                  </CategoryTrend>
                  <TrendTitle>Lorem, Ipsum Dolum Sit Amet</TrendTitle>
                </div>

                <TrendImage />
              </TrendContent>
            </Trend>
          </Route>
        </Switch>
      </ExplorePageMain>

      <SideBar>
        <ListWrapper>
          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion
                name="Vinicius Santos"
                nickname="@Vinicius44444444444"
              />,
              <FollowSuggestion
                name="Fulano de Tal"
                nickname="@Fulano4444444444"
              />,
              <FollowSuggestion
                name="Cicrano"
                nickname="@Cicrano44444444444"
              />,
            ]}
          />
        </ListWrapper>
      </SideBar>
    </Container>
  );
};

export default ExplorePage;
