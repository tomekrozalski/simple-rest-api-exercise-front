import React from "react";

import { GlobalStyle } from "utils/theme";
import { ContentWrapper } from "elements";
import { Actions, Menu, Submenu } from "components";

const App = () => (
  <>
    <ContentWrapper>
      <Menu />
      <Submenu />
      <Actions />
    </ContentWrapper>

    <GlobalStyle />
  </>
);

export default App;
