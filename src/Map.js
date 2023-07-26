import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import customMarker from "./imgs/green-dot.png"; // Path to your image file

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 39.381266,
    lng: -97.922211,
  };

  const restrictionBounds = {
    north: 49.3457868,
    south: 24.396308,
    west: -125.0,
    east: -66.93457,
  };

  const storeLocation = { lat: 32.93927, lng: -96.80538 };

  return (
    <LoadScript googleMapsApiKey="****">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4}
        center={defaultCenter}
        restriction={{ latLngBounds: restrictionBounds, strictBounds: true }}
      >
        <Marker
          position={storeLocation}
          icon={{
            url: customMarker,
            scaledSize: new window.google.maps.Size(50, 50),
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
