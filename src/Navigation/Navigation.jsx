import React from "react";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
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
