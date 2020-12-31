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
function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
    return (
      <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/TimothyNguyen" component={HomePage} />
            <Route path="/TimothyNguyen/SWEResume.pdf" component={Resume} />
          </Switch>
        </BrowserRouter>
    </>
    </ThemeProvider>
    );
}   

export default App;
