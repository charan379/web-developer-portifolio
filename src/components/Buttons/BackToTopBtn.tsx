import { UpArrowSvgIcon } from '@/assets/icons/UpArrow'
import React from 'react'

const BackToTopBtn = () => {
    return (
        <>
            <a id="backToTopButton" title="Back to the top" href="#home">
                <UpArrowSvgIcon />
            </a>
        </>
    )
}

export default BackToTopBtn