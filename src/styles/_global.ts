import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #5429cc;
    --purple-light: #6933ff;
    --green: #33cc95;
    --red: #e62e4d;
    --font-title: #363f5f;
    --font-body: #969cb3;
    --background: #f0f2f5;
    --white: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    color: var(--font-body);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  html {
    // font-size: 100%; (default 16px)

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--font-title);
    font-weight: 600;
  }

  b, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
