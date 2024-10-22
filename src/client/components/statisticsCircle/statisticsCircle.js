import React from "react";

const StatisticsCircle = ({ hoursSpent, totalHours }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (hoursSpent / totalHours) * circumference;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">
        <svg width="150" height="150" className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#ECD9AF"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#FF5E5B"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            className="transition-all duration-500"
          />
        </svg>
        {/* Text Inside the Circle */}
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default StatisticsCircle;
