import { HamburgerSvgIcon } from '@/assets/icons/Hamburger'
import React, { EventHandler, MouseEvent, MouseEventHandler } from 'react'

interface OpenNavBtnProps {
    className: string,
    onClick: EventHandler<any>,
    name: string,
}

const OpenNavBtn = (props: OpenNavBtnProps) => {
    // 
    return (
        <>
            <button
                aria-expanded="false"
                aria-label={props.name}
                className={props.className}
                onClick={props.onClick}
            >
                <HamburgerSvgIcon />
            </button>
        </>
    )
}

export default OpenNavBtn