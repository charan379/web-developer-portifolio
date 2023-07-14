import React from 'react'
import styles from './SocialLinks.module.css'
import InstragramLink from './Links/InstragramLink'
import GithubLink from './Links/GithubLink'
import LinkedInLink from './Links/LinkedInLink'
import TwitterLink from './Links/TwitterLink'


const SocialLinks = () => {
    return (
        <ul className={styles.socialLinks}>
            <li id='instagram' className={styles.socialLink}>
                <InstragramLink />
            </li>
            <li id='github' className={styles.socialLink}>
                <GithubLink />
            </li>
            <li id='linkedin' className={styles.socialLink}>
                <LinkedInLink />
            </li>
            <li id='twitter' className={styles.socialLink}>
                <TwitterLink />
            </li>
        </ul>
    )
}

export default SocialLinks;