import React, { useState, useEffect, createContext } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [model, setModel] = useState();
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [tickDetector, setTickDetector] = useState(null);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await tf.ready();
      const m = await require("../assets/model/model.json");
      const b = await require("../assets/model/group1-shard.bin");
      const d = await tf.loadGraphModel(bundleResourceIO(m, b));
      setTickDetector(d);

      // const res = await mobilenet.load();
      // setModel(res);
      setLoading(false);
    };

    init();
  }, []);

  return (
    <DataContext.Provider
      value={{
        model,
        loading,
        tickDetector,
        dm: [isDark, setIsDark],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
