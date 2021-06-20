import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng } = this.props;
    return (
      <Map google={this.props.google} zoom={14} style={{width: '50%', height: '50%', position: 'relative'}}
        center={{
          lat: lat,
          lng: lng
        }}
        initialCenter={{
          lat: lat,
          lng: lng
        }}>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_API_KEY)
})(MapContainer)
