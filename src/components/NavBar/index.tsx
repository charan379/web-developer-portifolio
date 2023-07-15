'use client';

import styles from './Navbar.module.css';
import React, { useEffect } from 'react'
import OpenNavBtn from '../Buttons/OpenNavBtn';
import CloseNavBtn from '../Buttons/CloseNavBtn';
import { useScroll } from '@/lib/hooks/useScroll';
import { handleNavbarOnScroll } from '@/lib/utils/handleNavbarOnScroll';
import AppLogo from '../AppLogo';
import NavMenu from './NavMenu';

const NavBar = () => {

    const scroll = useScroll();

    useEffect(() => {
        handleNavbarOnScroll("#navigation", scroll.Y, styles.scroll);

        return () => {
        }

    }, [scroll.Y])


    return (
        <>
            <nav id="navigation" className={styles.nav}>
                <div className={styles.wrapper}>
                    <AppLogo />
                    <NavMenu />
                    <OpenNavBtn className={styles.openMenu} name='Open Menu' />
                    <CloseNavBtn className={styles.closeMenu} name='Close Menu' />
                </div>
            </nav>
        </>
    )
}

export default NavBar;