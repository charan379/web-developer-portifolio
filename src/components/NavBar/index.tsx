'use client';

import styles from './Navbar.module.css';
import React, { useEffect } from 'react'
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
            <nav id="navigation" className={styles.nav} data-scrolled="false" data-menu-extended="false">
                <div className={styles.wrapper}>
                    <AppLogo />
                    <NavMenu />
                </div>
            </nav>
        </>
    )
}

export default NavBar;