import React from "react";
import TickPage from "./TickPage";

const LoneStar = () => {
  return (
    <TickPage
      image={require("../../assets/lone_star_tick.png")}
      title="Lone Star Tick Screen"
      diseases="Human Monocytotropic Ehrlichiosis (HME), Ehrlichiosis and Panola MountainTularemia, Heartland Virus, Bourbon Virus, Q Fever and tick paralysis, Borrelia Lonestari"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Eastern U.S. but most prevalent in South
Early Spring through late Fall"
      others="Reddish-brown in color. The adult female is distinguished by a white dot or “lone star” on her back."
    />
  );
};

export default LoneStar;
