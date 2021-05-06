import React from "react";
import TickPage from "./TickPage";

const GroundHog = () => {
  return (
    <TickPage
      image={require("../../assets/groundhog_tick.png")}
      title="Ground Hog Tick Screen"
      diseases="Powassan Virus Disease"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Eastern half of United States
Feed on a variety of warm-blooded animals
Humans and domestic animals"
      others="Has a light brown or blond color. Also known as woodchuck tick."
    />
  );
};

export default GroundHog;
