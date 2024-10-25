import profile from "../../assets/profile 2.png";
import { FaPen } from "react-icons/fa";
import { useNavigation } from "../../store/context/navigationContext";
// Sidebar component
export default function Sidebar() {
  const { handleProfileOpen, handlePreferenceOpen, myPreferences } =
    useNavigation();
  return (
    // Outer container: flex column layout with padding, a background color, and text color for the sidebar
    <div className=" flex-col gap-12 items-start hidden md:flex w-54 h-full border-2  bg-primary px-16 py-8 text-white rounded-tr-xl md:overflow-y-auto hide-scrollbar ">
      {/* Profile image */}
      <img src={profile} alt="profileImage" className="" />

      {/* User info section: displays the user's name and title */}
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl">Vishal Gupta</p>
          <FaPen
            style={{ fill: "white", width: "15px", height: "15px" }}
            onClick={handleProfileOpen}
          />
        </div>

        <p className="text-lg">Researcher at Coherence</p>
      </div>

      {/* Contributions and followers stats */}
      <div className="flex flex-col items-start">
        <p className="text-lg font-light">2k contributions</p>
        <p className="text-lg font-light">2M Followers</p>
        <p className="text-lg font-light">22 Following</p>
      </div>

      {/* Section for interests */}
      <div className="w-full flex flex-col items-start gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl underline-offset-1">Interested in</p>
          <FaPen
            style={{ fill: "white", width: "15px", height: "15px" }}
            onClick={handlePreferenceOpen}
          />
        </div>

        {/* List of interests */}
        <div className="flex flex-col items-start">
          {myPreferences && myPreferences.length > 0 ? (
            myPreferences.map((preference, index) => (
              <p key={index} className="text-lg font-light">
                {preference}
              </p>
            ))
          ) : (
            <p className="text-lg font-light">No preferences added</p>
          )}
        </div>
      </div>
    </div>
  );
}
