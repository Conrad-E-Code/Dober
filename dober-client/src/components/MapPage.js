import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from "react";
function MapPage() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })
    if (!isLoaded) return <div>Loading...</div>;
    return (<Map />)
}
function Map() {
    const center = useMemo(() => ({         "lat": 47.6055498,
    "lng": -122.3587698}), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <MarkerF position={center}  />
      </GoogleMap>
    );
}

export default MapPage