import TwitterSvgLogo from '@/assets/logos/Twitter'
import React from 'react'

const TwitterLink = () => {
    return (
        <>
            <a
                href="https://twitter.com/developer-name"
                title="Twitter"
                target="_blank"
            >
                <TwitterSvgLogo />
            </a>
        </>
    )
}

export default TwitterLink