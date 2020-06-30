import React, { useContext } from "react";

import { NavigationContext } from "utils/contexts";
import { Item, Wrapper } from ".";

const Menu: React.FC = () => {
  const { data, status } = useContext(NavigationContext);

  return (
    <Wrapper>
      <h1>Menu</h1>
      {status === "idle" && <div>Loading...</div>}
      {status === "rejected" && <div>Call for data was rejected</div>}
      {status === "fullfilled" && (
        <ul>
          {data?.map(({ title }) => (
            <Item key={title} title={title} />
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default Menu;
