import React, { useEffect, useState } from 'react';
import apiServices from '../../../Service/apiService';
import DetailSingleItem from '../properties/detailSingleItem';
import { useNavigate } from 'react-router-dom';

const FeaureListing = () => {
  const [listings, setListings] = useState([]);
  const [allData, setAllData] = useState([]);
const navigate = useNavigate();
  const apiResult = async () => {
    try {
      const response = await apiServices.get(
        "authentication",
        "/listings/Property",
        null,
        null
      );
      const data = response.value || [];
      setAllData(data);

      // Filter for only valid listings
      const filtered = data.filter(item =>
        item.ListPrice &&
        (item.StreetNumber || item.UnparsedAddress) &&
        item.PublicRemarks &&
       item.BedroomsTotal && item.BathroomsTotalInteger && item.BuildingAreaTotal  && item.Latitude && item.Longitude
      );

      // Map to simplified objects & limit to 6
      const mapped = filtered.slice(0, 6).map(item => ({
        id: item.ListingKey,
        amount: item.ListPrice,
        heading: item.StreetNumber
          ? `Street - ${item.StreetNumber}, ${item.StreetName}`
          : item.UnparsedAddress || "No Address",
        description: item.PublicRemarks
          ? item.PublicRemarks.split(" ").slice(0, 12).join(" ") + "..."
          : "No description available",
        bedroom: item.BedroomsTotal,
        bathroom: item.BathroomsTotalInteger,
        area:item.BuildingAreaTotal,
        lat : item.Latitude || item.latitude || item.lat,
        lng : item.Longitude || item.longitude || item.lng || item.lon,
        detail: [
          item.BedroomsTotal ? `Bedroom - ${item.BedroomsTotal}` : "",
          item.BathroomsTotalInteger ? `Bath - ${item.BathroomsTotalInteger}` : "",
          item.BuildingAreaTotal ? `Area - ${item.BuildingAreaTotal} sqft` : ""
        ]
          .filter(Boolean)
          .join(" | "),
        location: `${item.StreetNumber} ${item.StreetName}, ${item.City}, ${item.StateOrProvince} ${item.PostalCode}`,
        image:
          item.Media && item.Media.length > 0
            ? item.Media[0].MediaURL
            : "https://ik.imagekit.io/ic938owib/0041de26f53f09af894faf5811e9348ae7d2f6d5.png?updatedAt=1748094166923",
      }));

      setListings(mapped);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiResult();
  }, []);
const handleGetItem=(id)=>{
     navigate(`/properties/${id}`, { state: {id, listings,allData } }); // ✅ Pass unique data
}
  return (
    <section className="text-white body-font bg-backgroundColor">
      <div className="container px-0 lg:px-24 pt-8 mx-auto">
        <div className="flex flex-wrap w-full mb-8">
          <div className="lg:w-1/2 w-full lg:mb-0 text-left ml-4 lg:ml-8">
            <h1 className="sm:text-5xl text-2xl font-semibold heading-font mb-2 text-white">
              <span className="font-playfair italic">Featured</span> Listings
            </h1>
          </div>
        </div>
      </div>

      {/* Scrolling Image Section */}
      <div className="relative flex overflow-hidden space-x-4 sm:space-x-6 group w-full">
        {[...Array(2)].map((_, setIndex) => (
          <div
            key={setIndex}
            className="flex space-x-4 sm:space-x-6 animate-loop-scroll group-hover:[animation-play-state:paused]"
            aria-hidden={setIndex === 1 ? "true" : undefined}
          >
            {listings.map((item, index) => (
              <div key={`${item.id}-${index}`} className="relative group/item">
                <img
                  src={item.image}
                  className="max-w-none w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] lg:w-[440px] lg:h-[500px] object-cover"
                  alt={item.heading}
                />
                <div className="absolute text-left inset-0 flex flex-col items-start justify-start opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 p-4">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-transparent"></div>
                  <div className="text-black absolute bottom-0 left-0 w-full h-2/3 md:h-1/2 bg-white flex flex-col items-start justify-start p-3 sm:p-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                      $<span className='italic sm:text-3xl lg:text-4xl'>{item.amount}</span>
                    </h3>
                    <p className="text-base sm:text-lg mt-1 font-semibold">{item.heading}</p>
                    <h3 className="text-sm sm:text-lg mt-1">{item.detail}</h3>
                    <p className="text-sm sm:text-md font-semibold mt-1 ">{item.description}</p>
                    <button className="w-full py-2 px-2 bg-red-800 text-white mt-2 text-sm sm:text-base" onClick={()=>handleGetItem(item.id)}>
                      Schedule a Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaureListing;
