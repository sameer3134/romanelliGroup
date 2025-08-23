import React, { useEffect, useState } from 'react'
import FilterPage from './filter';
import { useNavigate } from 'react-router-dom';
import { usePropertySearch } from './api/getCheckProperty';
import LoadingScreen from '../../../loading/loadingScreen';

const FirstPageProperties = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0)
  const [filterOpen, setFilterOpen] = useState(false)
  const [placeholder, setPlaceholder] = useState("Enter city");
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

    updatePlaceholder(); // Set initial placeholder
    window.addEventListener("resize", updatePlaceholder); // Update on resize

    return () => window.removeEventListener("resize", updatePlaceholder); // Cleanup
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
            className="w-full bg-white p-3 pl-4 text-black  focus:outline-none"
            placeholder={placeholder}
            value={filters.searchCity}
            onChange={(e) => setFilters({ ...filters, searchCity: e.target.value })}
          />
          <div className='absolute right-1 top-2 md:top-1 bottom-1'>
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


      {filterOpen && < FilterPage close={() => { setFilterOpen(false) }} onSave={handleFilterSave} />}
    </div>

  )
}

export default FirstPageProperties