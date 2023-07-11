import { LeafSvgIcon } from '@/assets/icons/Leaf'
import { ThreeDotsSvgIcon } from '@/assets/icons/ThreeDots'
import React from 'react'

const MoreProjectsCard = () => {
    return (
        <div className="card">
            <h3>Shortly...</h3>
            <ThreeDotsSvgIcon />
            <p>
                Constant learning! <br />
                Soon many other projects.
            </p>
            <LeafSvgIcon />
        </div>
    )
}

export default MoreProjectsCard