import React, { useState, useEffect, createContext } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

interface Ret {
  loading: boolean;
  tickDetector: tf.GraphModel | null;
  mobnet: mobilenet.MobileNet | null;
}
export const DataContext = createContext<Ret>({
  loading: true,
  tickDetector: null,
  mobnet: null,
});

export const DataProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [tickDetector, setTickDetector] = useState<tf.GraphModel | null>(null);
  const [mobnet, setMobnet] = useState<mobilenet.MobileNet | null>(null);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await tf.ready();
      const m = await require("../assets/model/model.json");
      const b = await require("../assets/model/group1-shard1of1.bin");
      const d = await tf.loadGraphModel(bundleResourceIO(m, b));
      const _mobnet = await mobilenet.load();
      setTickDetector(d);
      setMobnet(_mobnet);
      setLoading(false);
    };

    init();
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        tickDetector,
        mobnet,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
