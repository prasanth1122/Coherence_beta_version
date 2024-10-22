import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import Sidebar from "../components/sidebar/sidebar";
import { FaCaretDown } from "react-icons/fa";
import StatisticsCircle from "../components/statisticsCircle/statisticsCircle";

export default function StatisticsPage() {
  return (
    <div className="w-full h-full flex items-start gap-4 flex-col">
      {/* Navbar at the top of the page */}
      <div className="sticky top-0 z-10 w-full">
        <MainpageNavbar />
      </div>
      <div className="flex-1 w-full flex items-start gap-4">
        {/* Sidebar component with profile and user info */}
        <Sidebar />
        <div className="flex-1 h-full flex flex-col items-start gap-16  bg-highlight_background rounded-xl p-4">
          <div className="flex items-center gap-16">
            <p className="text-2xl text-important_text">
              Vishal Gupta Analytics
            </p>
            <div className="px-4 py-2 flex items-center gap-4 border-2 border-secondary rounded-xl bg-white">
              <p className="text-lg">This Month</p>
              <FaCaretDown
                style={{ fill: "#FF5E5B", width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="w-full gap-36 flex items-center flex-wrap ">
            <div className="flex items-center gap-8">
              <StatisticsCircle hoursSpent={3} totalHours={24} />
              <div className="flex flex-col items-start">
                <p className="text-2xl text-important_text">60 Hours</p>
                <p className="text-lg ">Total time spent this week</p>
              </div>
            </div>
            <div className="flex items-center gap-8 ">
              <StatisticsCircle hoursSpent={3} totalHours={24} />
              <div className="flex flex-col items-start">
                <p className="text-2xl text-important_text">2.8Hours</p>
                <p className="text-lg ">Daily Average</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-4xl ">#22,034 Rank</p>
            <p className="text-lg ">Global Rank</p>
          </div>
          <p className="text-lg ">
            Among top 2.8% of Global Pioneers in Microbiology
          </p>
        </div>
      </div>
    </div>
  );
}
