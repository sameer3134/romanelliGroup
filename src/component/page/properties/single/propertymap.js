import React, { useEffect, useRef, useState } from 'react';

const PropertyMap = ({ property }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  // Extract coordinates from property data
  useEffect(() => {
    if (property) {
      // Check for latitude and longitude in various possible field names
      const lat = property.Latitude || property.latitude || property.lat;
      const lng = property.Longitude || property.longitude || property.lng || property.lon;
      if (lat && lng) {
        setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lng) });
      } 
    }
  }, [property]);

  // Load Leaflet CSS and JS dynamically
  useEffect(() => {
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(cssLink);
      }

      // Load JS
      if (!window.L) {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
          script.onload = () => {
            setMapLoaded(true);
            resolve();
          };
          document.head.appendChild(script);
        });
      } else {
        setMapLoaded(true);
      }
    };

    loadLeaflet();
  }, []);
  

  // Initialize map
  useEffect(() => {
    if (mapLoaded && coordinates && mapRef.current && !mapInstanceRef.current) {
      // Initialize the map
      const map = window.L.map(mapRef.current).setView([coordinates.lat, coordinates.lng], 15);

      // Add tile layer
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Custom property marker icon
      const propertyIcon = window.L.divIcon({
        className: 'custom-property-marker',
        html: `
          <div style="
            background: #dc2626;
            color: white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          ">
            <div style="transform: rotate(45deg); font-size: 14px;">🏠</div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });

      // Add marker
      const marker = window.L.marker([coordinates.lat, coordinates.lng], { icon: propertyIcon })
        .addTo(map)
        .bindPopup(`
          <div style="min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">
              ${property.UnparsedAddress || 'Property Location'}
            </h3>
            <p style="margin: 0 0 4px 0; font-weight: bold; color: #dc2626; font-size: 16px;">
              $${property.ListPrice?.toLocaleString() || 'N/A'}
            </p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              ${property.BedroomsTotal || 0} bed • ${property.BathroomsTotalInteger || 0} bath • ${property.BuildingAreaTotal || 0} sqft
            </p>
          </div>
        `);

      mapInstanceRef.current = map;
      markerRef.current = marker;
    }
  }, [mapLoaded, coordinates, property]);

  // Update map when coordinates change
  useEffect(() => {
    if (mapInstanceRef.current && markerRef.current && coordinates) {
      mapInstanceRef.current.setView([coordinates.lat, coordinates.lng], 15);
      markerRef.current.setLatLng([coordinates.lat, coordinates.lng]);
    }
  }, [coordinates]);

  if (!coordinates) {
    return (
      <div className="bg-gray-100 h-64  mb-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
              📍
            </div>
            <p>Location coordinates not available</p>
            <p className="text-sm">{property?.UnparsedAddress || 'Address not available'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="bg-white overflow-hidden border border-gray-200">
        <div 
          ref={mapRef} 
          className="h-80 w-full"
          style={{ minHeight: '320px' }}
        />
      </div>
    </div>
  );
};

export default PropertyMap;