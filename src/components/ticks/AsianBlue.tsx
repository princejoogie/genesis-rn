import React from "react";
import TickPage from "./TickPage";

const AsianBlue: React.FC = () => {
  return (
    <TickPage
      image={require("../../assets/asian_blue_tick.png")}
      title="Asian Blue Tick"
      sn="Haemaphysalis longicornis"
      diseases="Severe Fever with Thrombocytopenia Syndrome (SFTS) and Rickettsia Japonica"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Native areas like Southeast Asia
Livestock species
Cattle"
      others="Females and males are reddish-yellow in color, but different body sizes."
    />
  );
};

export default AsianBlue;
