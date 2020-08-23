import React from "react";
import { useScroll } from "react-uicomp";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

import "./App.css";

export default function App() {
  const { scrollY } = useScroll();

  return (
    <>
      <Header scrollY={scrollY} />
      <Navigation scrollY={scrollY} />
      <div className="space">Contents goes here...</div>
    </>
  );
}
