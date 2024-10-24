import { useNavigation } from "../../store/context/navigationContext";
import PreferenceBar from "../preferences/preferenceBar";

export default function ProfileBar() {
  const { handleProfileClose } = useNavigation();
  return (
    <div className="p-4 absolute top-20 z-20 left-1/4 w-2/3 h-full bg-terinary md:left-1/3 md:w-1/3 md:h-[610px] flex flex-col justify-between items-center rounded-xl shadow-card_shadow">
      <img src="" alt="profile" className="w-20 h-20 bg-white rounded-full" />
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-lg">Name</p>
        <input
          type="text"
          className={`w-full h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
        `}
          placeholder="Enter Name"
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-lg">Profession</p>
        <input
          type="text"
          className={`w-full h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
        `}
          placeholder="Enter Profession"
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-lg">Institution</p>
        <input
          type="text"
          className={`w-full h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
        `}
          placeholder="Enter Institution"
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-lg">Educational Qualification</p>
        <input
          type="text"
          className={`w-full h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
        `}
          placeholder="Enter Educational Qualification"
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-lg">preferences</p>
        <div
          className={`w-full h-20 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
          flex items-start gap-4 flex-wrap`}
        >
          <PreferenceBar preference={"Nature"} />
          <PreferenceBar preference={"Medicine"} />
        </div>
      </div>
      <button
        className="px-4 py-2 bg-secondary rounded-xl text-white hover:shadow-cta_button_shadow"
        onClick={handleProfileClose}
      >
        Make changes
      </button>
    </div>
  );
}
