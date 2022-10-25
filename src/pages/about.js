import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function About() {
  return (
    <div>
      <h2>
        About Liam
      </h2>
      {/* <Layout pageTitle="About"></Layout> */}
      <p>Liam Smith is a front end developer, who studied under the tutelage of Ian Bentley at Lighthouse Labs </p>
    </div>
  );
}

export const Head = () => <title>About Me</title>;
