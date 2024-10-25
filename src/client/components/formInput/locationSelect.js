import React from "react";
import Select from "react-select";

// Array of country options
const countryOptions = [
  { value: "USA", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "CAN", label: "Canada" },
  { value: "IND", label: "India" },
  // Add more countries as needed
];

const LocationDropdown = ({ onChange, value }) => {
  // Handle the country change
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  // Custom styles for the select container including inner shadow
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    control: (provided) => ({
      ...provided,
      width: "100%",
      minHeight: "48px",
      height: "48px",
      boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "12px",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
      boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "12px",
    }),
    menuList: (provided) => ({
      ...provided,
      borderRadius: "12px",
      padding: 0,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "48px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "48px",
      display: "flex",
      alignItems: "center",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#FF5E5B" // Background color when option is selected
        : state.isFocused
        ? "#FFD1D1" // Background color on hover
        : null,
      color: state.isSelected ? "#FFFFFF" : "#333333", // Text color for selected and default states
      padding: "10px", // Optional: Adjust padding as desired
      borderRadius: "8px", // Apply border radius to each option
    }),
  };

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <p className="text-2xl">Location</p>
      <Select
        value={value}
        onChange={handleChange}
        options={countryOptions}
        placeholder="Select Your Country"
        styles={customStyles}
        isSearchable
      />
    </div>
  );
};

export default LocationDropdown;
