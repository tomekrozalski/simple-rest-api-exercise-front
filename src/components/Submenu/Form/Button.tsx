import styled from "styled-components";

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

export default Button;
