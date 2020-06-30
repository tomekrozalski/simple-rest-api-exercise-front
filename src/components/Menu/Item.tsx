import React, { useContext } from "react";

import { NavigationContext } from "utils/contexts";

type Props = {
  title: string;
};

const Item: React.FC<Props> = ({ title }) => {
  const { category, setCategory, setSubcategory } = useContext(
    NavigationContext
  );

  return (
    <li className={category === title ? "active" : ""}>
      <button
        type="button"
        onClick={() => {
          setCategory(title);
          setSubcategory(null);
        }}
      >
        {title}
      </button>
    </li>
  );
};

export default Item;
