import React from "react";
import { interpolate } from "react-uicomp";

import "./Navigation.css";

export default function Navigation({ scrollY }) {
  return (
    <div className="navigation" style={{
      top: interpolate(scrollY, [0, 400], [280, -150], { extrapolate: "clamp" }),
    }}>
      <div className="navigation-profile">
        <div className="navigation-profile-image"></div>
        <div className="navigation-profile-name">Dipesh Rai</div>
      </div>

      <ul className="navigation-links">
        <li className="navigation-links-item active">Home</li>
        <li className="navigation-links-item">Videos</li>
        <li className="navigation-links-item">Playlist</li>
        <li className="navigation-links-item">Community</li>
        <li className="navigation-links-item">Channels</li>
        <li className="navigation-links-item">About</li>
      </ul>
    </div>
  )
}
