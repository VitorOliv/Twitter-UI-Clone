import React from "react";

import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
