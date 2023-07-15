import { CrossCloseSvgIcon } from '@/assets/icons/CrossClose'
import React, { MouseEvent } from 'react'

interface CloseNavBtnProps {
    className: string,
    onClick?: Function,
    name: string,
}

const CloseNavBtn = (props: CloseNavBtnProps) => {

    const closeNavMenu = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        document.body.classList.remove("menu-expanded")
    }
    // 
    return (
        <>
            <button
                aria-expanded="true"
                aria-label={props.name}
                className={props.className}
                onClick={closeNavMenu}
            >
                <CrossCloseSvgIcon />
            </button>
        </>
    )
}

export default CloseNavBtn