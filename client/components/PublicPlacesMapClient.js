'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useLeafletIconFix() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
    });
  }, []);
}

export default function PublicPlacesMapClient({ places }) {
  useLeafletIconFix();

  return (
    <MapContainer
      center={[22.5, 80]}
      zoom={5}
      scrollWheelZoom
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {places.map((place) => (
          <Marker key={place.id} position={[Number(place.latitude), Number(place.longitude)]}>
            <Popup>
              <div style={{ minWidth: 170 }}>
                <p style={{ fontWeight: 600, marginBottom: 4 }}>{place.name}</p>
                <p style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>
                  {place.city?.name}, {place.state?.name}
                </p>
                <a href={`/places/${place.slug}`} style={{ fontSize: 12, color: '#B23A48' }}>
                  View place →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}