import React, { useState } from "react";
import PropTypes from "prop-types";
import { X, Eye, EyeOff } from "lucide-react";

const InputField = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.({ target: { value: "" } });
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = {
    outlined: "border border-gray-400 focus:ring-2 focus:ring-blue-500",
    filled: "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500",
    ghost: "border-b border-gray-400 focus:ring-2 focus:ring-blue-500",
  };

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 font-medium">{label}</label>}

      <div className="relative flex items-center">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-lg ${sizeClasses[size]} ${variantClasses[variant]} 
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} 
            ${invalid ? "border-red-500" : ""}`}
          aria-invalid={invalid}
          aria-label={label || placeholder}
        />

        {/* Clear Button */}
        {inputValue && !disabled && (
          <button
            type="button"
            className="absolute right-8 text-gray-500 hover:text-black"
            onClick={handleClear}
          >
            <X size={16} />
          </button>
        )}

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 text-gray-500 hover:text-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Helper/Error Text */}
      {helperText && !invalid && (
        <span className="mt-1 text-sm text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
};

export default InputField;
