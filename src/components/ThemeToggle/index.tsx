'use client';

import { MoonSvgIcon } from '@/assets/icons/Moon';
import { SunSvgIcon } from '@/assets/icons/Sun';
import React, { MouseEvent, useEffect, useState } from 'react'

/**
 * Theme toggle component that allows switching between light and dark themes.
 */
const ThemeToggle = () => {

    const [theme, setTheme] = useState("");

    /**
     * Toggle the theme between light and dark.
     * @param {MouseEvent<HTMLElement>} event - The click event.
     */
    const ToogleTheme = (event: MouseEvent<HTMLElement>) => {
        // 
        if (theme === "dark") {
            setTheme("light");
            document.body.dataset.theme = "light";
        } else {
            setTheme("dark");
            document.body.dataset.theme = "dark";
        }
    }

    useEffect(() => {

        const dataTheme = document.body?.dataset?.theme;

        if (dataTheme) setTheme(dataTheme)

        return () => {
        }
    }, [])

    return (
        <>
            <div id="toggle" data-theme={theme}>
                <input type="checkbox" id="sw-checkbox" value={theme} onClick={(event) => ToogleTheme(event)} />
                <label htmlFor="sw-checkbox" title="Change theme">
                    <MoonSvgIcon />
                    <SunSvgIcon />
                </label>
            </div>
        </>
    )
}

export default ThemeToggle;