import React from "react";
import { circular, skills } from "../pages/Style.module.css"
export default function Skills() {
  return (
    <div className={circular}>
      <h2><p >Skills</p></h2>
      <div>
        <h3>Languages</h3>
        <p>
          * HTML/CSS
          * JavaScript
          * SQL
          * Ruby
        </p>
        <h3>Libraries</h3>
        <p>
          * React
          * Node
          * Express
          * Rails
          * Ajax
          * EJS 
          * jQuery
          * Bootstrap
          * Axios
        </p>
      </div>
    </div>
  );
}
