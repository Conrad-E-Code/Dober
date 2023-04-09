import { useRef, useEffect } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function MyMapComponent() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }

  export default MyMapComponent