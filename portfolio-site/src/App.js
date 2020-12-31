import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage'
import Resume from './pages/Resume';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggle"
import Footer from './components/Footer';
import { Navbar, Nav, Container } from 'react-bootstrap';
function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <>
      <Container className="p-0" fluid={true}>
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles/>
            <Navbar className="border-bottom" bg={themeMode} variant={themeMode} expand="lg">
              <Navbar.Brand>Home</Navbar.Brand>
            </Navbar>
            <Toggle theme={theme} toggleTheme={themeToggler} />
            <BrowserRouter>
              <Switch>
                <Route exact path="/TimothyNguyen" component={HomePage} />
                <Route path="/TimothyNguyen/SWEResume.pdf" component={Resume} />
              </Switch>
            </BrowserRouter>
          </>
        </ThemeProvider>
        <Footer />
      </Container>
    </>
  );
}   

const center = {
  color: 'white',
  display: "flex",
  fontSize: '1.1 rem',
  textHeight: "1.5",
  textAlign: "center"
};

export default App;
