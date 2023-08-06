"use client";

import { WindowDimensions, useWindowSize } from "@/lib/hooks/useWindowSize";
import styles from "./AppLogo.module.css";
import React from "react";

export interface AppLogoProps {
  location?: string;
  profile: Profile;
}
const AppLogo = (props: AppLogoProps) => {
  const { height, width }: WindowDimensions = useWindowSize();

  return (
    <a className={`${styles.logo} close`} href="#intro">
      {props?.location === "nav" && width <= 1024
        ? props.profile.shortName
        : props.profile.name}
    </a>
  );
};

export default AppLogo;
