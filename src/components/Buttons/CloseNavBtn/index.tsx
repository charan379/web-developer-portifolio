import { CrossCloseSvgIcon } from '@/assets/icons/CrossClose'
import React, { EventHandler, MouseEvent } from 'react'

interface CloseNavBtnProps {
    className: string,
    onClick: EventHandler<any>,
    name: string,
}

const CloseNavBtn = (props: CloseNavBtnProps) => {

    // 
    return (
        <>
            <button
                aria-expanded="true"
                aria-label={props.name}
                className={props.className}
                onClick={props.onClick}
            >
                <CrossCloseSvgIcon />
            </button>
        </>
    )
}

export default CloseNavBtn