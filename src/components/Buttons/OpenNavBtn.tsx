import { HamburgerSvgIcon } from '@/assets/icons/Hamburger'
import React from 'react'

const OpenNavBtn = () => {
    return (
        <>
            <button
                aria-expanded="false"
                aria-label="Open menu"
                className="open-menu open"
            >
                <HamburgerSvgIcon />
            </button>
        </>
    )
}

export default OpenNavBtn