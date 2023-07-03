import React from 'react'
import Instragram from '@/components/SocialLinks/Instragram';
import Github from '../SocialLinks/Github';
import LinkedIn from '../SocialLinks/LinkedIn';
import Twitter from '../SocialLinks/Twitter';
import OpenNavBtn from '../Buttons/OpenNavBtn';
import CloseNavBtn from '../Buttons/CloseNavBtn';

const NavBar = () => {
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
                                <a id="knowledgeNav" className="close" href="#knowledge"
                                >Knowledge</a>
                            </li>
                            <li>
                                <a id="contactNav" className="close" href="#contact">Talk to me</a>
                            </li>
                        </ul>

                        <ul className="social-links">
                            <li>
                                <Instragram />
                            </li>
                            <li>
                                <Github />
                            </li>
                            <li>
                                <LinkedIn />
                            </li>
                            <li>
                                <Twitter />
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