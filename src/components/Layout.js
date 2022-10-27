import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  container,
  subContainer,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  headerCircle,
  headerCircle2,
  headerCircle3,
  headerCircleDiv,
} from "./Layout.module.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div className={container}>
      <div className={subContainer}>
        <nav>
          {/* <StaticImage
          alt="droplet of water on sand"
          src="../images/aaron-burden-RgTI2KaQ5N4-unsplash.jpg"
        /> */}
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </div>
      <div className={headerCircleDiv}>
        <p className={headerCircle}>
          <p className={headerCircle2}>
          <p className={headerCircle3}></p>
          </p>
        </p>
      </div>
    </div>
  );
}
