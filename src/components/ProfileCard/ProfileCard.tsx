import React from "react";
import styles from "./ProfileCard.module.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import SocialLinks from "../SocialLinks";
import Name from "../Name/Name";
import Bio from "../Bio/Bio";

const ProfileCard = () => {
  return (
    <div className={styles.profileCardPage}>
      <div className={styles.profileCardModal}>
        <div className={styles.profile}>
          <div className={styles.gridItem1}>
            <div className={styles.gridItem1Sec1}>
              <ProfilePhoto />
            </div>
            <div className={styles.gridItem1Sec2}>
              <Name />
              <Bio />
            </div>
          </div>
          <div className={styles.gridItem2}> Grid 2 </div>
          <div className={styles.gridItem3}> Grid 3 </div>
          <div className={styles.gridItem4}> Grid 4 </div>
          <div className={styles.gridItem5}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
