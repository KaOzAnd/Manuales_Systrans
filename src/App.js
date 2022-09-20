// import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {Outlet} from "react-router-dom";
import { Menu } from './pages/menu';
// import { Body } from './pages/body';


function App() {
  return (
    <div className="App">
      <Menu/>
      <div className='acordeon'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
