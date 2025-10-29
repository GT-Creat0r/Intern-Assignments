import { useState} from "react";
import "./Slider.css";

const Slider = ({
  min = 0,
  max = 100,
  value: controlledValue,
  defaultValue = 0,
  onChange,
  showValue = true,
  label,
  className = "",
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`slider-wrapper ${className}`}>
      {label && (
        <div className="slider-label-container">
          <label className="slider-label">{label}</label>
          {showValue && <span className="slider-value">{value}</span>}
        </div>
      )}
      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="slider-input"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e5e5 ${percentage}%, #e5e5e5 100%)`,
          }}
          {...props}
        />
      </div>
    </div>
  );
};

export default Slider;
