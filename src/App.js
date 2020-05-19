import React from 'react';

import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import '@reach/combobox/styles.css';

import './App.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return ' Loading maps';

  return (
    <div className="App">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap>
    </div>
  );
};

export default App;
