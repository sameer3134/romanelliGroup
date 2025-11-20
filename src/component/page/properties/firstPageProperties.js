import React, { useEffect, useState, useRef } from "react";
import FilterPage from "./filter";
import { useNavigate } from "react-router-dom";
import { usePropertySearch } from "./api/getCheckProperty";
import LoadingScreen from "../../../loading/loadingScreen";
import SideModal from "../home/sideModal";

const FirstPageProperties = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  const [placeholder, setPlaceholder] = useState("Enter city");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const autocompleteService = useRef(null);
  const inputRef = useRef(null);

  const [filters, setFilters] = useState({
    min: 0,
    max: 5000001,
    bedrooms: null,
    bathrooms: null,
    property: null,
    city: "",
    state: "",
    country: "",
    searchCity: "",
    selectedOption: "Buy"
  });

  const navigate = useNavigate();
  const { checkProperty } = usePropertySearch();

  // --------------------------------------
  // GOOGLE AUTOCOMPLETE SETUP
  // --------------------------------------
  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth >= 640) {
        setPlaceholder("Enter city, ZIP code, or neighborhood...");
      } else {
        setPlaceholder("Enter city");
      }
    };

    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
      };
      document.head.appendChild(script);
    } else {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  // --------------------------------------
  // PARSE CITY, STATE, COUNTRY
  // --------------------------------------
  const parseLocation = (desc) => {
    const parts = desc.split(",").map((p) => p.trim());
    return {
      city: parts[0] || "",
      state: parts[1] || "",
      country: parts[2] || "US"
    };
  };

  // --------------------------------------
  // FILTER SAVE HANDLER
  // --------------------------------------
  const handleFilterSave = async (values) => {
    const loc = parseLocation(filters.searchCity);
    const finalFilters = {
      ...filters,
      ...values,
      city: loc.city,
      state: loc.state,
      country: loc.country,
      listingType: filters.selectedOption
    };

    setFilters(finalFilters);
    setFilterOpen(false);

    if (!loc.city) return;

    setLoading(true);
    const data = await checkProperty(finalFilters);
    setLoading(false);

    if (data) {
      navigate(`/details/properties`, { state: { data, filters: finalFilters } });
    }
  };

  // --------------------------------------
  // PROGRESS BAR ANIMATION
  // --------------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => (old >= 90 ? old : old + 5));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading && <LoadingScreen progress={progress} />}

      <div className="relative z-10 container px-4 sm:px-5 py-12 md:py-24 mx-auto font-dmsans">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white mx-auto max-w-4xl px-4">
            Your{" "}
            <span className="italic font-playfair">Dream Property</span> is Just a
            Click Away
          </h1>
          <p className="mx-auto leading-relaxed font-medium text-base sm:text-xl max-w-2xl mt-4">
            From charming family homes to lucrative investment opportunities, your
            ideal property is just a search away.
          </p>
        </div>

        {/* Buy / Rent */}
        <div className="flex justify-start items-center mx-auto max-w-2xl">
          <div className="px-1 py-1 bg-white">
            <button
              className={`p-2 px-4 ${
                filters.selectedOption === "Buy"
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 bg-white"
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, selectedOption: "Buy" }))
              }
            >
              Buy
            </button>
          </div>
          <div className="py-1 pr-1 bg-white">
            <button
              className={`p-2 px-4 ${
                filters.selectedOption === "Rent"
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 bg-white"
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, selectedOption: "Rent" }))
              }
            >
              Rent
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-2xl mx-auto">
          <input
            ref={inputRef}
            className="w-full bg-white p-3 pl-4 text-black focus:outline-none"
            placeholder={placeholder}
            value={filters.searchCity}
            onChange={(e) => {
              const value = e.target.value;
              setFilters({ ...filters, searchCity: value });

              if (value.length > 2 && autocompleteService.current) {
                autocompleteService.current.getPlacePredictions(
                  {
                    input: value,
                    componentRestrictions: { country: "us" }
                  },
                  (predictions, status) => {
                    if (
                      status ===
                        window.google.maps.places.PlacesServiceStatus.OK &&
                      predictions
                    ) {
                      setSuggestions(predictions);
                      setShowDropdown(true);
                    } else {
                      setSuggestions([]);
                      setShowDropdown(false);
                    }
                  }
                );
              } else {
                setSuggestions([]);
                setShowDropdown(false);
              }
            }}
            onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
          />

          {/* Suggestions Dropdown */}
          {showDropdown && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto rounded-b-lg">
              {suggestions.map((s) => {
                const getLocationType = (types) => {
                  if (types?.includes('locality')) return 'City';
                  if (types?.includes('administrative_area_level_2')) return 'County';
                  if (types?.includes('administrative_area_level_1')) return 'State';
                  if (types?.includes('neighborhood')) return 'Neighborhood';
                  if (types?.includes('sublocality')) return 'Area';
                  if (types?.includes('postal_code')) return 'ZIP Code';
                  if (types?.includes('route')) return 'Street';
                  return types?.[0] || 'Location';
                };
                
                return (
                  <div
                    key={s.place_id}
                    className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                    onMouseDown={() => {
                      const loc = parseLocation(s.description);
                     
                      setFilters({ 
                        ...filters, 
                        searchCity: s.description,
                        city: loc.city,
                        state: loc.state,
                        country: loc.country
                      });
                      setSuggestions([]);
                      setShowDropdown(false);
                    }}
                  >
                    {/* Map Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg 
                        className="w-4 h-4 text-gray-600" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Location Details */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {s.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {getLocationType(s.types || [])}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Buttons */}
          <div className="absolute right-1 top-2 md:top-1 bottom-1 z-10 flex gap-2">
            <button
              className="bg-gray-100 text-black text-xs sm:text-sm px-3 sm:px-4 py-2 border border-gray-200"
              onClick={() => setFilterOpen(true)}
            >
              Filter
            </button>

            <button
              className="bg-red-800 text-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              onClick={async () => {
                if(!filters.searchCity){
                  alert("Please enter a city");
                  return;
                }
                
                // Parse location if not already parsed
                const loc = filters.city ? 
                  { city: filters.city, state: filters.state, country: filters.country } : 
                  parseLocation(filters.searchCity);
                
                const finalFilters = {
                  ...filters,
                  city: loc.city,
                  state: loc.state,
                  country: loc.country,
                  listingType: filters.selectedOption
                };

                setLoading(true);
                const data = await checkProperty(finalFilters);
                setLoading(false);

                if (data) {
                  navigate(`/details/properties`, {
                    state: { data, filters: finalFilters }
                  });
                }
              }}
            >
              Check Now
            </button>
          </div>
        </div>
      </div>

      <SideModal />

      {filterOpen && (
        <FilterPage
          close={() => setFilterOpen(false)}
          onSave={handleFilterSave}
          filterVal={filters}
        />
      )}
    </div>
  );
};

export default FirstPageProperties;