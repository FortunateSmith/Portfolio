import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import {circular} from "../pages/Style.module.css"

export default function About() {
  return (
    <div className={circular}>
      <h2>
        <p >About Liam</p>
      </h2>
      {/* <Layout pageTitle="About"></Layout> */}
      <p>Liam Smith is a front end developer, who studied under the tutelage of Ian Bentley at Lighthouse Labs </p>
    </div>
  );
}

export const Head = () => <title>About Me</title>;
