import SocialLinks from '@/components/SocialLinks'
import styles from './NavMenu.module.css'
import React, { EventHandler, MouseEvent } from 'react'
import OpenNavBtn from '@/components/Buttons/OpenNavBtn'
import CloseNavBtn from '@/components/Buttons/CloseNavBtn'

const NavMenu = () => {
  console.log(document.getElementById("navigation"))

  // function to open nav menu
  const openNavMenu: EventHandler<any> = (event: MouseEvent<HTMLElement> | TouchEvent) => {
    event.preventDefault();
    document.getElementById("nav-menu")?.classList.add(styles.expanded)
    document.body.style.overflow = "hidden";
  }

  // function to close nav menu
  const closeNavMenu: EventHandler<any> = (event: MouseEvent<HTMLElement> | TouchEvent) => {
    event.preventDefault();
    document.getElementById("nav-menu")?.classList.remove(styles.expanded)
    document.body.style.overflow = "auto";
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
      <CloseNavBtn className={styles.closeMenu} onClick={closeNavMenu} name='Close Menu' />
    </>
  )
}

export default NavMenu