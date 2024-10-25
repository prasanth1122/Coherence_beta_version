import { useNavigate } from "react-router-dom";

export default function SubsribeParagraph() {
  const navigate = useNavigate();
  return (
    <div className="min-w-full h-full lg:w-3/5 p-2 flex flex-col gap-8 items-start ">
      <p className={`py-2 px-4 w-full text-lg rounded-xl blur-sm `}>
        Sunlight is essential for life, providing the energy needed for plants
        to grow and helping humans produce vitamin D, which is crucial for bone
        health and immune function. However, while moderate exposure to sunlight
        offers health benefits, excessive and unprotected exposure can have
        detrimental effects on various organs, including the brain.
      </p>

      <button
        className="px-4 py-2 rounded-xl text-white bg-secondary hover:shadow-cta_button_shadow"
        onClick={() => {
          navigate("/subscribe");
        }}
      >
        Continue Reading
      </button>
    </div>
  );
}
