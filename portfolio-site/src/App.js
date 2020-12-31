import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage'
import Resume from './pages/Resume';
function App() {
    return (
    <BrowserRouter>
       <Switch>
        <Route exact path="/TimothyNguyen" component={HomePage} />
        <Route path="/TimothyNguyen/resume" component={Resume} />
      </Switch>
    </BrowserRouter>
    );
}   

export default App;
