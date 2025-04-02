import React, { useState } from "react";
import DoubleRangeSlider from "./priceRange";

const Filter = ({ close }) => {
    const handlePriceChange = ({ min, max }) => {
        console.log(`Min price: $${min}, Max price: $${max}`);
    };
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedBedroom, setSelectedBedroom] = useState(null);
    const [selectedBathroom, setSelectedBathroom] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);
    
    const bedrooms = ["Any", "1", "2", "3", "4", "5+"]
    const bathrooms = ["Any", "1", "2", "3", "4", "5+"]

    const PropertyTypes=[{
        type:"Residential",
        Link:"https://media-hosting.imagekit.io/06351a000a2642aa/house-water-svgrepo-com%201.png?Expires=1838067554&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WPBx~knRJwtC36F-rZnZUC1fWRcG5MT3aMx7xstCqW3tJ1Ki1z1ZsNZN~kEaFmO8Dn4wISlv2VfBgsKOBI5ZMakQ2cSJpp35~~c~iVfVEMHfDYqSwzEYfrlgLgdor-iGTqK27LrakiwWO33Ax2dO3vd53HwIPgic6XgU8NK-vtAUf3DnqTn7TlXyZBGFzFpjgUQwnDy6rCzpUNMcgDOeNK~9OBD-L1KMRVgFqdM7Nckoto8wJacwov9tkIQLq--Qm-SpTNj1GRjVJg1BniboAX4AK9BIFE8APXeEPc4~kQnRXikbbEmBbQneA8LBy-Y5IAjBXkbvqyB-eYmHN8NccA__"
    },{
        type:"Townhomes",
        Link:"https://media-hosting.imagekit.io/5ef05927f6ec4567/town-house-svgrepo-com%201.png?Expires=1838067571&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kVtxQ2uMHsYi4QrUrKTPk4St17DD8VcrJ-exOHxoDpsR7K2bqZTGf8VZjp0Ajs9QDhi6twdDWr7pg-OqNWb7UnL1Yu0rqxcjeEec01Ln~kdqYXE6XIMYlNybXnBmCCzfPEWJo4H-w4wl2fQIX6Y0QtDeLRF9pOH1U~p~RuZ1BxlORlJlJ7zbQtXQzAgBJW3-xuvSbwKzhmbI~xspKWPUGAML6VwSm8CxAHxjPr7brBqc2VdIsAimtsr9P36lu~USIXDqdWKnmNirxW5bvuIcEf7-ZepOQ72DyM6V8Mxsd6bFR88OQzAw-I3eSsxfj82xaPG4r7A4VMYF9RD54qcdcw__"
    },
    {
        type:"Multi-family",
        Link:"https://media-hosting.imagekit.io/f0d5262c843842d3/Property%201=linear%201.png?Expires=1838067537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mXo7rdYz7wMjUjBQhPnQV0evvcS7PZdEOY4Qu76hd-xMhP8WuCWk1mpR-y5ZVXvVtHx7Ti2bXJ8UxN43EHM5YZJa3yDV3kH3jEwV8mNNEODCOzw1tsCRYPQ8RqfF70phXArtMbcfUFxnBlHTqMGJtXP5JVZC52jJQ-HwXf2fkk-EQuQNe50uY1xVCPDNOMwfYNP~s05xDo1bh09yRqYQnimynOQh0s0Fn65UyQd9JD12MC0Ky350axa324T6kdHfFzeSWPBZGc6O5~OCLuM4JzEyIY6TbqpYT3JaoCFnc1GXemUIJLJAGfvnQFHWIQlAI1dTtw6Qdoxt587A1CV33Q__"
    },
    {
        type:"Co-op",
        Link:"https://media-hosting.imagekit.io/1b91c1bb2dbb43a5/Property%201=linear%20(1)%201.png?Expires=1838067547&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iGraOmZcq6yY2n1aO0TbcegCHIgATnPZnsfxsCr~ZFQ4iymmUWc2vz~FUjqsjnswb0D7EDzFECBvcphOLngmWo6SGY91E1YPPbl1kXEuzn-W6iAwSffI2v5hf6uAfkqkLh-3x4pMuNalFAOFpRbtVZSJoGwZ8XA~TzqmI0oW16etaccG7-RhSmWi3WyJnHfKuQ92GELDcT37wLvQRB9dTT0hvAtOId9b6k--E0gBfuS5-~zIeHH-w2K~6sLQPKPQGZfo645eocz~yGYjl4gyCgy2uzIzjousNTEn6yJKbvCm91qU4sTxTWvziDiVZHm7feMwRI-1343XQ8GTjFn5WA__"
    },
    {
        type:"Commercial",
        Link:"https://media-hosting.imagekit.io/0b866c0ef9c74099/shop-2-svgrepo-com%201.png?Expires=1838067533&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hiRUmG8Vu5nER23VYIo9gCl1OdmSSc2DKfoLFq5ioCky~l74ponpnHzcfy3VqDp4B-goWsk1jR8me1XF~jWK7B7nxGF4uCfPOpi-kw-AV9oPgKm7fDUXEtgK7tJPCERI1ER6LBz2y8asX6~79V39z5WskKfMqMeNLqZj8Vt8KRWkJXE0MAdu09KYv7Hyvggs2GkZouRJ4z16HmfzfKWbD1BadOtv0gb~y~d0n4y4tEVXIa4VU04SrccAvrO23HnNbrLK2G72BCw6AhhL4WQRDSL8V8GHtbNC--b7LMebeRUeyffs2m3IOaytba2zfeZYoVKmjzRUBtkV5-pi6f7pbw__"
    },
    {
        type:"Manufactured",
        Link:"https://media-hosting.imagekit.io/282e745bd3814d11/Property%201=linear%20(3)%201.png?Expires=1838067540&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZmMnJKaVsa96xexWkhtuvIB5b2nAoxwItqOr9WIroQORI7kS4JmgRW3n6sh6MDxnDZFg8CGwjquG~b76MrGJRA6CDz4sCPMOxPJDEaXPeyWLbSBvf85M02UBHRXfejZ9vkirgSYImIARUTxtJd0kNhBp2CD98glzsL-Gd1rEiRunFEc6khRZ6eFIHRt2fb4QCihd4~0xheaxrpfLXpl4m4wkpj6aEcccRncDX~oRCcaehH7248mqYGyY9i50wkOIlxsw4KPpRMS3Ba-YTsACheInYiiTwWyESO~q2ERzcLc8Xu2nCG102WtWfUQ5Xi4zok9V~6ux4Rrqk4TDv-~rgw__"
    },
    {
        type:"Land",
        Link:"https://media-hosting.imagekit.io/61530ec381f94383/Property%201=linear%20(2)%201.png?Expires=1838067543&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ObMjasYMMTbRXSPZIpxiQx08BkC7Hd0eJ~Uc9Z4J1VmFR5Bt1RmlPlvq5T-zG78XPNKOQQOeS0jQUGWR5U~Q6~d~BgBs6n4Zum0eYX11QpkyjIDzvTQ-~guoDNF6ZHpI6BQ2-evlQsRoVBvE8Fv9E-~ucs5FepqzJtbhDGEJzEfozqvHAuN8z90XWRqDdn5KxcSSx79RjTIBTynjVJWhQv2IBYmc907QXncohPBtLnMD8r254zAapelglTJQXe8JNNbOvYcAXnWfuQOXC-3alhHN534nqt~rEY5MSDNZA2GHUIUWzIBUa6vlXUuU~BoTd2xgSZXeTNwfG6tls9U2Aw__"
    },
    {
        type:"Other",
        Link:"https://media-hosting.imagekit.io/19625f80a6a34b33/other-1-svgrepo-com%201.png?Expires=1838067551&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zvJaJANSI17kyYcb3eXfV0ESQClXI6OVQYSFZUQr9Ax7uGnAWIYM7n8fU2TmsKpYnJeP~Jcs9rE4xH-soiXOO3hZpxb9p0LRYPO3j-px6eovTsD3v42GpvVvCW-gvCjKyTGlLh5MKXg23E93Vhj3rFW~TKh9CHior6uku4nYjsCYez8Y~jVKQU8gj16vS6bZKCLBnBJ5W2gHEY8MQ8Iteq1qVhiPhoqM5V30HtxDStm6c9dcWJlzLKZoQSbSyHevm6QSfagGLMGQwzoS3sAbrFi7glgC3O7G93-SHCL9yULR8Y0fwiUkgePg0n~DPcdL14~qALBmJ-oMbPNII6c40g__"
    },
]

    const resetFilters = () => {
        setSelectedSize(null);
        setSelectedBedroom(null);
        setSelectedBathroom(null);
        setSelectedProperty(null);
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
                        <DoubleRangeSlider min={0} max={1000} onChange={handlePriceChange} />
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
                        className="py-2 px-4 bg-black text-white rounded"
                    >
                        Save Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;