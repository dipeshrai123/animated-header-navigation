import React from "react";
// import { interpolate } from "react-uicomp";
import Banner from "./Banner.jpg";
import "./Header.css";

export default function Header({ scrollY }) {
  return (
    <div className="header" style={{
      backgroundImage: `url(${ Banner })`,
      top: scrollY * 0.3,
    }} />
  )
}
