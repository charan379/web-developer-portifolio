import React from 'react'
import styles from './SocialLinks.module.css'
import InstragramLink from './Links/InstragramLink'
import GithubLink from './Links/GithubLink'
import LinkedInLink from './Links/LinkedInLink'
import TwitterLink from './Links/TwitterLink'


const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <div id='instagram' className={styles.socialLink}>
                <InstragramLink />
            </div>
            <div id='github' className={styles.socialLink}>
                <GithubLink />
            </div>
            <div id='linkedin' className={styles.socialLink}>
                <LinkedInLink />
            </div>
            <div id='twitter' className={styles.socialLink}>
                <TwitterLink />
            </div>
        </div>
    )
}

export default SocialLinks;