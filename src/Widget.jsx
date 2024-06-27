// src/Widget.jsx
import React from 'react';
// import Header from './Header';
import './App.css'; // Import the CSS file

const Widget = () => {
  const widgetUrl = 'https://www.turbopass.com/rome-city-pass?landing=&layout=embed&origin=https://tptesting.turbopass.com&frameId=869280980330052100&destination_id=&product=rome&option=&p=&currency=&_ga=null&r=&test=&order=&booking=&settlement=direct&locale=com&currency=&mobile=false';
 
  return (
    <div className="app-container">
      {/* <Header /> */}
      <div className="widget-container">
        <iframe
          width="100%"
          height="100%"
          src={widgetUrl}
          className="widget"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Rome City Pass"
        ></iframe>
 
      </div>
    </div>
  );
};

export default Widget;
