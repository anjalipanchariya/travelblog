import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
   <>
   <CollapsibleExample/>
   <Home/>
   </>
    
  );
}

export default App;
