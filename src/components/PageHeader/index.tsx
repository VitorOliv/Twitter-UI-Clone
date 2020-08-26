import React from "react";

import { Container, Header, BackIcon } from "./styles";

interface Props {
  hasBackIcon: boolean;
}

const PageHeader: React.FC<Props> = ({ hasBackIcon, children }) => {
  return (
    <Container>
      <Header>
        {hasBackIcon && (
          <button>
            <BackIcon />
          </button>
        )}

        {children}
      </Header>
    </Container>
  );
};

export default PageHeader;
