'use client';

import { MoonSvgIcon } from '@/assets/icons/Moon';
import { SunSvgIcon } from '@/assets/icons/Sun';
import React, { MouseEvent, useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [toogle, setToogle] = useState("unchecked");

    const ToogleTheme = (event: MouseEvent<HTMLElement>) => {
        // 
        if (toogle === "unchecked") {
            document.body.dataset.theme = "dark";
            setToogle("checked")
        } else {
            document.body.dataset.theme = "light";
            setToogle("unchecked")
        }
    }

    useEffect(() => {

        const theme = document.body.dataset.theme;

        if (theme === "light") {
            setToogle("unchecked")
        } else {
            setToogle("checked")
        }


        return () => {

        }
    }, [toogle])

    return (
        <>
            <div id="toggle">
                <input type="checkbox" id="sw-checkbox" value={toogle} onClick={(event) => ToogleTheme(event)} />
                <label htmlFor="sw-checkbox" title="Change theme">
                    <MoonSvgIcon />
                    <SunSvgIcon />
                </label>
            </div>
        </>
    )
}

export default ThemeToggle;