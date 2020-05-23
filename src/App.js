import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/dialogs';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className = 'app-wrapper-content'>
        <Route path = '/dialogs' component = {Dialogs} />
        <Route path = '/profile' component = {Profile} />
      </div>


    </div>
    </BrowserRouter>
  );
}




export default App;
