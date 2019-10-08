import React from 'react';

const Weather = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(err) => console.log(err)
	);
	return (
		<div>Hai!</div>
	);
}
 
export default Weather;