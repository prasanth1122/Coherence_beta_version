export default function FormInput({ label, placeholder }) {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <p className="text-2xl">{label}</p>
      <input
        type="text"
        className="w-full h-12 text-lg rounded-xl bg-white shadow-input_shadow p-4"
        placeholder={placeholder}
      />
    </div>
  );
}
