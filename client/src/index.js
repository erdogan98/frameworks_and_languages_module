import './index.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from  "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Add from './pages/Add';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (

    <BrowserRouter>
    <div className='App'>
      <Header/>
    <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/addItem" component={Add}/>
        <Route path="/view/:itemId" component={View}/>
        <Route path="/about" component={About}/>
      </Switch>
      </div>
    </BrowserRouter>
    

  );
};

export default App;
