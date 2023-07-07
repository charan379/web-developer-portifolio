import { GithubSvgLogo } from '@/assets/logos/Github'
import React from 'react'

const GithubLink = () => {
    return (
        <>
            <a
                href="https://github.com/lucyanovidio"
                title="Github"
                target="_blank"
            >
                <GithubSvgLogo />
            </a>
        </>
    )
}

export default GithubLink