import React, { useState, useEffect } from 'react'
import DoubleRangeSlider from '../priceRange'
import { ChevronDown, Search, Filter } from 'lucide-react';
import { usePropertySearch } from '../api/getCheckProperty';

const Header = ({ filter, onResults }) => {
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [localFilters, setLocalFilters] = useState({
    searchCity: filter?.searchCity || '',
    selectedOption: filter?.selectedOption || 'Buy',
    property: filter?.property || null,
    min: filter?.min || 0,
    max: filter?.max || 50000,
    bedrooms: filter?.bedrooms || null,
    bathrooms: filter?.bathrooms || null
  });

  const allowedPropertyTypes = [
    "Residential",
    "Residential Lease",
    "Residential Income",
    "Land",
    "Commercial Sale",
    "Commercial Lease",
    "Farm"
  ];

  const { checkProperty, loading, error } = usePropertySearch();

  // Sync with parent filter changes
  useEffect(() => {
    setLocalFilters({
      searchCity: filter?.searchCity || '',
      selectedOption: filter?.selectedOption || 'Buy',
      property: filter?.property || null,
      min: filter?.min || 0,
      max: filter?.max || 50000,
      bedrooms: filter?.bedrooms || null,
      bathrooms: filter?.bathrooms || null
    });
  }, [filter]);

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? '' : dropdown);
  };

  const updateFilter = (key, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePriceChange = ({ min, max }) => {
    setLocalFilters(prev => ({
      ...prev,
      min,
      max
    }));
  };

  const handleBuyRentChange = (option) => {
    console.log(option)
    updateFilter('selectedOption', option);
    setDropdownOpen('');
  };

  const handlePropertyTypeChange = (propertyType) => {
    updateFilter('property', propertyType);
    setDropdownOpen('');
  };

  const directSearch = async () => {
    setDropdownOpen('');
    console.log('Direct search with filters:', localFilters);
    if (onResults) {
      onResults(localFilters);
    }
  };

  const filteredSearch = async () => {
    console.log('Filtered search - Updated filters:', localFilters);
    setDropdownOpen('');
    // Show updated filtered values
    console.log('Current Filter State:', {
      searchCity: localFilters.searchCity,
      selectedOption: localFilters.selectedOption,
      property: localFilters.property,
      min: localFilters.min,
      max: localFilters.max,
      bedrooms: localFilters.bedrooms,
      bathrooms: localFilters.bathrooms
    });

    // Call the property search with updated filters
    if (onResults) {
      onResults(localFilters);
    }

    // You can also trigger the actual API call here if needed
    try {
      await checkProperty(localFilters);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Search Header */}
      <div className="flex items-center px-6 py-4">
        {/* Search Section */}
        <div className="flex-1 flex space-x-2 w-full">
          {/* Location Search */}
          <div className="relative w-full max-w-xl">
            <div className="flex">
              <input
                type="text"
                className="flex-1 relative bg-white border border-gray-300 p-3 pl-4 text-black focus:outline-none focus:border-red-500"
                value={localFilters.searchCity}
                onChange={(e) => updateFilter('searchCity', e.target.value)}
                placeholder="Enter location..."
              />
              <button 
                onClick={directSearch} 
                className="bg-red-600 absolute right-1 top-2 md:top-1 bottom-1 hover:bg-red-700 text-white px-6 py-3 font-medium flex items-center"
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex items-center ml-4 space-x-2">
            {/* Buy/Rent Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('sale')}
                className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
              >
                <span className="text-sm">For {localFilters.selectedOption}</span>
                <ChevronDown size={16} />
              </button>
              {dropdownOpen === 'sale' && (
                <div className="absolute top-full left-0 bg-white border text-gray-900 border-gray-300 shadow-lg z-10 w-40">
                  <div className="py-1">
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleBuyRentChange('Buy')}
                    >
                      For Buy
                    </button>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => handleBuyRentChange('Rent')}
                    >
                      For Rent
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Price Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('price')}
                className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
              >
                <span className="text-sm">Price</span>
                <ChevronDown size={16} />
              </button>
              {dropdownOpen === 'price' && (
                <div className="absolute w-[300px] my-2 px-2 bg-white border text-gray-900 border-gray-300 shadow-lg z-10">
                  <DoubleRangeSlider 
                    min={localFilters.min} 
                    max={localFilters.max} 
                    onChange={handlePriceChange} 
                  />
                </div>
              )}
            </div>

            {/* Property Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('type')}
                className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
              >
                <span className="text-sm">
                  {localFilters.property || "Property type"}
                </span>
                <ChevronDown size={16} />
              </button>
              {dropdownOpen === 'type' && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-10 w-44">
                  <div className="py-1 text-gray-900">
                    {allowedPropertyTypes.map((item, index) => (
                      <button 
                        key={index}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => handlePropertyTypeChange(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Filter Button */}
            <button
              onClick={() => toggleDropdown('filter')}
              className="border border-gray-300 px-4 py-3 bg-white text-gray-900 font-medium flex items-center space-x-2 hover:bg-gray-50"
            >
              <Filter size={16} />
              <span className="text-sm">Filter</span>
            </button>
          </div>
        </div>

        {/* Save Search Button */}
        <div className="ml-6">
          <button 
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-sm font-medium" 
            onClick={filteredSearch}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Save search'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px #ccc;
        }
        .slider-thumb::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px #ccc;
        }
      `}</style>
    </div>
  );
};

export default Header;