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

        </Layout>

        </div>
        <div className={body}>

      <p>Under Construction</p>
      <About />
      <Skills />
      </div>
    </main>
  );
}
export const Head = () => <title>Home Page</title>;
