import React, { useState } from 'react';

import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import '@reach/combobox/styles.css';

import mapStyles from './util/mapStyles';

import './App.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);

  console.log(markers);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return ' Loading maps';

  return (
    <div className="App">
      <div className="map-logo">
        <h1>HI</h1>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={(e) => {
          setMarkers((current) => [
            ...current,
            {
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker key={marker.time.toISOString()} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default App;
