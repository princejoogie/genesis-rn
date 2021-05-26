import React from "react";
import TickPage from "./TickPage";

const AmericanDog: React.FC = () => {
  return (
    <TickPage
      image={require("../../assets/american_dog_tick.png")}
      title="American Dog Tick"
      sn="Dermacentor Variabilis"
      diseases="Rocky Mountain Spotted Fever (RMSF) and Tularemia"
      classification="Ixodidae/Ixodes Pacificus (hard-bodied)"
      location="Rocky Mountains
Little or no tree cover
Tall grassy fields
Low lying brush 
Twigs"
      others="Have a dark brown body. Females have an off-white shield, while adult males look more mottled."
    />
  );
};

export default AmericanDog;
