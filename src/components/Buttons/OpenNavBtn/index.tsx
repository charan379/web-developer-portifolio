import { HamburgerSvgIcon } from '@/assets/icons/Hamburger'
import React, { MouseEvent } from 'react'

interface OpenNavBtnProps {
    className: string,
    onClick?: Function,
    name: string,
}

const OpenNavBtn = (props: OpenNavBtnProps) => {

    const openNavMenu = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        document.body.classList.add("menu-expanded")
    }
    // 
    return (
        <>
            <button
                aria-expanded="false"
                aria-label={props.name}
                className={props.className}
                onClick={openNavMenu}
            >
                <HamburgerSvgIcon />
            </button>
        </>
    )
}

export default OpenNavBtn