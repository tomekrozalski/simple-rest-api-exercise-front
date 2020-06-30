import React from "react";

import { GlobalStyle } from "utils/theme";
import { Navigation } from "utils/contexts";
import { ContentWrapper } from "elements";
import { Actions, Menu, Submenu } from "components";

const App: React.FC = () => (
  <Navigation>
    <ContentWrapper>
      <Menu />
      <Submenu />
      <Actions />
    </ContentWrapper>
    <GlobalStyle />
  </Navigation>
);

export default App;
