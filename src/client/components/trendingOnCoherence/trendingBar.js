import { useLocation } from "react-router-dom";
import { useNavigation } from "../../store/context/navigationContext";

export default function TrendingBar({ heading, area, number }) {
  const { handleNavigation } = useNavigation();
  const location = useLocation(); // To get the current path

  // Function to handle redirection on click if the path is "/"
  const handleClick = () => {
    if (location.pathname === "/") {
      handleNavigation("/registration");
    }
  };

  return (
    <div
      className="min-w-trendingBar h-40 rounded-xl bg-terinary/[0.5] p-4 flex items-start justify-between  hover:shadow-card_shadow hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col items-start gap-2">
        <p className="text-2xl">{heading}</p>
        <p className="text-lg opacity-25">{area}</p>
      </div>
      <p className="text-2xl">{number}</p>
    </div>
  );
}
