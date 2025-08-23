import { useState, useRef, useEffect, useCallback } from 'react';
import "./styles.css"

const DoubleRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback((value) => ((value - min) / (max - min)) * 100, [min, max]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes - FIXED: use callback for onChange
  useEffect(() => {
    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal]); // Removed onChange from dependencies

  const [inputMin, setInputMin] = useState(min);
  const [inputMax, setInputMax] = useState(max);

  // Update input values when min/max props change
  useEffect(() => {
    setInputMin(minVal);
    setInputMax(maxVal);
  }, [minVal, maxVal]);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;

