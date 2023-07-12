'use client';

import { UpArrowSvgIcon } from '@/assets/icons/UpArrow'
import { useScroll } from '@/lib/hooks/useScroll';
import { handleBacktotopOnScroll } from '@/lib/utils/handleBacktotopOnScroll';
import React, { useEffect } from 'react'

const BackToTopBtn = () => {

    const scroll = useScroll();

    useEffect(() => {
        handleBacktotopOnScroll("#backToTopButton", scroll.Y)

        return () => {
        }

    }, [scroll.Y])


    return (
        <>
            <a id="backToTopButton" title="Back to the top" href="#home">
                <UpArrowSvgIcon />
            </a>
        </>
    )
}

export default BackToTopBtn