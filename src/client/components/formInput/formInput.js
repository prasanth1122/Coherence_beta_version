export default function FormInput({
  label,
  placeholder,
  required,
  value,
  onChange,
  type = "text",
  options = [], // For dropdown options
}) {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <p className="text-2xl">{label}</p>

      {type === "select" ? (
        // Dropdown for Age Selection
        <select
          className="w-full h-12 text-lg rounded-xl bg-white shadow-input_shadow px-4"
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        // Default input for other fields
        <input
          type="text"
          className="w-full h-12 text-lg rounded-xl bg-white shadow-input_shadow p-4"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
