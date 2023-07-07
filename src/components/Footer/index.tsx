import React from 'react'
import InstragramLink from '../SocialLinks/InstragramLink'
import GithubLink from '../SocialLinks/GithubLink'
import LinkedInLink from '../SocialLinks/LinkedInLink'
import TwitterLink from '../SocialLinks/TwitterLink'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div className="col-a">
                        <a className="logo" href="#home"> lucyanovidio </a>

                        <p>
                            ©2022 por Lucyan Ovídio. <br />
                            Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="col-b">
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
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer