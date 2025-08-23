import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { bathroom, bed, square } from '../../../../assets/allImg';
import Map from './map';
import Footer from '../../Default Pages/footer';
import Header from './header';
import useFilteredProperties from './hook/useFilterProperties';
import { usePropertySearch } from '../api/getCheckProperty';
import LoadingScreen from '../../../../loading/loadingScreen';
import { locationIcon } from '../../../../assets/allImg';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, filters: initialFilters } = location.state || {}; // ✅ default safe
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0)
  const [sortOption, setSortOption] = useState("Newest"); // ✅ sorting state
  const [filters, setFilters] = useState(initialFilters || {});

  // ✅ Call hook at top-level (safe)
  const alldata = useFilteredProperties(data, filters);
  const { checkProperty, error } = usePropertySearch(); // ✅ hook
  const handleGetitem = (id) => {
    const listings = alldata;
    const allData = data?.value;
    navigate(`/properties/${id}`, { state: { id, listings, allData } });
  };

  // ✅ Callback passed to Header
  const handleResults = async (newFilters) => {
    setFilters(newFilters); // just update filters
    setLoading(true);
    const data = await checkProperty(newFilters); // ✅ reuse
    setLoading(false);
    if (data) {
      navigate(`/details/properties`, { state: { data, filters: newFilters } });
      // i want usefiltered properties runs here  
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
  const sortedData = [...alldata].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return a.amount - b.amount;
    }
    if (sortOption === "Price: High to Low") {
      return b.amount - a.amount;
    }
    // Default "Newest" → assuming higher `id` means newer
    return b.id - a.id;
  });

  if (!data) {
    return <p>No property found</p>;
  }



  return (
    <div className=''>
      {loading && <LoadingScreen progress={progress} />}
      <div className='mt-8 px-2 lg:px-24'>
        <Header filter={filters} onResults={handleResults} />

        <div className='flex flex-col lg:flex-row'>
          {/* Property List Section */}
          <div className="bg-white mb-4 w-full lg:w-2/3 px-0 order-1 lg:order-1">
            <h1 className='text-2xl text-gray-900 font-dmsans text-left my-2'>Property for sale</h1>

            <div className='flex flex-col sm:flex-row justify-between text-md text-gray-900 font-dmsans text-left my-2'>
              <div className='mb-2 sm:mb-0'>{alldata.length} results</div>
              <div className="px-3 py-1 text-sm">
                <select
                  className="bg-transparent border-none focus:outline-none focus:ring-0 appearance-none cursor-pointer min-w-[160px] text-right"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option className="bg-white px-2 py-1 text-right">Newest</option>
                  <option className="bg-white px-2 py-1 text-right">Price: Low to High</option>
                  <option className="bg-white px-2 py-1 text-right">Price: High to Low</option>
                </select>
              </div>



            </div>

            {sortedData?.map((item) => (
              <div key={item.id} onClick={() => handleGetitem(item.id)} className='flex flex-col sm:flex-row justify-between p-2 bg-gray-200 mb-4'>
                {/* Image */}
                <div className="w-48 h-48 sm:w-32 sm:h-32 m-2 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.heading} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex flex-col text-left w-full sm:w-1/2 flex-grow px-2 sm:pl-4">
                  <h2 className="text-xl font-semibold text-gray-900 line-clamp-1">{item.heading}</h2>
                  <p className="flex text-sm text-gray-800 font-medium line-clamp-1"><img src={locationIcon} alt="location" />{item.location}</p>
                  <p className="text-sm text-gray-900 mt-2 line-clamp-2">{item.description}</p>
                </div>

                {/* Price & Details */}
                <div className='w-full sm:w-1/5 text-left px-2 mt-2 sm:mt-0'>
                  <p className="text-red-700 font-bold text-lg">
                    $<span className='text-2xl'>{item.amount.toLocaleString()}</span>
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

          {/* Map Section */}
          <div className='w-full lg:w-1/3 px-2 my-2 order-2 lg:order-2 mb-4 lg:mb-0'>
            <div className='sticky top-20'>
              <Map alldata={alldata} />
            </div>
          </div>
        </div>
        <hr className='my-2' />

      </div>
      <div className='relative z-[2]'>
        <Footer />
      </div>
    </div>
  );
};

export default DetailPage;
