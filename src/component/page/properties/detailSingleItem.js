import React from 'react'
import { useLocation } from 'react-router-dom';
import Carousel from './single/carousel';
import Form from './single/form';
import RelatedItem from './single/relatedItem';
import { bathroom, bed, globe, hoa, hvac, park, propType, size, square, year } from '../../../assets/allImg';
import Footer from '../Default Pages/footer';
import PropertyMap from './single/propertymap';

const DetailSingleItem = () => {
     const location = useLocation();
  const {id,listings,allData} = location.state; // ✅ Get passed data
const unique=allData.find(item=> item.ListingKey===id);
console.log("r",unique)
  if (!unique) {
    return <p>No property found</p>; // Handles page refresh without state
  }


  const propertyDetails = [
    { label: 'Property Type', value: unique.PropertySubType || 'N/A' , img:propType },
    { label: 'Property Size', value: unique.BuildingAreaTotal ? `${unique.BuildingAreaTotal} sq ft` : 'N/A', img: size },
    { label: 'Year Built', value: unique.YearBuilt || 'N/A', img:year },
    { label: 'Days on Site', value: unique.DaysOnMarket ? `${unique.DaysOnMarket} Days` : 'N/A' , img:globe},
    { label: 'HVAC', value: unique.Heating ? unique.Heating.join(', ') : 'N/A' , img:hvac },
    { label: 'Parking', value: unique.AttachedGarageYN ? 'Yes' : 'No' , img: park},
    { label: 'HOA Fees', value: unique.AssociationFee ? `$${unique.AssociationFee}/monthly` : 'N/A' , img:hoa}
  ];

  const priceHistory = [
    { date: 'Feb 1, 2025', event: 'Listed', price: unique.ListPrice },
    { date: 'Feb 1, 2025', event: 'Listed', price: unique.ListPrice },
    { date: 'Feb 1, 2025', event: 'Listed', price: unique.ListPrice }
  ];

  return (
  <div className="pt-8  px-4 sm:px-6 lg:px-8">
      {/* Carousel Section */}
      <div className="mb-8">
        <Carousel image={unique.Media} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Property Overview & Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Property Overview */}
          <div className="bg-white rounded-lg ">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4 text-left font-sans">Property Overview</h1>
            <hr className='pb-2'/>
            <div className='flex  justify-between'>
            {/* Price and Basic Info */}
            <div className="mb-6 text-left w-3/4">
              <div className="text-3xl font-semibold text-gray-900 mb-2">
                ${unique.ListPrice?.toLocaleString() || 'N/A'}
              </div>
              <div className="text-gray-900 mb-2">
                {unique.UnparsedAddress || `${unique.StreetNumber} ${unique.StreetName}, ${unique.City}, ${unique.StateOrProvince} ${unique.PostalCode}`}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                Estimation payment provided by {unique.ListOfficeName || 'Keller Williams Realty Inc.'} is ${Math.round((unique.ListPrice || 0) * 0.005)}/mo
              </div>
              <hr/>
                     <div className="mb-6">
              <p className="text-gray-700 leading-relaxed text-sm">
                {unique.PublicRemarks || 'No description available.'}
              </p>
            </div>
                      {/* Property Details */}
          <div className="py-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 bg-gray-200 px-4 py-2">
              {propertyDetails?.map((detail, index) => (
                <div key={index} className="flex justify-between items-center py-1  border-b border-gray-300 last:border-b-0">
                  <div className="flex items-center gap-2">
                <img src={detail.img} className='w-4 h-4' alt={detail.img} />
                    <span className="text-gray-600 font-medium">{detail.label}</span>
                  </div>
                  <span className="text-gray-900 font-medium">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          <hr/>

          {/* Price History */}
          <div className="">
            <h2 className="text-xl font-semibold text-gray-900 my-4">Price History</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-200">
                <thead>
                  <tr className="">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Event</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceHistory?.map((history, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{history.date}</td>
                      <td className="py-3 px-4 text-gray-700">{history.event}</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">
                        ${history.price?.toLocaleString() || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Explore Neighbourhood */}
          <div className="bg-white rounded-lg shadow-sm pt-6">
            <hr className="mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore Neighbourhood</h2>
            <div style={{ position: 'relative', zIndex: 1 }}>
<PropertyMap property={unique} />

            
    </div>

            {/* Nearby Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">🏢</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Downtown: 15 mins by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">🌳</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Park: 10 mins by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">🏥</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Hospital: 8 mins by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">💊</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Pharmacy: 5 mins by car</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 text-sm">🚌</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Bus Station: 25 mins by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 text-sm">🚊</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Train Station: 35 mins by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-sm">✈️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Airport: 45 mins by car</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Update */}
          <div className="bg-white ">
                 <hr className="mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Update</h2>
       
            
            <div className="flex justify-between bg-gray-200">
              <div className="text-center p-4  rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">$600K</div>
                <div className="text-sm text-gray-800 font-semibold">Average List Price</div>
              </div>
              <div className="text-center p-4  rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-sm text-gray-800 font-semibold">Current Listings</div>
              </div>
              <div className="text-center p-4  rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2">88</div>
                <div className="text-sm text-gray-800 font-semibold">Average Active Days on Market</div>
              </div>
            </div>
          </div>

          {/* Explore Similar Properties */}
<RelatedItem listings={listings} allData={allData} id={id} />

              </div>
              <div className='w-1/4'>
              {/* Property Stats */}
              <div className=" gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
               <img className='w-4 h-4' src={bed} alt='bed'/>
                  <span>{unique.BedroomsTotal || 0} Bed</span>
                </div>
                <hr className='py-2 mt-1'/>
                <div className="flex items-center gap-1">
                        <img className='w-4 h-4' src={bathroom} alt='bathroom'/>
                  <span>{unique.BathroomsTotalInteger || 0} Bathroom</span>
                </div>
                <hr className='py-2 mt-1'/>
                <div className="flex items-center gap-1">
                          <img className='w-4 h-4' src={square} alt='square'/>
                  <span>{unique.BuildingAreaTotal || 0} sqft</span>
                </div>
                <hr className='py-2 mt-1'/>
                           {/* Tags */}
            <div className="flex flex-wrap gap-2 pb-3 font-dmsans">
              <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">
                {unique?.StandardStatus}
              </span>
              <span className="px-3 py-1 bg-black text-white text-xs rounded-full">
                For {unique?.PropertyType}
              </span>
            </div>
              </div>
              </div>             
            </div>
          </div>
        </div>
        {/* Right Column - Contact Form */}
        <div className="lg:col-span-1 ml-0">
<Form/>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default DetailSingleItem