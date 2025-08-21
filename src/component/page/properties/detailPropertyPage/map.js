import React, { useEffect, useRef, useState } from 'react';

const Map = ({ alldata, selectedProperty, onPropertySelect }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);

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

  // Initialize map and add all markers
  useEffect(() => {
    if (mapLoaded && mapRef.current && !mapInstanceRef.current && alldata && alldata.length > 0) {
      // Calculate center point of all properties
      const centerLat = alldata.reduce((sum, property) => sum + property.lat, 0) / alldata.length;
      const centerLng = alldata.reduce((sum, property) => sum + property.lng, 0) / alldata.length;

      // Initialize the map
      const map = window.L.map(mapRef.current).setView([centerLat, centerLng], 12);

      // Add tile layer
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      mapInstanceRef.current = map;

      // Add markers for all properties
      addAllMarkers(map);
    }
  }, [mapLoaded, alldata]);

  // Function to add all property markers
  const addAllMarkers = (map) => {
    // Clear existing markers
    markersRef.current.forEach(marker => {
      map.removeLayer(marker);
    });
    markersRef.current = [];

    if (!alldata || alldata.length === 0) return;

    // Add marker for each property
    alldata.forEach((property, index) => {
      if (!property.lat || !property.lng) return;

      // Create different colored markers based on price range
      const getMarkerColor = (price) => {
        if (price < 500000) return '#10b981'; // green for lower prices
        if (price < 700000) return '#f59e0b'; // amber for mid-range
        return '#dc2626'; // red for higher prices
      };

      const isSelected = selectedProperty && selectedProperty.id === property.id;
      
      // Custom property marker icon
      const propertyIcon = window.L.divIcon({
        className: 'custom-property-marker',
        html: `
          <div style="
            background: ${isSelected ? '#3b82f6' : getMarkerColor(property.amount)};
            color: white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            width: ${isSelected ? '36px' : '30px'};
            height: ${isSelected ? '36px' : '30px'};
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 ${isSelected ? '4px 8px' : '2px 4px'} rgba(0,0,0,${isSelected ? '0.3' : '0.2'});
            z-index: ${isSelected ? '1000' : '999'};
            transition: all 0.2s ease;
          ">
            <div style="
              transform: rotate(45deg); 
              font-size: ${isSelected ? '16px' : '14px'};
              font-weight: bold;
            ">
              ${isSelected ? '🏠' : '🏡'}
            </div>
          </div>
        `,
        iconSize: [isSelected ? 36 : 30, isSelected ? 36 : 30],
        iconAnchor: [isSelected ? 18 : 15, isSelected ? 36 : 30],
        popupAnchor: [0, isSelected ? -36 : -30]
      });

      // Format price for display
      const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(price);
      };

      // Create marker
      const marker = window.L.marker([property.lat, property.lng], { icon: propertyIcon })
        .addTo(map)
        .bindPopup(`
          <div style="min-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #1f2937; font-size: 16px;">
              ${property.heading}
            </h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; line-height: 1.4;">
              ${property.location}
            </p>
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #dc2626; font-size: 18px;">
              ${formatPrice(property.amount)}
            </p>
            <div style="display: flex; gap: 12px; margin-bottom: 8px; font-size: 13px; color: #4b5563;">
              <span>🛏️ ${property.bedroom || 0} bed</span>
              <span>🚿 ${property.bathroom || 0} bath</span>
              <span>📐 ${property.area?.toLocaleString() || 0} sqft</span>
            </div>
          </div>
        `);

      // Add click event to marker
      marker.on('click', () => {
        if (onPropertySelect) {
          onPropertySelect(property);
        }
      });

      markersRef.current.push(marker);
    });

    // Fit map to show all markers
    if (markersRef.current.length > 0) {
      const group = new window.L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  };

  // Update markers when selectedProperty changes
  useEffect(() => {
    if (mapInstanceRef.current && alldata) {
      addAllMarkers(mapInstanceRef.current);
    }
  }, [selectedProperty, alldata]);

  // Center map on selected property
  useEffect(() => {
    if (mapInstanceRef.current && selectedProperty) {
      mapInstanceRef.current.setView([selectedProperty.lat, selectedProperty.lng], 15, {
        animate: true,
        duration: 1
      });
    }
  }, [selectedProperty]);

  // Global function for popup button clicks
  useEffect(() => {
    window.selectProperty = (propertyId) => {
      const property = alldata?.find(p => p.id === propertyId);
      if (property && onPropertySelect) {
        onPropertySelect(property);
      }
    };

    return () => {
      delete window.selectProperty;
    };
  }, [alldata, onPropertySelect]);

  if (!alldata || alldata.length === 0) {
    return (
      <div className="bg-gray-100 h-full relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              📍
            </div>
            <p className="text-lg font-medium">No Properties Available</p>
            <p className="text-sm mt-2">Properties will appear here when data is loaded</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Map Controls */}


      {/* Map Container */}
      <div className="bg-white h-screen overflow-hidden border border-gray-200">
        <div 
          ref={mapRef} 
          className="h-96 w-full"
          style={{ minHeight: '400px' }}
        />
      </div>

    </div>
  );
};

export default Map;