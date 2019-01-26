import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({

    hr: {
        color: "red"
      },
  
      
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%" ,
        height: 80,
        color: "white",
        background: "#2196f3"
      },
       
});


class Home extends Component {

    render() {
        return (
<>
<nav className="collapse navbar-collapse navbar navbar-expand-lg navbar-dark bg-primary">
    <a id = "gotoHome" className="navbar-brand" href="/">Mongo Scraper</a>
    <a id = "gotoHome"className="navbar-brand" href="/">Home</a>
    <a id = "gotoSaved" className="navbar-brand" href="#">SaveTitle</a>
      <a href="#"><button id = "scrapeData" className="btn btn-danger btn-lg"><span className="fa fa-plus"></span>Scrap New Title</button></a>
      <a href="#"><button id = "deleteallBTN" className="btn btn-danger btn-lg"><span className="fa fa-times"></span>Clear Aticle</button></a>
</nav>
<div className="jumbotron text-center">
  <div className="overlay">
  </div>
  <div className="background-image">
  </div>
  <div className="caption">
    <h1>Mongo Scraper</h1>
    <p>New York Times Edition</p>
  </div>
</div>
<div className="container-fluid article-container card">
 
  <div className='alert alert-warning text-center'>
  
  </div>
</div>

<footer className="footer">
  <div className="container">
    <p>New York Times Mongo Scraper</p> 
  </div>
</footer>   
    <div className="row"/>
    <script src='/app.js'/>

 </>
)
}   
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);