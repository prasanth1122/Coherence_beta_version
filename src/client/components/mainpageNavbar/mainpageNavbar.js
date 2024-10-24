import { IoPerson } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { useNavigation } from "../../store/context/navigationContext";

export default function MainpageNavbar() {
  const { handleNavigation, isRegister, isSubscribe } = useNavigation();
  const location = useLocation(); // To get the current path

  // Function to handle redirection on click if the path is "/"
  const handleClick = () => {
    if (location.pathname === "/") {
      handleNavigation("/registration");
    }
  };
  const handleNotificationClick = () => {
    if (location.pathname === "/") {
      handleNavigation("/registration");
    }
    if (isRegister) {
      handleNavigation("/library");
    }
  };
  const handleHome = () => {
    if (isRegister == true) {
      handleNavigation("/home");
    }
  };
  return (
    <div className="w-full h-navbar bg-primary p-4 flex items-center justify-between text-white">
      {/* Clicking this paragraph redirects if on the homepage */}
      <p
        className="text-sm leading-4 lg:text-base lg:leading-5 hover:cursor-pointer "
        onClick={handleHome}
      >
        Coherence Educational
        <br />
        Society
      </p>

      {/* Input is also clickable if on the homepage */}
      <input
        type="text"
        placeholder="Enter Your Topic"
        className="p-4 w-1/4 md:w-2/5 rounded-lg h-9 shadow-input_shadow text-black"
        onClick={handleClick}
      />

      {/* Conditionally render Register or Subscribe button based on the path */}
      <button
        disabled={isSubscribe}
        className="px-4 py-2 rounded-xl bg-secondary"
        onClick={() =>
          handleNavigation(
            location.pathname === "/home" ? "/subscribe" : "/registration"
          )
        }
      >
        {isRegister || location.pathname !== "/" ? "Subscribe" : "Register"}
      </button>

      {/* Clicking icons also redirects if on the homepage */}
      <div className="flex items-center gap-4 mr-12">
        <IoPerson
          style={{ fill: "white", width: "42px", height: "42px" }}
          onClick={() => handleNavigation("/statistics")}
        />
        <IoNotifications
          style={{ fill: "white", width: "42px", height: "42px" }}
          onClick={handleNotificationClick}
        />
      </div>
    </div>
  );
}
