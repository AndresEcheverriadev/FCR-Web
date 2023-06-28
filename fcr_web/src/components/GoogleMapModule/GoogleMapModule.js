import React, { Suspense } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Loading from "../Loading/Loading.js";

const center = {
  lat: -37.8046,
  lng: -72.69447,
};

function GoogleMapModule({ mapWidth, mapHeight }) {
  const containerStyle = {
    width: mapWidth,
    height: mapHeight,
  };

  // const LoadScript = React.lazy(() => import('./LoadScript'));

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            options={{ disableDefaultUI: true }}
            center={center}
            zoom={17}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : null}
        ;
      </Suspense>
    </>
  );
}

export default GoogleMapModule;
