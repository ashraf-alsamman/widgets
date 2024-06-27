// src/Widget.jsx
import React from 'react';
 const Widget = () => {
  const widgetUrl = 'https://www.turbopass.com/rome-city-pass?widget-token=wptest12345&tokentp=&landing=&layout=embed&origin=https://tptesting.turbopass.com&frameId=869280980330052100&destination_id=&product=rome&option=&p=&currency=&_ga=null&r=&test=&order=&booking=&settlement=direct&locale=com&currency=&mobile=false';
  const widgetUr2 = 'https://www.turbopass.com/hamburg-city-pass?widget-token=wptest12345&tokentp=&landing=&layout=embed&origin=https://tptesting.turbopass.com&frameId=869280980330052100&destination_id=&product=rome&option=&p=&currency=&_ga=null&r=&test=&order=&booking=&settlement=direct&locale=com&currency=&mobile=false';

  return (
    <div style={{ border: '1px solid #000', padding: '20px', width: '100%', height: '600px' }}>
      <iframe
        src={widgetUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="PrestaShop Widget"
      ></iframe>
            <iframe
        src={widgetUrl2}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="PrestaShop Widget"
      ></iframe>
    </div>
  );
};

export default Widget;
