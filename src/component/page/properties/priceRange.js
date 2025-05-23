import { useState, useRef, useEffect } from 'react';
import "./styles.css"

const DoubleRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = (value) => ((value - min) / (max - min)) * 100;

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, max]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, min]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const [inputMin, setInputMin] = useState(min);
  const [inputMax, setInputMax] = useState(max);

  return (
    <div className="w-full pb-4 text-black">
      <div className="flex flex-nowrap gap-2 my-2">
        <input
          type="number"
          className="w-1/2 p-2 border border-gray-300 rounded"
          placeholder="No min"
          value={inputMin}
          onChange={(e) => {
            const value = e.target.value;
            setInputMin(value);

            // Only update if valid number
            if (value !== '' && !isNaN(value)) {
              const numValue = parseFloat(value);
              if (numValue >= min && numValue <= maxVal - 0.01) {
                setMinVal(numValue);
                minValRef.current = numValue;
              }
            }
          }}
        />
        <span className="p-2 text-gray-500">to</span>
        <input
          type="number"
          className="w-1/2 p-2 border border-gray-300 rounded"
          placeholder="No max"
          value={inputMax}
          onChange={(e) => {
            const value = e.target.value;
            setInputMax(value);

            // Only update if valid number
            if (value !== '' && !isNaN(value)) {
              const numValue = parseFloat(value);
              if (numValue <= max && numValue >= minVal + 0.01) {
                setMaxVal(numValue);
                maxValRef.current = numValue;
              }
            }
          }}
        />
      </div>
      <div className="flex justify-center pt-4">

        <div className="w-full relative">
          {/* Min input */}
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal - 0.01);
              setMinVal(value);
              setInputMin(value);
              minValRef.current = value;
            }}
            className={`absolute w-full h-0 pointer-events-none outline-none appearance-none z-30 ${minVal > max - (max - min) * 0.1 ? 'z-50' : ''
              }`}
            style={{
              left: '0',
              right: '0',
            }}
          />

          {/* Max input */}
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal + 0.01);
              setMaxVal(value);
              setInputMax(value);
              maxValRef.current = value;
            }}
            className="absolute w-full h-0 pointer-events-none outline-none appearance-none z-40"
            style={{
              left: '0',
              right: '0',
            }}
          />

          {/* Slider track and range */}
          <div className="relative w-full">
            <div className="absolute w-full h-2 bg-slate-200 rounded-full z-10" />
            <div
              ref={range}
              className="absolute h-2 bg-black rounded-full z-20"
              style={{
                left: `${getPercent(minVal)}%`,
                width: `${getPercent(maxVal) - getPercent(minVal)}%`,
              }}
            />
            {/* <div className="absolute text-sm text-slate-800 mt-5 left-0">
              {minVal?.toFixed(2)}
            </div>
            <div className="absolute text-sm text-slate-800 mt-5 right-0">
              {maxVal?.toFixed(2)}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;

// const PriceFilter = () => {
//   const handlePriceChange = ({ min, max }) => {
//     console.log(`Min price: $${min}, Max price: $${max}`);
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4 text-center">Price Range</h2>
//       <DoubleRangeSlider min={0} max={1000} onChange={handlePriceChange} />
//     </div>
//   );
// };

// export default PriceFilter;