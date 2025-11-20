import { useState, useRef, useEffect, useCallback } from 'react';
import "./styles.css"

const DoubleRangeSlider = ({ min, max, onChange, onChangeComplete }) => {
  const [minVal, setMinVal] = useState(min || 0);
  const [maxVal, setMaxVal] = useState(max || 5000001);
  const minValRef = useRef(min || 0);
  const maxValRef = useRef(max || 5000001);
  const range = useRef(null);

  // Convert value to percentage (0-100)
  const getPercent = useCallback((value) => {
    if (value === 0) return 0;
    if (value >= 5000000) return 100;
    return (value / 5000000) * 95;
  }, []);

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

  // Get min and max values when their state changes
  useEffect(() => {
    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal]);

  const [inputMin, setInputMin] = useState(min || 0);
  const [inputMax, setInputMax] = useState(max || 5000001);

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
          value={minVal === 0 ? '' : Math.round(inputMin)}
          onChange={(e) => {
            const value = e.target.value;
            setInputMin(value);

            if (value === '') {
              setMinVal(0);
              minValRef.current = 0;
            } else if (!isNaN(value)) {
              const numValue = Math.round(parseFloat(value));
              if (numValue >= 0) {
                setMinVal(numValue);
                minValRef.current = numValue;
              }
            }
          }}
          onBlur={() => {
            if (onChangeComplete) {
              onChangeComplete({ min: minVal, max: maxVal });
            }
          }}
        />
        <span className="p-2 text-gray-500">to</span>
        <input
          type="number"
          className="w-1/2 p-2 border border-gray-300 rounded"
          placeholder="No max"
          value={maxVal > 5000000 ? '' : Math.round(inputMax)}
          onChange={(e) => {
            const value = e.target.value;
            setInputMax(value);

            if (value === '') {
              setMaxVal(5000001);
              maxValRef.current = 5000001;
            } else if (!isNaN(value)) {
              const numValue = Math.round(parseFloat(value));
              if (numValue >= 0) {
                setMaxVal(numValue);
                maxValRef.current = numValue;
              }
            }
          }}
          onBlur={() => {
            if (onChangeComplete) {
              onChangeComplete({ min: minVal, max: maxVal });
            }
          }}
        />
      </div>
      <div className="flex justify-center pt-4">
        <div className="w-full relative">
          {/* Min input */}
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={minVal === 0 ? 0 : minVal >= 5000000 ? 100 : (minVal / 5000000) * 95}
            onChange={(event) => {
              const percent = Number(event.target.value);
              let value;
              if (percent === 0) {
                value = 0;
              } else if (percent >= 95) {
                value = 5000000;
              } else {
                const rawValue = (percent / 95) * 5000000;
                value = Math.round(rawValue / 50000) * 50000;
              }
              setMinVal(value);
              setInputMin(value);
              minValRef.current = value;
            }}
            onMouseUp={() => {
              if (onChangeComplete) {
                onChangeComplete({ min: minVal, max: maxVal });
              }
            }}
            onTouchEnd={() => {
              if (onChangeComplete) {
                onChangeComplete({ min: minVal, max: maxVal });
              }
            }}
            className="absolute w-full h-0 pointer-events-none outline-none appearance-none z-30"
            style={{
              left: '0',
              right: '0',
            }}
          />

          {/* Max input */}
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={maxVal === 0 ? 0 : maxVal > 5000000 ? 100 : maxVal === 5000000 ? 97 : (maxVal / 5000000) * 95}
            onChange={(event) => {
              const percent = Number(event.target.value);
              let value;
              if (percent === 0) {
                value = 0;
              } else if (percent >= 98) {
                value = 5000001; // No max
              } else if (percent >= 95) {
                value = 5000000; // Exactly 5M
              } else {
                const rawValue = (percent / 95) * 5000000;
                value = Math.round(rawValue / 50000) * 50000;
              }
              setMaxVal(value);
              setInputMax(value);
              maxValRef.current = value;
            }}
            onMouseUp={() => {
              if (onChangeComplete) {
                onChangeComplete({ min: minVal, max: maxVal });
              }
            }}
            onTouchEnd={() => {
              if (onChangeComplete) {
                onChangeComplete({ min: minVal, max: maxVal });
              }
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