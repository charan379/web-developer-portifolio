import { useEffect, useState } from "react";

export interface WindowDimensions {
    width: number;
    height: number;
}

const getWindowDimensions = (): WindowDimensions => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
});

export function useWindowSize(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return windowDimensions;
}