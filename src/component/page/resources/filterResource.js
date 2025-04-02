import React, { useState } from "react";

const FilterResource = ({ close }) => {
    const handlePriceChange = ({ min, max }) => {
        console.log(`Min price: $${min}, Max price: $${max}`);
    };
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedBedroom, setSelectedBedroom] = useState(null);
    const [selectedBathroom, setSelectedBathroom] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const bedrooms = ["Home Buying Tips", "Market Trends", "Seller Resources", "Real Estate Investments", "Neighborhood Insights", "Luxury Properties"]
    const bathrooms = ["All", "Latest FIrst", "Oldest First"]

    const PropertyTypes = [{
        type: "All",

    }, {
        type: "Blog Posts",
        Link: "https://media-hosting.imagekit.io/716a1599aca143a7/blog.png?Expires=1838099321&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cSTPWo1GdgIYtegCcQbZmuXyDdzznWYu-hOoYsvzlZh0IV9Ln-yNCkHuU4wYZXHO~Asf-jm1RilsiJtu6g7nyUSp9Y96ceMS9GdpnttPRFzhCiRLrgUQeoFmgYOhQosSmQ5Rm-0s7AMwyHpLpeDZ~WtssCaav-~at7s2zXEFgmZbJMi47aIHWgVUhLP-8CydHkyWvW-P0cFkkySIqleTzQUnOJD~SjHWAo-IlcIkO9TAQta5IMhofe3utOt3Qc0xulQDjSHK~pXRGjRtEhSupy~iR-JcmHpC1417OGxmHT0zIU7Bi38~Taj17MksNf4c6jn1jowgL5GhJWtc0ll0uQ__"
    },
    {
        type: "Media",
        Link: "https://media-hosting.imagekit.io/4cda34cb9e45419e/media.png?Expires=1838099308&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wz3lcnCOpNE9W2g0ikzJcAYClEfhTfvyN1Row9jQ6lfQTe0BBNd6~1UVGEvvpVnFOiIdmoATVJu48TPzJherfgITS-iyR8IEvvNKLQcVkW7a~SKNzOo3nje4nh4hwA4AKpseZ4Ezo-z2VIcntCv-BOo8rAEsUTTnOIy4WvOdRqHqkm3fMN~N~SrlsPXyw~ChB4Ev2T1R8vPwSZROyQOBLhYpMl62n27EOSWlUUcPqyTxprH2y6rSM8u4OW4svGpZxcxtPa41AfFsreOw~mxYftLUp5DWqemmYi6ybcwB8xnbEdy2DXQMtZ1VQTSn7pEjaJPNyPC3ZeHWJ~Z~43NXVQ__"
    },
    {
        type: "Case Studies",
        Link: "https://media-hosting.imagekit.io/86c110f58f2b4f85/case.png?Expires=1838099299&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OZQFCLJg7vMwmprtCbvpWWy2OW2BlMoBiQgHlY78Yxmy4J8T~Xte53EM9ykCp9RTBukk4tfAHR1CNe6kWaiqRQ5Njndl75wq5uN6JwvHdlIp0rvvK1v2s3kC6HyU7Yi6~K0r77vyWIfVIv~Ci-m1BhDzUJg-uK7-CEHh~n0fy~V1uYQNib9E1oSl78LhfLiYkAFJvCoSHgyiDEBepIDnQEmxM0xzNvRKphc4RFJZijc6LMvZi0nKsZrUsD07fZIodU2qM1AI-bQ15s3o5bVFi4UyGA1uY2KAeTAjupl9uetiB4Xs3H9HnXblypWwEYjKOmHuu-Q1vGw-fmYVGeMKHA__"
    }
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
                    {/* Property Types */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Property types</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {PropertyTypes.map((property, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedProperty(property.type)}
                                    className={`rounded border flex flex-col items-center justify-center p-2 ${selectedProperty === property.type
                                            ? "bg-black text-white"
                                            : "border-gray-300 text-gray-700"
                                        }`}
                                >
                                   {property.Link ? (
                                    <>
                                        <img
                                            src={property.Link}
                                            alt={property.type}
                                            className="mb-2 object-contain"
                                        />
                                        <span className="text-xs md:text-sm text-center">{property.type}</span></>
                                    ) : (
                                        <div className="text-gray-800 mb-2 flex items-center justify-center text-xl font-semibold">
                                            {property.type === "All" ? "All" : ""}
                                        </div>
                                    )}
                                  
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr className="my-4 border-gray-200" />

                    {/* Bedrooms */}
                    <div>
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">Topics</h2>
                        <div className="flex flex-wrap gap-2">
                            {bedrooms.map((room, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedBedroom(room)}
                                    className={`rounded border py-1 px-3 text-sm md:px-4 md:text-base ${selectedBedroom === room
                                            ? "bg-black text-white"
                                            : " bg-gray-200 text-black"
                                        }`}
                                >
                                    {room}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr className="my-4 border-gray-200" />

                    {/* Bathrooms */}
                    <div >
                        <h2 className="text-lg font-semibold text-left mb-2 text-black">By Date</h2>
                        <div className="flex flex-wrap gap-2">
                            {bathrooms.map((numbers, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedBathroom(numbers)}
                                    className={`rounded border py-1 px-3 text-sm md:px-4 md:text-base ${selectedBathroom === numbers
                                            ? "bg-black text-white"
                                            : "border-gray-300 text-gray-700"
                                        }`}
                                >
                                    {numbers}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 mt-16 flex justify-between border-t">
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

export default FilterResource;