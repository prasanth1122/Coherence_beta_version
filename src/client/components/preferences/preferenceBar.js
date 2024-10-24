import { IoMdClose } from "react-icons/io";
export default function PreferenceBar({ preference }) {
  return (
    <div className="p-2 rounded-xl flex items-center gap-4 bg-terinary">
      <p className="text-lg">{preference}</p>
      <IoMdClose style={{ fill: "white" }} />
    </div>
  );
}
