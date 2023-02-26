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

    const positionMarker : {lat: number, lng: number} = { lat: 48.60857344640066, lng: 22.26732058286141 };

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: positionMarker,
        zoom: 15,
      });

      // Add a marker to the map
       new window.google.maps.Marker({
        position: positionMarker, 
        map,
        title: "5th Element",
      });
    });
  }, [apiKey]);

  return <div id="map" style={{ height: "100%" }} />;
};

export default Map;