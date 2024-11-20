import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home'
import Contact from './contact';
import About from './About'
import reportWebVitals from './reportWebVitals';
import Skills from './skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' Exact Component={Home}/>
        <Route path='/aboutme' Exact Component={About}/>
        <Route path='/skills' Exact Component={Skills}/>
        <Route path='/contact' Exact Component={Contact}/>
    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
