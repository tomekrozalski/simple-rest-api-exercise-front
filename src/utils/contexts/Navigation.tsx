/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from "react";

import { FlowType, DataType, ResponseType } from "utils/types";
import { StatusEnum } from "utils/enums";

type ContentType = DataType[] | null;
type CategoryType = string | null;
type SubcategoryType = string | null;

const server = "https://simple-rest-api-exercise.herokuapp.com";

export const NavigationContext = React.createContext({
  addNewFlow: (values: FlowType) => Promise.resolve(),
  category: null as CategoryType,
  data: null as ContentType,
  deleteFlow: () => Promise.resolve(),
  setCategory: (value: CategoryType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value;
  },
  setSubcategory: (value: SubcategoryType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value;
  },
  status: StatusEnum.idle,
  subcategory: null as SubcategoryType,
});

const Navigation: React.FC = ({ children }) => {
  const [data, setData] = useState<ContentType>(null);
  const [category, setCategory] = useState<CategoryType>(null);
  const [subcategory, setSubcategory] = useState<SubcategoryType>(null);
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.idle);

  useEffect(() => {
    fetch(server)
      .then((res) => res.json())
      .then(({ categories }: ResponseType) => {
        setData(categories);
        setStatus(StatusEnum.fullfilled);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  }, []);

  const addNewFlow = (values: FlowType) =>
    fetch(server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values, category }),
    })
      .then((res) => res.json())
      .then(({ categories }: ResponseType) => {
        setData(categories);
      })
      .catch(() => {
        throw new Error("Adding new flow finished with failure");
      });

  const deleteFlow = () => {
    const directory = `${server}/${category}/${subcategory}`;
    setSubcategory(null);

    return fetch(directory, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ categories }: ResponseType) => {
        setData(categories);
      })
      .catch(() => {
        throw new Error("Deleting flow finished with failure");
      });
  };

  return (
    <NavigationContext.Provider
      value={{
        addNewFlow,
        category,
        data,
        deleteFlow,
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
