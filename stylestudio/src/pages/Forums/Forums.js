import React from "react";
import { Forum_box } from "./Forum_box";
import "./Forums.css";

export function Forums() {
  return (
    <div className="forum-container">
      <Forum_box />
      <Forum_box />
      <Forum_box />
      <Forum_box />
      <Forum_box />
      <Forum_box />
    </div>
  );
}
