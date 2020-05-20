import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />

    </div>
  );
}




export default App;
