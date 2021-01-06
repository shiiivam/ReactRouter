import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';





function App (){
  return(
    <>
    <Navbar/>
      <Switch>
        <Route exact path='/home' component={Landing} />
        <Route exact path='/about' component={About}/>
        <Route  component={Error}/>
      </Switch>
    </>
  )
}

export default App;