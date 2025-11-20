import React, { useEffect, useState, useRef } from 'react'
import FilterPage from './filter';
import { useNavigate } from 'react-router-dom';
import { usePropertySearch } from './api/getCheckProperty';
import LoadingScreen from '../../../loading/loadingScreen';
import SideModal from '../home/sideModal';

const FirstPageProperties = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0)
  const [filterOpen, setFilterOpen] = useState(false)
  const [placeholder, setPlaceholder] = useState("Enter city");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const autocompleteService = useRef(null);
  const inputRef = useRef(null);
  const [filters, setFilters] = useState({
    min: 0,
    max: 50000,
    bedrooms: null,
    bathrooms: null,
    property: null,
    searchCity: "",
    selectedOption: "Buy"
  });
  const navigate = useNavigate()

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

    // Load Google Maps JavaScript API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => {
        if (window.google && window.google.maps && window.google.maps.places) {
          autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
      };
      document.head.appendChild(script);
    } else if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);
  const { checkProperty, error } = usePropertySearch(); // ✅ hook
  const handleFilterSave = async (values) => {
    setFilters(values);
    setFilterOpen(false);
    setLoading(true)
    const f = { ...values, searchCity: filters.searchCity, selectedOption: filters.selectedOption }
    const data = await checkProperty(f); // ✅ reuse
    setLoading(false)
    if (data) {
      navigate(`/details/properties`, { state: { data, filters: f } });
    }
  };
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) return oldProgress; // Stop at 90%
        return oldProgress + 5;
      });
    }, 300);

    // Clean up interval on component unmount
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
            <span className="italic font-playfair">Dream Property</span> is Just a Click Away
          </h1>
          <p className="mx-auto leading-relaxed font-medium text-base sm:text-xl max-w-2xl mt-4">
            From charming family homes to lucrative investment opportunities, your ideal property is just a search away.
          </p>
        </div>

        {/* Toggle & Input Section */}
        <div className="flex justify-start items-center mx-auto  max-w-2xl">
          <div className='px-1 py-1 bg-white'>
            <button
              className={`p-2 px-4   ${filters.selectedOption === "Buy" ? "bg-gray-900 text-white" : "text-gray-900 bg-white"
                }`}
              onClick={() => setFilters({ ...filters, selectedOption: "Buy" })}
            >
              Buy
            </button>
          </div>
          <div className='py-1 pr-1 bg-white'>
            <button
              className={`p-2 px-4  ${filters.selectedOption === "Rent" ? "bg-gray-900 text-white" : "text-gray-900 bg-white"
                }`}
              onClick={() => setFilters({ ...filters, selectedOption: "Rent" })}
            >
              Rent
            </button>
          </div>
        </div>

        {/* Search Box */}
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
                    types: ['(cities)'],
                    componentRestrictions: { country: 'us' }
                  },
                  (predictions, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
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
            onBlur={() => {
              setTimeout(() => setShowDropdown(false), 100);
            }}
            onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
          />
          
          {/* Dropdown */}
          {showDropdown && suggestions.length > 0 && (
            <div className="dropdown-container absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 max-h-40 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={suggestion.place_id || index}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onMouseDown={async (e) => {
                    e.preventDefault();
                    console.log('Dropdown clicked:', suggestion.description);
                    const updatedFilters = { ...filters, searchCity: suggestion.description };
                    console.log('Updated filters:', updatedFilters);
                    setFilters(updatedFilters);
                    setSuggestions([]);
                    setShowDropdown(false);
                    setLoading(true);
                    console.log('Calling checkProperty...');
                    try {
                      const data = await checkProperty(updatedFilters);
                      console.log('API response:', data);
                      setLoading(false);
                      if (data) {
                        navigate(`/details/properties`, { state: { data, filters: updatedFilters } });
                      } else {
                        console.log('No data returned from API');
                      }
                    } catch (error) {
                      console.error('API call failed:', error);
                      setLoading(false);
                    }
                  }}
                >
                  <div className="text-sm text-gray-800">{suggestion.description}</div>
                </div>
              ))}
            </div>
          )}
          <div className='absolute right-1 top-2 md:top-1 bottom-1 z-10'>
            <button className="bg-gray-100 mr-2 text-black text-xs sm:text-sm px-3 sm:px-4 py-2 border border-gray-200">
              <div className='flex' onClick={() => { setFilterOpen(true) }}>  Filter  <span className="ml-2 flex items-center">
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="12.1367" x2="20" y2="12.1367" stroke="black" strokeWidth="1.5" />
                  <line y1="3.24609" x2="20" y2="3.24609" stroke="black" strokeWidth="1.5" />
                  <rect x="11.5" y="0.941406" width="5" height="4.33333" stroke="black" />
                  <rect x="3.5" y="9.83203" width="5" height="4.33333" stroke="black" />
                  <rect x="4" y="10.2188" width="4" height="3.55556" fill="white" />
                  <rect x="12" y="1.33203" width="4" height="3.55556" fill="white" />
                </svg>
              </span></div>
            </button>
            <button className=" bg-red-800 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 " onClick={async () => {
              setLoading(true)
              const data = await checkProperty(filters); // ✅ reuse
              setLoading(false)
              if (data) {
                navigate(`/details/properties`, { state: { data, filters } });
              }
            }}
            >
              Check Now
            </button>
          </div>
        </div>
      </div>
 <SideModal/>

      {filterOpen && < FilterPage close={() => { setFilterOpen(false) }} onSave={handleFilterSave} />}
    </div>

  )
}

export default FirstPageProperties