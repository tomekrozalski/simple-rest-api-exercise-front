/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from "react";

import { DataType, ResponseType } from "utils/types";

type ContentType = DataType[] | null;
type CategoryType = string | null;
type SubcategoryType = string | null;

export const NavigationContext = React.createContext({
  category: null as CategoryType,
  data: null as ContentType,
  setCategory: (value: CategoryType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value;
  },
  setSubcategory: (value: SubcategoryType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value;
  },
  status: "idle",
  subcategory: null as SubcategoryType,
});

const Navigation: React.FC = ({ children }) => {
  const [data, setData] = useState<ContentType>(null);
  const [category, setCategory] = useState<CategoryType>(null);
  const [subcategory, setSubcategory] = useState<SubcategoryType>(null);
  const [status, setStatus] = useState<"idle" | "fullfilled" | "rejected">(
    "idle"
  );

  useEffect(() => {
    fetch("https://simple-rest-api-exercise.herokuapp.com/")
      .then((res) => res.json())
      .then(({ categories }: ResponseType) => {
        setData(categories);
        setStatus("fullfilled");
      })
      .catch(() => {
        setStatus("rejected");
      });
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        category,
        data,
        setCategory,
        setSubcategory,
        status,
        subcategory,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default Navigation;
