import SocialLinks from '@/components/SocialLinks'
import styles from './NavMenu.module.css'
import React from 'react'

const NavMenu = () => {

  return (
    <div className={styles.menu}>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a id="aboutNav" className={`close`} href="#about">About me</a>
        </li>
        <li className={styles.navLink}>
          <a id="projectsNav" className={`close`} href="#projects">Projects</a>
        </li>
        <li className={styles.navLink}>
          <a id="skillsNav" className={`close`} href="#skills">Skills / Knowledge</a>
        </li>
        <li className={styles.navLink}>
          <a id="contactNav" className={`close`} href="#contact">Talk to me</a>
        </li>
      </ul>

      <SocialLinks />

    </div>
  )
}

export default NavMenu