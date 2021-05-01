import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Nav from './component/layout/Nav';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div>     
        <div style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + './img/starwars2.jpg'})`,
          backgroundRepeat: 'no-repeat',
        }}> 
      </div>
      <Header />
      <Router>
        <Nav />
        <main className="container my-5">
          <Switch>
            <Route path="/star">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
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
