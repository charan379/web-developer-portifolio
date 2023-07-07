'use client';

import { MoonSvgIcon } from '@/assets/icons/Moon';
import { SunSvgIcon } from '@/assets/icons/Sun';
import React, { MouseEvent, useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [toogle, setToogle] = useState("unchecked");

    const ToogleTheme = (event: MouseEvent<HTMLElement>) => {
        // 
        document.body.classList.toggle("light-mode");
        // 
        setToogle(toogle === "unchecked" ? "checked" : "unchecked")
    }

    useEffect(() => {


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