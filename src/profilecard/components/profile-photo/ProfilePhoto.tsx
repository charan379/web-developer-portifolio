import React from "react";
import styles from "./ProfilePhoto.module.css";

// Define the prop types for the ProfilePhoto component
interface ProfilePhotoProps extends ComponentProps {}

// ProfilePhoto component
const ProfilePhoto: React.FC<ProfilePhotoProps> = (props) => {
  // Destructure the className and style props from the component props
  const { className, style }: ProfilePhotoProps = props;

  // Render the component
  return (
    <div className={className} style={style}>
      {/* Display the profile picture */}
      <img src="assets/images/dp.jpg" alt="Profile Picture" />
    </div>
  );
};

// Default props for the ProfilePhoto component
const ProfilePhotoDefaultProps: ProfilePhotoProps = {
  style: { width: "135px", height: "135px" }, // Default size for the component
  className: styles.profilePic, // Default CSS class using a CSS module
};

// Assign default props to the ProfilePhoto component
ProfilePhoto.defaultProps = ProfilePhotoDefaultProps;

export default ProfilePhoto;
