export default function CollectionBar({ area, update }) {
  return (
    <div className="w-full flex items-center px-2 justify-between h-28 bg-white rounded-xl shadow-card_shadow md:w-1/2 lg:w-1/4">
      <p className="text-lg">{area}</p>
      <p className="text-lg  opacity-45">{update}</p>
    </div>
  );
}
