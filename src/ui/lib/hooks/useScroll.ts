'use client';

import React, { useEffect, useState } from 'react'

export const useScroll = () => {
    const [scroll, setScroll] = useState({
        X: 0, Y: 0
    });

    const OnScroll = () => {
        setScroll({ X: window.scrollX, Y: window.scrollY })
    }

    useEffect(() => {
        window.addEventListener("scroll", OnScroll, { passive: true });
        // clean up
        return () => {
            window.removeEventListener("scroll", OnScroll)
        }
    }, [])

    return scroll;
}
