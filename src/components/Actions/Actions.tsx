import React, { useContext } from "react";

import { NavigationContext } from "utils/contexts";
import { Wrapper } from ".";

const Actions: React.FC = () => {
  const { category, subcategory } = useContext(NavigationContext);

  const showModal = () =>
    alert(`So the category is "${category}" and subcategory "${subcategory}"`);

  return (
    <Wrapper>
      <h1>Actions</h1>
      {subcategory && (
        <div>
          You picked <code>{subcategory}</code> from submenu. Nice!
          <br />
          <br />
          Now you can display{" "}
          <button type="button" className="reverse" onClick={showModal}>
            beautiful modal
          </button>{" "}
          with category name and subcategory
          <br />
          <br />
          OR 🥁🥁🥁
          <br />
          <br />
          you can remove the category
        </div>
      )}
    </Wrapper>
  );
};

export default Actions;
