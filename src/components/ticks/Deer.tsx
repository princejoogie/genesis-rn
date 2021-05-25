import React from "react";
import TickPage from "./TickPage";

const Deer: React.FC = () => {
  return (
    <TickPage
      image={require("../../assets/deer_tick.png")}
      title="Deer Dog Tick"
      sn="Ixodes Scapularis"
      diseases="Lyme Disease, Canine Anaplasmosis, Borrelia Miyamotoi, Powassan Virus"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Forest regions
Thick, tall grasses
Areas known to have mammal wildlife
Brush and overgrown areas with high humidity and moisture"
      others="They are small and can be difficult to spot, as they tend to favor hidden areas of the body, such as the under the arms, inside the belly button, behind the knees, between the legs, around the groin, around the waist, on the scalp or near the hairline, and around the ears of the host."
    />
  );
};

export default Deer;
