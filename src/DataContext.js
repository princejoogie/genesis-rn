import React, { useState, useEffect, createContext } from "react";
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [tickDetector, setTickDetector] = useState(null);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await tf.ready();
      const m = await require("../assets/model/model.json");
      const b = await require("../assets/model/group1-shard1of1.bin");
      const d = await tf.loadGraphModel(bundleResourceIO(m, b));
      setTickDetector(d);

      setLoading(false);
    };

    init();
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        tickDetector,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
