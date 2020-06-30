import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

  :root {
    --color-black: #222;
    --color-white: #fff;
    --color-olivine: #8CB369;
    --color-buff: #F4E285;
    --color-sandy: #F4A259;
    --color-wintergreen: #5B8E7D;
    --color-bittersweet: #BC4B51;
    --font-primary: 'Source Sans Pro', sans-serif;
    --font-weight-regular: 400;
    --font-weight-bold: 700;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: var(--color-olivine);
    font: var(--font-weight-regular) 1.5rem / 2.5rem var(--font-primary);
    color: var(--color-black);
  }

  h1 {
    margin: 0;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.5);
    font: var(--font-weight-bold) 3rem / 3.8rem var(--font-primary);
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: var(--font-weight-light);
    line-height: 1.5;
    margin: 0;
  }

  button {
    max-width: 25rem;
    padding: 0;
    border: none;
    border-bottom: 1px dotted var(--color-bittersweet);
    background: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;

    :hover {
      border-bottom-style: solid
    }

    :focus {
      outline: none;
    }
  }

  ul {
    margin: 0 0 4rem 0;
    padding: 2rem;
  }

  li {
    margin-left: 1rem;
    list-style-type: circle;

    &.active {
      margin-left: 2rem;
      list-style-type: disc;
    }
  }

  section {
    min-height: 40rem;
  }

  section > div {
    padding: 2rem;
  }

  code {
    color: var(--color-white);
  }

  .reverse {
    color: var(--color-white);
  }
`;

export default GlobalStyle;
