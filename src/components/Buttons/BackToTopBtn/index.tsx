'use client';

import styles from './BackToTopBtn.module.css';
import { UpArrowSvgIcon } from '@/assets/icons/UpArrow'
import { useScroll } from '@/lib/hooks/useScroll';
import { handleBacktotopOnScroll } from '@/lib/utils/handleBacktotopOnScroll';
import { scrollToTop } from '@/lib/utils/scrollToTop';
import React, { useEffect } from 'react'

const BackToTopBtn = () => {

    const scroll = useScroll();

    useEffect(() => {
        handleBacktotopOnScroll("#backToTop", scroll.Y, styles.show)

        return () => {
        }

    }, [scroll.Y])


    return (
        <>
            <button className={styles.backToTopButton} id="backToTop" title="Back to the top" onClick={scrollToTop}>
                <UpArrowSvgIcon />
            </button>
        </>
    )
}

export default BackToTopBtn