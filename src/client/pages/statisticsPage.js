import React, { useState } from "react";
import MainpageNavbar from "../components/mainpageNavbar/mainpageNavbar";
import Sidebar from "../components/sidebar/sidebar";
import { FaCaretDown } from "react-icons/fa";
import StatisticsCircle from "../components/statisticsCircle/statisticsCircle";
import ProfileBar from "../components/profileBar/profileBar";
import { useNavigation } from "../store/context/navigationContext";
import Preferences from "../components/preferences/preferences";
import StatisticsCircletwo from "../components/statisticsCircle/circle2";

export default function StatisticsPage() {
  const { isProfileOpen, isPreference } = useNavigation();

  // State for selected time period
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  // Circle data for each period
  const periodData = {
    "This Month": { hoursSpent: 60, dailyAverage: 2.8 },
    "Last Month": { hoursSpent: 50, dailyAverage: 2.5 },
    "Last 3 Months": { hoursSpent: 160, dailyAverage: 3.0 },
    "This Year": { hoursSpent: 600, dailyAverage: 3.2 },
  };

  const handleSelectChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  const { hoursSpent, dailyAverage } = periodData[selectedPeriod];

  return (
    <div className="w-full h-full flex items-start gap-4 flex-col relative">
      {isPreference && <Preferences />}
      {isProfileOpen && <ProfileBar />}

      {/* Sticky Navbar at the top */}
      <div className="sticky top-0 z-10 w-full">
        <MainpageNavbar />
      </div>

      {/* Main content area with sidebar and statistics */}
      <div className="flex-1 w-full h-full flex items-start gap-4 overflow-hidden">
        {/* Sidebar section with profile and user information */}
        <div className="sticky left-0 h-full w-54">
          <Sidebar />
        </div>

        <div className="flex-1 h-full flex flex-col items-start gap-16 bg-highlight_background rounded-xl p-4 overflow-y-auto">
          {/* Header with user name and time period selection */}
          <div className="flex items-center  md:gap-16">
            <p className="text-lg md:text-2xl text-important_text">
              Vishal Gupta Analytics
            </p>

            {/* Dropdown for selecting time period */}
            <div className="w-36 relative px-4 py-2 flex items-center gap-4 border-2 border-secondary rounded-xl bg-white">
              <select
                value={selectedPeriod}
                onChange={handleSelectChange}
                className="w-full appearance-none border-none text-lg focus:outline-none py-1 leading-none"
              >
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
                <option value="Last 3 Months">Last 3 Months</option>
                <option value="This Year">This Year</option>
              </select>
              <FaCaretDown
                style={{ fill: "#FF5E5B", width: "20px", height: "20px" }}
                className="absolute right-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Rest of the content */}
          <div className="w-full gap-20 flex flex-col items-start flex-wrap xl:gap:36 xl:flex-row">
            <div className="flex items-center gap-8 px-2 md:px-0">
              <StatisticsCircle hoursSpent={hoursSpent} totalHours={168} />
              <div className="flex flex-col items-start">
                <p className="text-2xl text-important_text">
                  {hoursSpent} Hours
                </p>
                <p className="text-lg">
                  Total time spent {selectedPeriod.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 md:px-4">
              <StatisticsCircletwo hoursSpent={dailyAverage} totalHours={24} />
              <div className="flex flex-col items-start">
                <p className="text-2xl text-important_text">
                  {dailyAverage} Hours
                </p>
                <p className="text-lg">Daily Average</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <p className="text-4xl ">#22,034 Rank</p>
            <p className="text-lg">Global Rank</p>
            <p className="text-lg">
              Among top 2.8% of Global Pioneers in Microbiology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
