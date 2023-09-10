import React from "react";
import styles from "./ProfilePhoto.module.css";

const ProfilePhoto = () => {
  return (
    <div className={styles.profilePic}>
      <img src="assets/images/dp.jpg" alt="Profile Picture" />
    </div>
  );
};

export default ProfilePhoto;
