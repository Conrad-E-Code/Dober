import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from "react";
import { useState } from 'react';

function MapPage() {
const [lng, setLng] = useState(null)
const [lat, setLat] = useState(null)
const [status, setStatus] = useState(null)
    function handlePayNow() {
            const configObj = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({"lat": lat, "lng": lng})
        }
        if( status === "found") {
            
            fetch("/paynow", configObj)
        }
    }
    function handleLocate() {
        if (!navigator.geolocation) {
            setStatus("Browser doesn't support geolocation")
        }
        else {
            setStatus("...Locating")
            navigator.geolocation.getCurrentPosition((pos)=>{
                setStatus("found")
                setLat(pos.coords.latitude)
                setLng(pos.coords.longitude)
            },()=>{
                setStatus("Couldn't retrieve location")
            })
        }
 
    }
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })
    if (!isLoaded) return <div>Loading...</div>;
    // return (<Map />)
    return(
        <>
        <div>
            <button onClick={handleLocate}>LOCATE ME</button>
            <p>{status}</p>
            <p>Latitude:{lat}</p>
            <p>Longitude:{lng}</p>
            <button onClick={handlePayNow}>PAY NOW!</button>
        </div>
        <Map status={status} lat={lat} lng={lng} >
        </Map>
        </>
    )
}
function Map({status, lat, lng}) {
    const center = useMemo(() => ({         "lat": 47.6055498,
    "lng": -122.3587698}), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        {status === "found" ? <MarkerF position={{"lat": lat, "lng":lng}}   />: null}
        {console.log(status)}
            {console.log(lat)}
            {console.log(lng)}
      </GoogleMap>
    );
}

export default MapPage