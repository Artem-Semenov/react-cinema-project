import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  apiKey: string;
}


declare global {
  interface Window {
    google: any;
  }
}

const Map: React.FC<MapProps> = ({ apiKey }) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8,
      });
    });
  }, [apiKey]);

  return <div id="map" style={{ height: "400px" }} />;
};

export default Map;