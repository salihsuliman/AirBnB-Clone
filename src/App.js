import React from 'react';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SearchPage from './SearchPage.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    //BEM
    <div className="app">
      <Router>


          <Header/>

          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home/>
            </Route>

          </Switch>

          <Footer/>


      </Router>
  {/* Home */}

    {/* Header */}

    {/* Banner */}
      {/* Search */}
    {/* Cards */}

    {/* Footer */}

  {/* Search Page */}

    </div>
  );
}

export default App;
