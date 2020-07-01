import React, { useContext } from "react";

import { NavigationContext } from "utils/contexts";
import { FlowType } from "utils/types";
import { StatusEnum } from "utils/enums";
import { Form, Item, Wrapper } from ".";

const Submenu: React.FC = () => {
  const { category, data, status } = useContext(NavigationContext);

  const getFlows = () =>
    data?.find(({ title }) => title === category)?.flows ?? [];

  return (
    <Wrapper>
      <h1>Submenu</h1>
      {status === StatusEnum.fullfilled && !category && (
        <div>Pick a category</div>
      )}
      {status === StatusEnum.fullfilled && category && (
        <>
          <ul>
            {getFlows().map((props: FlowType) => (
              <Item key={props.code} {...props} />
            ))}
          </ul>
          <Form />
        </>
      )}
    </Wrapper>
  );
};

export default Submenu;
