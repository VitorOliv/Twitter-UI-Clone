import React from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import SideBar from "../../components/SideBar";

import {
  Container,
  NotificationPageMain,
  HeaderContent,
  Tabs,
  Tab,
  Notification,
  StarIcon,
  NotificationContent,
  Avatar,
  Title,
  Mention,
  MentionContent,
  SendingInfo,
  SenderName,
  SenderProfile,
  Dot,
  SendingTime,
  ResponseTo,
  MentionText,
  MentionIcons,
  IconWrapper,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

const NotificationPage: React.FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <NotificationPageMain>
        <PageHeader hasBackIcon={false}>
          <HeaderContent>
            <strong>Notificações</strong>
            <Tabs>
              <NavLink exact to={`${url}`} activeClassName="selected">
                <Tab>Tudo</Tab>
              </NavLink>

              <NavLink to={`${url}/mentions`} activeClassName="selected">
                <Tab>Menções</Tab>
              </NavLink>
            </Tabs>
          </HeaderContent>
        </PageHeader>

        <Switch>
          <Route exact path={path}>
            <Notification>
              <div>
                <StarIcon />
              </div>
              <NotificationContent>
                <Avatar />

                <Title>Recomendado Para Você</Title>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </NotificationContent>
            </Notification>

            <Notification>
              <div>
                <StarIcon />
              </div>
              <NotificationContent>
                <Avatar />

                <Title>Recomendado Para Você</Title>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </NotificationContent>
            </Notification>

            <Notification>
              <div>
                <StarIcon />
              </div>
              <NotificationContent>
                <Avatar />

                <Title>Recomendado Para Você</Title>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </NotificationContent>
            </Notification>

            <Notification>
              <div>
                <StarIcon />
              </div>
              <NotificationContent>
                <Avatar />

                <Title>Recomendado Para Você</Title>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </NotificationContent>
            </Notification>

            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Vinicius</SenderName>
                  <SenderProfile>@Vinicius44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <ResponseTo>
                  Em resposta a <span>@Vitor4444444444</span>
                </ResponseTo>

                <MentionText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nostrum cumque, illo distinctio molestiae, deleniti qui
                  nemo ullam iusto, expedita officiis quia delectus quidem
                  voluptates iste illum natus sunt aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>

            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Vinicius</SenderName>
                  <SenderProfile>@Vinicius44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <ResponseTo>
                  Em resposta a <span>@Vitor4444444444</span>
                </ResponseTo>

                <MentionText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nostrum cumque, illo distinctio molestiae, deleniti qui
                  nemo ullam iusto, expedita officiis quia delectus quidem
                  voluptates iste illum natus sunt aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>
          </Route>
          <Route path={`${path}/mentions`}>
            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Vinicius</SenderName>
                  <SenderProfile>@Vinicius44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <ResponseTo>
                  Em resposta a <span>@Vitor4444444444</span>
                </ResponseTo>

                <MentionText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nostrum cumque, illo distinctio molestiae, deleniti qui
                  nemo ullam iusto, expedita officiis quia delectus quidem
                  voluptates iste illum natus sunt aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>

            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Cicrano</SenderName>
                  <SenderProfile>@Cicrano44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <MentionText>
                  <span>@Vitor4444444444</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Magnam nostrum cumque, illo
                  distinctio molestiae, deleniti qui nemo ullam iusto, expedita
                  officiis quia delectus quidem voluptates iste illum natus sunt
                  aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>

            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Fulano de Tal</SenderName>
                  <SenderProfile>@Fulano44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <MentionText>
                  <span>@Vitor4444444444</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Magnam nostrum cumque, illo
                  distinctio molestiae, deleniti qui nemo ullam iusto, expedita
                  officiis quia delectus quidem voluptates iste illum natus sunt
                  aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>

            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Vinicius</SenderName>
                  <SenderProfile>@Vinicius44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <ResponseTo>
                  Em resposta a <span>@Vitor4444444444</span>
                </ResponseTo>

                <MentionText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nostrum cumque, illo distinctio molestiae, deleniti qui
                  nemo ullam iusto, expedita officiis quia delectus quidem
                  voluptates iste illum natus sunt aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>

            <Mention>
              <Avatar />

              <MentionContent>
                <SendingInfo>
                  <SenderName>Vinicius</SenderName>
                  <SenderProfile>@Vinicius44444444444</SenderProfile>
                  <Dot />
                  <SendingTime>24 de agosto de 2020</SendingTime>
                </SendingInfo>

                <ResponseTo>
                  Em resposta a <span>@Vitor4444444444</span>
                </ResponseTo>

                <MentionText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nostrum cumque, illo distinctio molestiae, deleniti qui
                  nemo ullam iusto, expedita officiis quia delectus quidem
                  voluptates iste illum natus sunt aliquam?
                </MentionText>

                <MentionIcons>
                  <IconWrapper>
                    <CommentIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <RetweetIcon />
                  </IconWrapper>
                  <IconWrapper>
                    <LikeIcon />
                  </IconWrapper>
                </MentionIcons>
              </MentionContent>
            </Mention>
          </Route>
        </Switch>
      </NotificationPageMain>

      <SideBar />
    </Container>
  );
};

export default NotificationPage;
