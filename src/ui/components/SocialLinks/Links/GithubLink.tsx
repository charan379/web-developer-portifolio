import { GithubSvg } from '@charan379/react-svg-icons'
import React from 'react'

const GithubLink = () => {
    return (
        <>
            <a
                href="https://github.com/developer-name"
                title="Github"
                target="_blank"
            >
                <GithubSvg catOuterLeftColor='red'/>
            </a>
        </>
    )
}

export default GithubLink