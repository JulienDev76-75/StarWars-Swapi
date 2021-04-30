import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Nav from './component/layout/Nav';
//import Search from './component/search/Search';
import Home from './component/accueil/Home';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        <main className="container my-5">
          <Switch>
            <Route path="/accueil">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
