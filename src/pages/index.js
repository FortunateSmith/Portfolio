import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image'
// import { Link } from "gatsby";
// import { main } from "./style.css"
import About from "./about";
import Skills from "./skills";
import { body, subHead } from "./Style.module.css"

export default function IndexPage() {
  return (
    <main>
      <div>
      <Layout pageTitle="Liam Smith">
      {/* <StaticImage
          alt="droplet of water on sand"
          src="../images/aaron-burden-RgTI2KaQ5N4-unsplash.jpg"
        /> */}
        </Layout>
        <h1>
        <p className={subHead}>Front End Developer</p>
        </h1>
        </div>
        <div className={body}>
      {/* <h1>Front End Developer</h1> */}
      <p>Under Construction</p>
      <About />
      <Skills />
      </div>
    </main>
  );
}
export const Head = () => <title>Home Page</title>;
