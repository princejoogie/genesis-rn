import React from "react";
import TickPage from "./TickPage";

const RockyMountain = () => {
  return (
    <TickPage
      image={require("../../assets/rocky_mountain_tick.png")}
      title="Rocky Mountain Tick Screen"
      diseases="Colorado Trick Fever Virus (CTFV), Rocky Mountain Spotted Fever (RMSF), Q fever and tularemia"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Scrublands
Lightly wooded areas
Open grasslands
Along the trails"
      others="Reddish-brown in color and look very similar to American Dog Ticks. The adult males have a cream-colored shield. These ticks can be active from January through November, but their activity diminishes during the hot and dry mid-summer period."
    />
  );
};

export default RockyMountain;
