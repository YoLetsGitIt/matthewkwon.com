import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
