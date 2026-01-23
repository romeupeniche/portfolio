import { useEffect, useState } from "react";
import PinIcon from "../icons/PinIcon";

const LocationBadge = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const londonTime = new Intl.DateTimeFormat("en-CA", {
        timeStyle: "short",
        timeZone: "America/Toronto",
      }).format(new Date());
      setTime(londonTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group inline-flex items-center bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full cursor-default transition-all duration-300 hover:bg-white/10 hover:border-light-blue/40">
      <PinIcon className="text-light-blue w-4 h-4 shrink-0 transition-transform ease-out duration-500 group-hover:scale-110" />

      <div className="xl:max-w-0 overflow-hidden xl:opacity-0 transition-all duration-700 ease-in-out max-w-xs opacity-100 ml-2 xl:group-hover:max-w-xs xl:group-hover:opacity-100 xl:group-hover:ml-2">
        <span className="whitespace-nowrap text-sm font-medium text-gray-200">
          London, ON, Canada
        </span>
      </div>

      <span className="ml-4 xl:ml-2 xl:group-hover:ml-4 text-sm xl:group-hover:scale-100 scale-110 xl:scale-120 translate-y-0.5 transition-all text-gray-400 font-mono duration-500 group-hover:text-blue-300">
        {time}
      </span>
    </div>
  );
};

export default LocationBadge;
