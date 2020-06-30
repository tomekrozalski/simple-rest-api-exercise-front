import styled from "styled-components";

const ContentWrapper = styled.main`
  display: grid;
  grid-gap: 2rem;
  max-width: 100rem;
  margin: 10rem auto;
  grid-template-columns: repeat(3, 1fr);
`;

export default ContentWrapper;
