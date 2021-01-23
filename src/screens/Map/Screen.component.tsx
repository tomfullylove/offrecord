import React from 'react';
import MapView from 'react-native-maps';

const Map: React.FC = () => {
  return (
    <MapView
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      showsUserLocation={true}
      minZoomLevel={8}
    />
  );
};

export default Map;
