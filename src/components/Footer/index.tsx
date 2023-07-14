import React from 'react'
import InstragramLink from '../SocialLinks/Links/InstragramLink'
import GithubLink from '../SocialLinks/Links/GithubLink'
import LinkedInLink from '../SocialLinks/Links/LinkedInLink'
import TwitterLink from '../SocialLinks/Links/TwitterLink'
import SocialLinks from '../SocialLinks'

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
                        <SocialLinks />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer