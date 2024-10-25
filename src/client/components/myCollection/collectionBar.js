export default function CollectionBar({ area, update }) {
  return (
    <div className="min-w-full flex items-center px-2 justify-between h-28 bg-white rounded-xl shadow-card_shadow md:min-w-1/2 lg:min-w-96 overflow-x-auto">
      <p className="text-lg">{area}</p>
      <p className="text-lg  opacity-45">{update}</p>
    </div>
  );
}
