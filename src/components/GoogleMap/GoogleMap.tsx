import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

declare global {
  interface Window {
    google: any;
  }
}

const Map: React.FC = () => {
  const [windowWidth, setWindwoWidth] = useState<number>(window.innerWidth);
  const apiKey = "AIzaSyDOuxr5zhrFVF5-7I7Yi6mXMxg3p0OhSoo" ;
  const onResize = () => {
    setWindwoWidth(window.innerWidth);
  }

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

    window.addEventListener('resize', onResize)
  }, [apiKey]);

  return <div id="map" style={{height: windowWidth < 768 ? "300px" : "100%" }} />;
};

export default Map;