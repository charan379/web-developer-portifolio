import SocialLinks from '@/components/SocialLinks'
import styles from './NavMenu.module.css'
import React, { MouseEvent } from 'react'
import OpenNavBtn from '@/components/Buttons/OpenNavBtn'
import CloseNavBtn from '@/components/Buttons/CloseNavBtn'

const NavMenu = () => {

  // function to open nav menu
  const openNavMenu = (event: MouseEvent<HTMLElement> | TouchEvent) => {
    event.preventDefault();
    document.getElementById("nav-menu")?.classList.add(styles.expanded)
  }

  return (
    <>
      <div id="nav-menu" className={styles.menu}>
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
      {/* close & open buttons */}
      <OpenNavBtn className={styles.openMenu} onClick={openNavMenu} name='Open Menu' />
      <CloseNavBtn className={styles.closeMenu} name='Close Menu' />
    </>
  )
}

export default NavMenu