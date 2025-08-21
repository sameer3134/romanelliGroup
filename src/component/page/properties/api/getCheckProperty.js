import { useState } from "react";

const allowedPropertyTypes = [
  "Residential",
  "Residential Lease",
  "Residential Income",
  "Land",
  "Commercial Sale",
  "Commercial Lease",
  "Farm",
];

export const usePropertySearch = () => {

  const [error, setError] = useState(null);

  const checkProperty = async (filters) => {
    setError(null);

    try {
      // Build query params safely
      const params = new URLSearchParams();

      if (filters.searchCity) params.append("city", filters.searchCity);
      if (filters.min) params.append("min", filters.min);
      if (filters.max) params.append("max", filters.max);
      if (filters.bedrooms && filters.bedrooms !== "Any")
        params.append("bedrooms", filters.bedrooms);
      if (filters.bathrooms && filters.bathrooms !== "Any")
        params.append("bathrooms", filters.bathrooms);
      if (filters.selectedOption)
        params.append("listingType", filters.selectedOption);

      if (filters.property) {
        
        if (allowedPropertyTypes.includes(filters.property)) {
          params.append("property", filters.property);
        } else {
          params.append("property", filters.property); // fallback
        }
      }

      const res = await fetch(
        `${process.env.REACT_APP_FEATURE_LISTINGS}/properties/filter?${params.toString()}`
      );

      if (!res.ok) throw new Error("Failed to fetch properties");

      const data = await res.json();
      return data;
    } catch (err) {
      setError(err.message);
      console.error("❌ Error fetching properties:", err);
      return null;
    }
  };

  return { checkProperty,  error };
};


