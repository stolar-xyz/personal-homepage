import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        background: ${({ theme }) => theme.color.background.primaryBackground};
        color: ${({ theme }) => theme.color.text.primaryText};
        transition: background 0.3s;
        letter-spacing: 0.05em;
    }
`;