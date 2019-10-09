import React, { Component } from 'react';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';

class Weather extends Component {
  state = {
    lat: null,
    errorMessage: ""
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
		return <Spinner message='Please accept location request'/>
	}
  
	render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

export default Weather;