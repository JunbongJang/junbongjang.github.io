import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./lib/Router";
import ReactGA from "react-ga4";


function App() {
  ReactGA.initialize("G-XYP72XXDTN");
  ReactGA.send({ hitType: "homepage", page: "/", title: "JunbongJang's React Website" });

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
