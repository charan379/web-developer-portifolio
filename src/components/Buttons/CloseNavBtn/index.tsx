import { CrossCloseSvgIcon } from '@/assets/icons/CrossClose'
import React, { MouseEvent } from 'react'

const CloseNavBtn = () => {

    const closeNavMenu = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        document.body.classList.remove("menu-expanded")
    }
    // 
    return (
        <>
            <button
                aria-expanded="true"
                aria-label="Close menu"
                className="close-menu open"
                onClick={closeNavMenu}
            >
                <CrossCloseSvgIcon />
            </button>
        </>
    )
}

export default CloseNavBtn