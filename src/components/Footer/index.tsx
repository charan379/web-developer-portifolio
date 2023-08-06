"use client";
import React from "react";
import SocialLinks from "../SocialLinks";
import styles from "./Footer.module.css";
import AppLogo from "../AppLogo";

const Footer = (props: { profile: Profile }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.colA} col-a`}>
            <div id="logo" className={styles.logo}>
              <AppLogo profile={props.profile} location="footer" />
            </div>

            <p>
              ©2022 By Developer Name. <br />
              All rights reserved.
            </p>
          </div>

          <div className={`${styles.colB} col-b`}>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
