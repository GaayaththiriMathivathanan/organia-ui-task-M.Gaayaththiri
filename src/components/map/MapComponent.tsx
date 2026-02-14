'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';

interface MapComponentProps {
  latitude: string;
  longitude: string;
  onLocationChange: (lat: string, lng: string) => void;
}

// Fix Leaflet markers
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent({
  latitude,
  longitude,
  onLocationChange,
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const marker = useRef<L.Marker | null>(null);

  useEffect(() => {
    // Initialize map
    if (!mapContainer.current || map.current) return;

    const lat = parseFloat(latitude) || 51.5074;
    const lng = parseFloat(longitude) || -0.1278;

    map.current = L.map(mapContainer.current).setView([lat, lng], 5);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add initial marker
    marker.current = L.marker([lat, lng], { icon: defaultIcon })
      .addTo(map.current)
      .bindPopup(`<div><strong>Location</strong><br/>Lat: ${lat}<br/>Lng: ${lng}</div>`);

    // Click handler to place marker
    map.current.on('click', (e: L.LeafletMouseEvent) => {
      const { lat: newLat, lng: newLng } = e.latlng;
      
      if (marker.current) {
        marker.current.setLatLng([newLat, newLng]);
        marker.current.setPopupContent(
          `<div><strong>Location</strong><br/>Lat: ${newLat.toFixed(4)}<br/>Lng: ${newLng.toFixed(4)}</div>`
        );
      }
      
      onLocationChange(newLat.toFixed(4), newLng.toFixed(4));
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Update marker position when lat/lng props change
  useEffect(() => {
    if (marker.current && map.current) {
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      
      if (!isNaN(lat) && !isNaN(lng)) {
        marker.current.setLatLng([lat, lng]);
        marker.current.setPopupContent(
          `<div><strong>Location</strong><br/>Lat: ${lat}<br/>Lng: ${lng}</div>`
        );
      }
    }
  }, [latitude, longitude]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-64 rounded-lg border border-gray-300 overflow-hidden shadow-sm"
    />
  );
}
