import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import PropTypes from 'prop-types';

class App extends Component {
  
  render () {
    
    return (
      
        <Router>
          <div> 
            <Route exact path='/' component={Home} />
            {/* <Route path='/Account' component={Account} /> */}
  
          </div>
        </Router>
        
    );
  } 
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;