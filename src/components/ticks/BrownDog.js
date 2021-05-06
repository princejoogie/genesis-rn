import React from "react";
import TickPage from "./TickPage";

const BrownDog = () => {
  return (
    <TickPage
      image={require("../../assets/brown_dog_tick.png")}
      title="Brown Dog Tick Screen"
      sn="Rhipicephalus Sanguineus"
      diseases="Rocky Mountain Spotted Fever (RMSF) and Boutonneuse Fever"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Domestic dogs
Indoors, outdoors and in kennels"
      others="Flat, reddish brown, oval bodies, but when engorged may become gray-blue or olive color. Mostly found in warmer climates"
    />
  );
};

export default BrownDog;
