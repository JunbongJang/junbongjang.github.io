import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // :focus {
  //   outline: 0;
  //   box-shadow: 0 0 0 2px ${props => props.theme['blue']};
  // }
  
      /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${props => props.theme['base-profile']};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.blue};
  }
`