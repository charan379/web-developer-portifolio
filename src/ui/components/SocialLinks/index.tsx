import React from 'react'
import InstragramLink from './Links/InstragramLink'
import GithubLink from './Links/GithubLink'
import LinkedInLink from './Links/LinkedInLink'
import TwitterLink from './Links/TwitterLink'


const SocialLinks = () => {
    return (
        <div className="w-full p-1 flex flex-row flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-6">
            <div id='instagram' className="hover:scale-125 transition-all duration-300">
                <InstragramLink />
            </div>
            <div id='github' className="hover:scale-125 transition-all duration-300">
                <GithubLink />
            </div>
            <div id='linkedin' className="hover:scale-125 transition-all duration-300">
                <LinkedInLink />
            </div>
            <div id='twitter' className="hover:scale-125 transition-all duration-300">
                <TwitterLink />
            </div>
            <div id='twitter' className="hover:scale-125 transition-all duration-300">
                <TwitterLink />
            </div>
        </div>
    )
}

export default SocialLinks;