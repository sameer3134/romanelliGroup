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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkProperty = async (filters) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return { checkProperty, loading, error };
};


  // const checkProperty = async (filters) => {
  //   try {
  //     // Build query params safely
  //     const params = new URLSearchParams();
  //     console.log(filters)
  //     if (filters.searchCity!=="") params.append("city", filters.searchCity);
  //     if (filters.min) params.append("min", filters.min);
  //     if (filters.max) params.append("max", filters.max);
  //     if (filters.bedrooms && filters.bedrooms !== "Any") params.append("bedrooms", filters.bedrooms);
  //     if (filters.bathrooms && filters.bathrooms !== "Any") params.append("bathrooms", filters.bathrooms);
  //     if (filters.selectedOption) params.append("listingType", filters.selectedOption);  
  //     if (filters.property) {
  //       // Match only valid PropertyType
  //       const allowedPropertyTypes = [
  //         "Residential",
  //         "Residential Lease",
  //         "Residential Income",
  //         "Land",
  //         "Commercial Sale",
  //         "Commercial Lease",
  //         "Farm"
  //       ];

  //       if (allowedPropertyTypes.includes(filters.property)) {
  //         params.append("property", filters.property);
  //       } else {
  //         // If it's a sub type, map to correct field
  //         params.append("property", filters.property);
  //       }
  //     }
  //     const res = await fetch(`http://localhost:5000/api/properties/filter?${params.toString()}`);

  //     if (!res.ok) {
  //       throw new Error("Failed to fetch properties");
  //     }

  //     const data = await res.json();

  //     if (!data || (Array.isArray(data) && data.length === 0)) {
  //       console.log("⚠️ No properties found");
  //       return;
  //     }

  //     console.log("✅ Properties:", data);
  //    navigate(`/details/properties`, { state: {data , filters} }); 
  //   } catch (err) {
  //     console.error("Error fetching properties", err);
  //   }
  // }