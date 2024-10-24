import { useNavigation } from "../../store/context/navigationContext";
import PreferenceBar from "./preferenceBar";

export default function Preferences() {
  const { handlePreferenceClose } = useNavigation();
  return (
    <div className="p-4 w-96 h-[500px] bg-terinary rounded-xl absolute top-10 left-20 z-50 md:left-1/3 md:top-36 flex flex-col items-center gap-8">
      <p className="text-2xl">Preferences</p>
      <div className="w-full flex flex-col items-start gap-">
        <p className="text-lg">Enter Preference</p>
        <div className="w-full flex items-center gap-2">
          <input
            type="text"
            className={`w-3/4 h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
        `}
            placeholder="Add Preferences"
          />
          <button className="px-4 py-2 bg-secondary rounded-xl text-white text-lg">
            Add
          </button>
        </div>
      </div>

      <div className="p-4 w-full flex-1 rounded-xl bg-white flex items-start gap-2 flex-wrap">
        <PreferenceBar preference={"Nature"} />
        <PreferenceBar preference={"Medicine"} />
      </div>
      <button
        className="px-4 py-2 bg-secondary rounded-xl text-white text-lg"
        onClick={handlePreferenceClose}
      >
        Submit
      </button>
    </div>
  );
}
