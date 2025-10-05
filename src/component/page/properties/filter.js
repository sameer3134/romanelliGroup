import React, { useState } from "react";
import DoubleRangeSlider from "./priceRange";
import { typeFilter1, typeFilter2, typeFilter3, typeFilter4, typeFilter5, typeFilter6, typeFilter7, typeFilter8 } from "../../../assets/allImg";

    const bedrooms = ["Any", "1", "2", "3", "4", "5+"]
    const bathrooms = ["Any", "1", "2", "3", "4", "5+"]
//  "Residential",
//   "Residential Lease",
//   "Residential Income",
//   "Land",
//   "Commercial Sale",
//   "Commercial Lease",
//   "Farm"
    const PropertyTypes=[{
        type:"Residential",
        Link:typeFilter1
    },{
        type:"Residential Lease",
        Link:typeFilter2
    },
    {
        type:"Residential Income",
        Link:typeFilter3
    },
    {
        type:"Farm",
        Link:typeFilter4
    },
    {
        type:"Commercial Sale",
        Link:typeFilter5
    },
    {
        type:"Commercial Lease",
        Link:typeFilter6
    },
    {
        type:"Land",
        Link:typeFilter7
    },
    // {
    //     type:"Other",
    //     Link:typeFilter8
    // },
]

const FilterPage = ({ close , onSave }) => {
    const handlePriceChange = ({ min, max }) => {
        setPriceRange({ min, max }); // ✅ store in state
    };
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
    const [selectedBedroom, setSelectedBedroom] = useState(null);
    const [selectedBathroom, setSelectedBathroom] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);


    const resetFilters = () => {
        setSelectedBedroom(null);
        setSelectedBathroom(null);
        setSelectedProperty(null);
        setPriceRange({ min: 0, max: 50000 });
        close()
    };
    const saveSearch = () => {
    const filters = {
      min: priceRange.min,
      max: priceRange.max,
      bedrooms: selectedBedroom,
      bathrooms: selectedBathroom,
      property: selectedProperty,
    };

    // send to parent
    if (onSave) {
      onSave(filters);
    }
  };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="p-4 text-2xl font-bold text-left relative bg-red-900 text-white flex items-center justify-between">
                    <span>Filters</span>
                    <button
                        type="button"
                        className="w-6 h-6 flex items-center justify-center bg-black text-white hover:text-gray-300"
                        onClick={close}
                    >
                        <span aria-hidden="true" className="font-normal text-sm">
                            X
                        </span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                    {/* Price Range */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Price Range</h2>
                        <DoubleRangeSlider min={0} max={50000} onChange={handlePriceChange} />
                    </div>
                    
                    <hr className="my-4 border-gray-200" />
                    
                    {/* Bedrooms */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Bedrooms</h2>
                        <div className="flex flex-wrap gap-2">
                            {bedrooms.map((room, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedBedroom(room)}
                                    className={`rounded border py-1 px-3 text-sm md:px-4 md:text-base ${
                                        selectedBedroom === room
                                            ? "bg-gray-800 text-white"
                                            : "border-gray-300 text-gray-700"
                                    }`}
                                >
                                    {room}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <hr className="my-4 border-gray-200" />
                    
                    {/* Bathrooms */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Bathrooms</h2>
                        <div className="flex flex-wrap gap-2">
                            {bathrooms.map((numbers, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedBathroom(numbers)}
                                    className={`rounded border py-1 px-3 text-sm md:px-4 md:text-base ${
                                        selectedBathroom === numbers
                                            ? "bg-gray-800 text-white"
                                            : "border-gray-300 text-gray-700"
                                    }`}
                                >
                                    {numbers}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <hr className="my-4 border-gray-200" />
                    
                    {/* Property Types */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Property types</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {PropertyTypes.map((property, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProperty(property.type)}
                                    className={`rounded border flex flex-col items-center justify-center p-2 ${
                                        selectedProperty === property.type
                                            ? "bg-gray-800 text-white"
                                            : "border-gray-300 text-gray-700"
                                    }`}
                                >
                                    <img
                                        src={property.Link}
                                        alt={property.type}
                                        className="w-8 h-8 mb-1 object-contain"
                                    />
                                    <span className="text-xs md:text-sm text-center">{property.type}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Footer Buttons */}
                <div className="p-4 flex justify-between border-t">
                    <button 
                        type="button" 
                        className="py-2 px-4 bg-gray-200 text-black rounded"
                        onClick={resetFilters}
                    >
                        Reset Filter
                    </button>
                    <button 
                        type="button" 
                        onClick={saveSearch}
                        className="py-2 px-4 bg-black text-white rounded"
                    >
                        Save Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;