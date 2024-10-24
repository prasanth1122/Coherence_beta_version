import { IoPerson } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { useNavigation } from "../../store/context/navigationContext";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { handleNavigation } = useNavigation();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname === "/registration") {
      handleNavigation("/");
    }
  };
  return (
    <div className="w-full h-navbar bg-primary p-4 flex items-center justify-between  text-white">
      <div className="w-full flex items-center gap-36">
        <p
          className="text-sm leading-4 lg:text-base lg:leading-5 hover:cursor-pointer"
          onClick={handleClick}
        >
          Coherence Educational
          <br />
          Society
        </p>
        <input
          type="text"
          placeholder="Enter Your Topic"
          className="p-4 w-1/4 md:w-2/5  rounded-lg h-9 shadow-input_shadow text-black"
          onClick={handleClick}
        />
      </div>

      <div className="flex items-center gap-4">
        <IoPerson
          style={{ fill: "white", width: "42px", height: "42px" }}
          onClick={handleClick}
        />
        <IoNotifications
          style={{ fill: "white", width: "42px", height: "42px" }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
