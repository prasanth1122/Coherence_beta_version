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
      minHeight: "48px", // h-12 equivalent
      height: "48px",
      boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)", // Add inner shadow
      borderRadius: "12px",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
      boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)", // Add inner shadow to the dropdown options
      borderRadius: "12px",
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
