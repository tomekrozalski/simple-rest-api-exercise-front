import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  align-self: center;
  padding: 1rem 2rem;
  border: 0;
  color: var(--color-white);
  background-color: var(--color-bittersweet);
  transition: background-color 0.2s;

  :hover {
    background: var(--color-olivine);
  }
`;

const Form = () => {
  return (
    <Wrapper>
      <Button type="button">Add new subcategory to the list</Button>
    </Wrapper>
  );
};

export default Form;
