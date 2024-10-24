import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import Sidebar from "../components/sidebar/sidebar";
import { FaCaretDown } from "react-icons/fa";
import StatisticsCircle from "../components/statisticsCircle/statisticsCircle";
import ProfileBar from "../components/profileBar/profileBar";
import { useNavigation } from "../store/context/navigationContext";

// StatisticsPage component for displaying analytics and statistics
export default function StatisticsPage() {
  const { isProfileOpen } = useNavigation();
  return (
    // Main container for the statistics page
    <div className="w-full h-full flex items-start gap-4 flex-col absolute">
      {isProfileOpen && <ProfileBar />}
      {/* Sticky Navbar at the top */}
      <div className="sticky top-0 z-10 w-full">
        <MainpageNavbar />
      </div>

      {/* Main content area with sidebar on the left and statistics content on the right */}
      <div className="flex-1 w-full flex items-start gap-4  overflow-y-hidden">
        {/* Sidebar for navigation or profile info */}
        <div className="sticky left-0 top-20 z-10 w-54 ">
          <Sidebar />
        </div>

        {/* Main statistics content */}
        <div className="flex-1 h-full flex flex-col items-start gap-16 bg-highlight_background rounded-xl p-4 overflow-y-auto">
          {/* Header with user name and time period selection */}
          <div className="flex items-center gap-16">
            <p className="text-2xl text-important_text">
              Vishal Gupta Analytics
            </p>
            <div className="px-4 py-2 flex items-center gap-4 border-2 border-secondary rounded-xl bg-white">
              {/* Time period selection dropdown */}
              <p className="text-lg">This Month</p>
              <FaCaretDown
                style={{ fill: "#FF5E5B", width: "30px", height: "30px" }}
              />
            </div>
          </div>

          {/* Section displaying time spent statistics */}
          <div className="w-full gap-36 flex items-center flex-wrap">
            <div className="flex items-center gap-8">
              {/* StatisticsCircle component to display hours spent visually */}
              <StatisticsCircle hoursSpent={3} totalHours={24} />
              <div className="flex flex-col items-start">
                <p className="text-2xl text-important_text">60 Hours</p>
                <p className="text-lg ">Total time spent this week</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              {/* Another StatisticsCircle for daily average */}
              <StatisticsCircle hoursSpent={3} totalHours={24} />
              <div className="flex flex-col items-start">
                <p className="text-2xl text-important_text">2.8Hours</p>
                <p className="text-lg ">Daily Average</p>
              </div>
            </div>
          </div>

          {/* Section for displaying the global rank */}
          <div className="flex flex-col items-start gap-2">
            <p className="text-4xl ">#22,034 Rank</p>
            <p className="text-lg ">Global Rank</p>
          </div>

          {/* Additional information about the rank */}
          <p className="text-lg ">
            Among top 2.8% of Global Pioneers in Microbiology
          </p>
        </div>
      </div>
    </div>
  );
}
