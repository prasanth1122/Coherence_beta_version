export default function LibraryBar({ type, date }) {
  return (
    <div className="w-full flex items-center px-2 justify-between h-28 bg-terinary rounded-xl shadow-card_shadow lg:w-80 ">
      <p className="text-lg">{type}</p>
      <p className="text-lg  opacity-45">{date}</p>
    </div>
  );
}
