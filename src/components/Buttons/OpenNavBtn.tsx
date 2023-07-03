import React from 'react'

const OpenNavBtn = () => {
    return (
        <>
            <button
                aria-expanded="false"
                aria-label="Open menu"
                className="open-menu open"
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 20H30"
                        stroke="#00856F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M10 12H30"
                        stroke="#00856F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M18 28L30 28"
                        stroke="#00856F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </>
    )
}

export default OpenNavBtn