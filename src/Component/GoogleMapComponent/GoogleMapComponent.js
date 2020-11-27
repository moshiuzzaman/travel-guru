import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeoFill } from 'react-bootstrap-icons';
import "./GoogleMapComponent.css"

const GoogleMapComponent = () => {
    return (
        <div style={{ height: '100%', width: '100%' }}>  
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCiN99t6TVmZYQHvC5iu2cEcx1M2Z_h934' }}
          defaultCenter={{lat: 59.95,lng: 30.33}}
          defaultZoom={10}
        >
          <div lat={59.955413} lng={30.337844}><GeoFill className="map-marker"/></div>
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMapComponent;