import styles from "./AppLogo.module.css";
import React from "react";

export interface AppLogoProps {
  location?: string;
  profile: Profile;
}
const AppLogo = (props: AppLogoProps) => {
  return (
    <a className={`${styles.logo} close`} href="#intro">
      {props.location === "nav" ? props.profile.shortName : props.profile.name}
    </a>
  );
};

export default AppLogo;
