import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="space">Contents goes here...</div>
    </>
  );
}
