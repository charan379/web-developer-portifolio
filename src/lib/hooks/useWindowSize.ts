import { useEffect, useState } from "react";
import { debounce } from "lodash";

export interface WindowDimensions {
    width: number;
    height: number;
}

const getWindowDimensions = (): WindowDimensions => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

export function useWindowSize(delay: number = 0): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        const debouncedHandleResize = debounce(handleResize, delay);
        // listen to resize events
        window.addEventListener("resize", debouncedHandleResize);

        // stop listening when component unmounts
        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, [delay]);

    return windowDimensions;
}
