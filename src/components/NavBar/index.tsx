'use client';

import React, { useEffect } from 'react'
import GithubLink from '../SocialLinks/GithubLink';
import LinkedInLink from '../SocialLinks/LinkedInLink';
import TwitterLink from '../SocialLinks/TwitterLink';
import OpenNavBtn from '../Buttons/OpenNavBtn';
import CloseNavBtn from '../Buttons/CloseNavBtn';
import { CrossCloseSvgIcon } from '@/assets/icons/CrossClose';
import { HamburgerSvgIcon } from '@/assets/icons/Hamburger';
import InstragramLink from '../SocialLinks/InstragramLink';
import { useScroll } from '@/lib/hooks/useScroll';
import { handleNavbarOnScroll } from '@/lib/utils/handleNavbarOnScroll';

const NavBar = () => {

    const scroll = useScroll();

    useEffect(() => {
        handleNavbarOnScroll("#navigation", scroll.Y)

        return () => {
        }

    }, [scroll.Y])


    return (
        <>
            <nav id="navigation">
                <div className="wrapper">
                    <a className="logo close" href="#home"> lucyanovidio </a>

                    <div className="menu">
                        <ul>
                            <li>
                                <a id="aboutNav" className="close" href="#about">About me</a>
                            </li>
                            <li>
                                <a id="projectsNav" className="close" href="#projects">Projects</a>
                            </li>
                            <li>
                                <a id="skillsNav" className="close" href="#skills">Skills/Knowledge</a>
                            </li>
                            <li>
                                <a id="contactNav" className="close" href="#contact">Talk to me</a>
                            </li>
                        </ul>

                        <ul className="social-links">
                            <li>
                                <InstragramLink />
                            </li>
                            <li>
                                <GithubLink />
                            </li>
                            <li>
                                <LinkedInLink />
                            </li>
                            <li>
                                <TwitterLink />
                            </li>
                        </ul>
                        <OpenNavBtn />
                        <CloseNavBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;