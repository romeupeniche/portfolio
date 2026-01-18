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

      <div className="max-w-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2">
        <span className="whitespace-nowrap text-sm font-medium text-gray-200">
          London, ON, Canada
        </span>
      </div>

      <span className="ml-2 text-sm text-gray-400 font-mono transition-colors duration-300 group-hover:text-blue-300">
        {time}
      </span>
    </div>
  );
};

export default LocationBadge;
