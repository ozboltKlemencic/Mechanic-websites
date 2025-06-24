"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const ApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const center = {
  lat: 46.04896545410156,
  lng: 14.508159637451172,
};

const MyMapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: ApiKey || "",
  });

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MyMapComponent;
