import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  headerCircle,
  headerCircle2,
  headerCircle3,
  headerCircleDiv,
  subHead,
  titleDiv
} from "./Layout.module.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div className={container}>
      <nav>
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

      <div className={titleDiv}>
        <h1 className={heading}>{pageTitle}</h1>
        <h2 className={heading}>Frontend Developer</h2>
        {children}
      </div>

      <div className={headerCircleDiv}>
        {/* <p className={headerCircle}>
          <p className={headerCircle2}>
            <p className={headerCircle3}></p>
          </p>
        </p> */}
      </div>
    </div>
  );
}
