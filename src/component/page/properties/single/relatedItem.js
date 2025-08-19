import React from 'react'
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa"; // for icons
import { bathroom, bed, square } from '../../../../assets/allImg';
import { useNavigate } from 'react-router-dom';

const RelatedItem = ({listings,allData,id}) => {
    const navigate=useNavigate()
    const handleGetitem=(id)=>{
        console.log(id)
        const unique=allData.find(item=> item.ListingKey===id);
        navigate(`/properties/${id}`, { state: { id, listings,allData } }); // ✅ Pass unique data
        console.log("S",listings)
        console.log("u",unique)
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
            <div className=" bg-white mb-4 w-full max-w-3xl">
                {listings.filter(single=> single.id !== id)?.map((item)=>(
                    <div className='flex justify-between p-2 bg-gray-200' onClick={()=> handleGetitem(item.id)}>
                      {/* Image */}
      <img
        src={item.image}
        alt={item.heading}
        className=" w-1/4 h-28 m-2 object-cover  flex-shrink-0"
      />

      {/* Content */}
      <div className="flex w-1/2 flex-col flex-grow pl-4">
        {/* Heading & Price */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{item.heading}</h2>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>
   
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {item.description}
        </p>

        {/* Details */}

      </div>
      <div className='w-1/5 pl-2'>
             <p className="text-red-700 font-bold text-lg">
            $<span className='text-2xl'>{item.amount}</span>
          </p>
                  <div className=" text-gray-700 mt-3  text-sm">
          <div className="flex  space-x-1">
            <img src={bed} alt='bed' className='w-4 h-4'/>
           <span>{item.bedroom} Bed</span>
          </div>
          <hr className='mb-2 bg-gray-600'/>
          <div className="flex  space-x-1">
          <img src={bathroom} alt='bathroom' className='w-4 h-4'/>
          <span>{item.bathroom} Bath</span>
          </div>
          <hr className='mb-2 bg-gray-600'/>
          <div className="flex  space-x-1">
       <img src={square} alt='square' className='w-4 h-4'/>
        <span>{item.area}</span>{" "} sq ft
          </div>
          <hr className='mb-2 bg-gray-600'/>
        </div>
          </div>

                </div>))}
</div>
    </div>
    )
}

export default RelatedItem