import { IoMdClose } from "react-icons/io";

export default function PreferenceBar({ preference, onRemove }) {
  return (
    <div className="p-2 rounded-xl flex items-center gap-4 bg-terinary">
      <p className="text-lg">{preference}</p>
      <IoMdClose
        style={{ fill: "white", cursor: "pointer" }}
        onClick={onRemove} // Call the remove handler here
      />
    </div>
  );
}
