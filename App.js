import React from "react";
import { DataProvider } from "./src/DataContext";
import Home from "./src/Home";

export default function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}
