import LinkedInSvgLogo from '@/assets/logos/LinkedIn'
import React from 'react'

const LinkedInLink = () => {
    return (
        <>
            <a
                href="https://linkedin.com/in/developer-name"
                title="LinkedIn"
                target="_blank"
            >
                <LinkedInSvgLogo />
            </a>
        </>
    )
}

export default LinkedInLink