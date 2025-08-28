import React from 'react'
import { bathroom, bed, locationIcon, square } from '../../../../assets/allImg';
import { useNavigate } from 'react-router-dom';

const RelatedItem = ({ listings, allData, id }) => {
  const navigate = useNavigate()
  const handleGetitem = (id) => {
    navigate(`/properties/${id}`, { state: { id, listings, allData } }); // ✅ Pass unique data
  }
  return (
    <div>
      <div className="bg-white py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-900">Explore Similar Properties Nearby</h2>
          <button className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition duration-200">
            See all
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-6">Discover other homes that match your preferences in the area.</p>


      </div>
      <div className="bg-white mb-4 w-full max-w-3xl">
        {listings.filter(single => single.id !== id)?.map((item) => (
          <div key={item.id} onClick={() => handleGetitem(item.id)} className='flex flex-col cursor-pointer sm:flex-row justify-between p-2 bg-gray-200 mb-4'>
            {/* Image */}
            <div className="w-48 h-48 sm:w-32 sm:h-32 m-2 overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.heading} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="flex flex-col text-left w-full sm:w-1/2 flex-grow px-2 sm:pl-4">
              <h2 className="text-xl font-semibold text-gray-900 line-clamp-1">{item.heading}</h2>
              <p className="flex text-sm text-gray-800 font-medium"><img src={locationIcon} className='w-5 h-5' alt='location' />{item.location}</p>
              <p className="text-sm text-gray-900 mt-2 line-clamp-2">{item.description}</p>
            </div>

            {/* Price & Details */}
            <div className='w-full sm:w-1/5 text-left px-2 mt-2 sm:mt-0'>
              <p className="text-red-700 font-bold text-lg">
                $<span className='ld:text-2xl text-sm'>{item.amount.toLocaleString()}</span>
              </p>
              <div className="text-gray-700 mt-3 text-sm">
                <div className="flex items-center space-x-1">
                  <img src={bed} alt='bed' className='w-4 h-4' />
                  <span>{item.bedroom} Bed</span>
                </div>
                <hr className='my-2 py-[0.3px] bg-gray-400' />
                <div className="flex items-center space-x-1">
                  <img src={bathroom} alt='bathroom' className='w-4 h-4' />
                  <span>{item.bathroom} Bath</span>
                </div>
                <hr className='my-2 py-[0.3px] bg-gray-400' />
                <div className="flex items-center space-x-1">
                  <img src={square} alt='square' className='w-4 h-4' />
                  <span>{item.area.toLocaleString()} sq ft</span>
                </div>
                <hr className='my-2 py-[0.3px] bg-gray-400' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedItem