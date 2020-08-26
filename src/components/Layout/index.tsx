import React from "react";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;
