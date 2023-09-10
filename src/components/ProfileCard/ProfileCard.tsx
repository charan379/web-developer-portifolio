import React from "react";
import styles from "./ProfileCard.module.css";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

const ProfileCard = () => {
  return (
    <div className={styles.profileCardPage}>
      <div className={styles.profileCardModal}>
        <div className={styles.profile}>
          <div className={styles.gridItem1}>
            <ProfilePhoto />
          </div>
          <div className={styles.gridItem2}> Grid 2 </div>
          <div className={styles.gridItem3}> Grid 3 </div>
          <div className={styles.gridItem4}> Grid 4 </div>
          <div className={styles.gridItem5}> Grid 5 </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
