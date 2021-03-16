import logo from './logo.svg';
import './App.css';
import Register_comp from './Register_comp/Register_comp';
import Header_comp from './Header_comp/Header_comp';
import Footer_comp from './Footer_comp/Footer_comp';
import ToDoList_comp from './ToDoList_comp/ToDoList_comp';
import Cover_comp from './Cover_comp/Cover_comp';
import Home_comp from './Home_comp/Home_comp';
import Skills_Page_comp from './Skills_Page_comp/Skills_Page_comp';

import Products_comp from './Products_comp/Products_comp';
import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom';
import history from './history';
import { Suspense } from 'react';
import React from 'react';

import Unity, { UnityContext } from "react-unity-webgl";
// import Books_comp from './Books_comp/Books_comp';
//lazy
const Books_comp = React.lazy(() => import('./Books_comp/Books_comp'));

function App() {
  return (
    <Router history={history}>
      <Suspense fallback="loading...">

      {/* <Link to="/">Home</Link> */}
      {/* <Header_comp /> */}
     <Route path='/'  component={Header_comp} />

     
     
     <Switch>

     <Route path='/' exact component={Home_comp}  />
    {/* <Route path='/' exact component={Cover_comp} /> */}
    <Route path='/skill' exact component={Skills_Page_comp} />
    <Route path='/register' exact component={Register_comp} /><Route path='/register/:id' exact component={Register_comp} />
    {/* or */}
    {/* <Route path='/register/:id?' exact component={Register_comp} /> */}
    <Route path='/todo' exact component={ToDoList_comp} />
    <Route path='/products' exact component={Products_comp} />
    <Route path='/todo/:mail/:name' exact component={ToDoList_comp} />
    </Switch>
    <Route path='/'  component={Footer_comp} />

      </Suspense>
    </Router>
  );
}

export default App;
