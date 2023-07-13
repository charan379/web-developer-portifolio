import { HamburgerSvgIcon } from '@/assets/icons/Hamburger'
import React, { MouseEvent } from 'react'

const OpenNavBtn = () => {

    const openNavMenu = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        document.body.classList.add("menu-expanded")
    }
    // 
    return (
        <>
            <button
                aria-expanded="false"
                aria-label="Open menu"
                className="open-menu open"
                onClick={openNavMenu}
            >
                <HamburgerSvgIcon />
            </button>
        </>
    )
}

export default OpenNavBtn