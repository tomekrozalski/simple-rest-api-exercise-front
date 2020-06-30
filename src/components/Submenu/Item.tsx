import React, { useContext } from "react";

import { NavigationContext } from "utils/contexts";
import { FlowType } from "utils/types";

const Item: React.FC<FlowType> = ({ code, name }) => {
  const { subcategory, setSubcategory } = useContext(NavigationContext);

  return (
    <li className={subcategory === code ? "active" : ""}>
      <button type="button" onClick={() => setSubcategory(code)}>
        {name || code}
      </button>
    </li>
  );
};

export default Item;
