import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.secondary};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${theme.typography.fontSize['5xl']};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${theme.typography.fontSize['4xl']};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.typography.fontSize['3xl']};
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['xl']};
    }
  }

  p {
    line-height: ${theme.typography.lineHeight.relaxed};
  }

  a {
    color: ${theme.colors.secondary.main};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.secondary.dark};
    }
  }

  button {
    font-family: ${theme.typography.fontFamily.primary};
    cursor: pointer;
    transition: all ${theme.transitions.fast};
  }

  input, textarea, select {
    font-family: ${theme.typography.fontFamily.primary};
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.main};
    border-radius: ${theme.borderRadius.full};

    &:hover {
      background: ${theme.colors.primary.dark};
    }
  }
`;

