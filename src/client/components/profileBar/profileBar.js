import { useNavigation } from "../../store/context/navigationContext";

export default function ProfileBar() {
  const { handleProfileClose, myPreferences } = useNavigation();
  return (
    <div className="w-full h-full z-20 flex items-center justify-center bg-transparent/[0.5] absolute top-0 left-0">
      <div className="p-4 absolute   w-11/12 md:w-1/2 h-full bg-terinary  md:h-[610px] flex flex-col justify-between items-center rounded-xl shadow-card_shadow">
        <img src="" alt="profile" className="w-20 h-20 bg-white rounded-full" />
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="text-lg">Name</p>
          <input
            type="text"
            className={`w-full h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
            
          
        `}
            value={"Vishal Gupta"}
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
            value={"Researcher at Coherence"}
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="text-lg">Institution</p>
          <input
            type="text"
            className={`w-full h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
        `}
            value={"Independent"}
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
            value={"Masters in BioTechnology"}
          />
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="text-lg">preferences</p>
          <div
            className={`w-full  text-lg rounded-xl bg-white shadow-input_shadow p-4 
          
          flex items-start gap-4 flex-wrap`}
          >
            {myPreferences.map((preference, index) => (
              <p className="px-4 py-2  bg-terinary/[0.5] rounded-xl">
                {preference}
              </p>
            ))}
          </div>
        </div>
        <button
          className="px-4 py-2 bg-secondary rounded-xl text-white hover:shadow-cta_button_shadow"
          onClick={handleProfileClose}
        >
          Make changes
        </button>
      </div>
    </div>
  );
}
