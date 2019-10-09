import React from 'react';
import './seasonDisplay.css'

const seasonConfig = {
  kemarau: {
    text: 'Cuacanya bagus, main layangan yok!',
    iconName: 'yellow sun'
  },
  penghujan: {
    text: 'Asik hujan, kita hujan-hujanan di luar',
    iconName: 'grey cloud'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "kemarau" : "penghujan";
  } else {
    return lat > 0 ? "penghujan" : "kemarau"
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`i-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`i-right massive ${iconName} icon`} />
    </div>
  );
}
 
export default SeasonDisplay;