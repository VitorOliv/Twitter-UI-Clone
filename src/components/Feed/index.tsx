import React from "react";

import Tweet from "../Tweet";

import { Container, Tweets } from "./styles";

interface Props {
  retweeted: boolean;
}

const Feed: React.FC<Props> = ({ retweeted }) => {
  return (
    <Container>
      <Tweets>
        <Tweet retweeted={retweeted} />
        <Tweet retweeted={retweeted} />
        <Tweet retweeted={retweeted} />
        <Tweet retweeted={retweeted} />
        <Tweet retweeted={retweeted} />
        <Tweet retweeted={retweeted} />
      </Tweets>
    </Container>
  );
};

export default Feed;
