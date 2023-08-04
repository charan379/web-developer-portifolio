import InstagramSvgLogo from '@/assets/logos/Instagram'
import React from 'react'

const InstragramLink = () => {
    return (
        <>
            <a
                href="https://instagram.com/developer-name"
                title="Instagram"
                target="_blank"
            >
                <InstagramSvgLogo />
            </a>
        </>
    )
}

export default InstragramLink