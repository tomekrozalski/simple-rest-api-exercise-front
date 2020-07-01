import React, { useContext } from "react";

import { NavigationContext } from "utils/contexts";
import { StatusEnum } from "utils/enums";
import { Item, Wrapper } from ".";

const Menu: React.FC = () => {
  const { data, status } = useContext(NavigationContext);

  return (
    <Wrapper>
      <h1>Menu</h1>
      {status === StatusEnum.idle && <div>Loading...</div>}
      {status === StatusEnum.rejected && <div>Call for data was rejected</div>}
      {status === StatusEnum.fullfilled && (
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
