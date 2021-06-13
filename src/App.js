import React from "react";

import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/nav/Nav";
import Research from "./components/layout/nav/research/Research";
import Explore from "./components/layout/section_explore/explore/Explore";
import Films from "./components/layout/section_explore/list/films/Films.js";
import People from "./components/layout/section_explore/list/people/People";
import Planets from "./components/layout/section_explore/list/planets/Planets";
import Species from "./components/layout/section_explore/list/species/Species";
import Vehicles from "./components/layout/section_explore/list/vehicles/Vehicles";
import Starships from "./components/layout/section_explore/list/starships/Starships";

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>        
        <Nav />
        <main className="container m-5">   
          <Switch>
            <Route path="/home">
              <Explore />
            </Route>
            <Route path="/films">
              <Films />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/planets">
              <Planets />
            </Route>
            <Route path="/species">
              <Species />
            </Route>
            <Route path="/vehicles">
              <Vehicles />
            </Route>
            <Route path="/starships">
              <Starships />
            </Route>           
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/">
              <Explore />
            </Route>                      
          </Switch>
        </main>
      </Router>
      <Footer />
   </div>
  );
}

export default App;