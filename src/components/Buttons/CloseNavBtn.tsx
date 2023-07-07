import { CrossCloseSvgIcon } from '@/assets/icons/CrossClose'
import React from 'react'

const CloseNavBtn = () => {
    return (
        <>
            <button
                aria-expanded="true"
                aria-label="Close menu"
                className="close-menu close"
            >
                <CrossCloseSvgIcon />
            </button>
        </>
    )
}

export default CloseNavBtn