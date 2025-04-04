import React, { useCallback, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '10px',
    overflow: 'hidden',
    outline: '2px solid #000',
};

const defaultCenter = {
    lat: 49.495171,
    lng: 0.110281,
};

const locations = [
    { lat: 49.495171, lng: 0.110281, label: 'Cabinet CIBL', description: 'Cabinet de thérapie familiale et conjugale.' },];

function GoogleMaps() {
    const onLoad = useCallback((map) => {
        console.log('Carte chargée avec succès !');
    }, []);
    const center = useMemo(() => defaultCenter, []);

    return (
        <div role="region" aria-label="Carte interactive des emplacements de notre cabinet et des lieux associés">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    onLoad={onLoad}
                    options={{
                        mapTypeControl: false,
                        streetViewControl: false,
                        fullscreenControl: true,
                        zoomControl: true,
                    }}
                    tabIndex={0}
                    aria-label="Carte interactive avec plusieurs points d'intérêt"
                >
                    {locations.map((location, index) => (
                        <Marker
                            key={index}
                            position={location}
                            label={location.label}
                            title={location.description}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
            <div className="sr-only" aria-live="polite">
                <h2>Emplacements des services</h2>
                <ul>
                    {locations.map((location, index) => (
                        <li key={index}>
                            <strong>{location.label} :</strong> {location.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default GoogleMaps;
