import React from 'react';
import './App.css';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import bg from './assets/bg.png'
import logo from './assets/logo.png'
import check from './assets/check.png'
import remove from './assets/remove.png'

function App() {
  return (
    <div className="app">
      {/* Navbar Section */}
      <header className="header">
        <img src={logo} alt="Taar Logo" className="logo" />
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <h1>Social Network for Events</h1>
        <p>Discover events, connect with people & keep in touch</p>
        
        {/* App Store Buttons */}
        <div className="app-buttons">
          <button className="btn apple-btn">
            <FaApple className="icon" /> App Store
          </button>
          <button className="btn google-btn">
            <FaGooglePlay className="icon" /> Google Play
          </button>
        </div>

        {/* Mockup Images */}
        <div className="mockup-section">

        </div>
      </main>

      {/* Event Highlights */}
      <div className="event-highlights">
        <div className='card1'>
          <div className="event1">
            <span>Coldplay India concert 19th Nov '24</span>
            <img src={check} alt="" className='tick1' />
          </div>
          <div className="event1">
            <span>Thump! Bangalore Half Marathon '24</span>
            <img src={check} alt="" className='tick2' />
          </div>
        </div>
        <div className='img'>
          <img src={bg} alt="" />
        </div>
        <div className='card2'>
          <div className="event2">
            <span className='span1'>Suyash is part of your connections now</span>
          </div>
          <div className="event21">
            <span className='span1'>Namita has sent you a connection request!</span>
            <div className='result'>
              <span><img src={check} alt="" className='acceptImg'/>Accept</span>
              <span><img src={remove} alt="" className='removeImg'/> Remove</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
