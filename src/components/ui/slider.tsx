import React from 'react';

interface SliderProps {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number; // `number[]` बाट `number` मा परिवर्तन
  onValueChange: (value: number) => void; // `number` लाई मात्र स्वीकार गर्ने
}

const Slider: React.FC<SliderProps> = ({ id, min, max, step, value, onValueChange }) => {
  return (
    <div className="slider-container">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))} // `number[]` मा होइन, `number` मात्र
        className="slider"
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};

export default Slider;
