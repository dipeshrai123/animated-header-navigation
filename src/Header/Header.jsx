import React from "react";
import Banner from "./Banner.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header" style={{
      background: `url(${ Banner })`,
    }} />
  )
}
