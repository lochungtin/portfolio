import { useState, useCallback, useEffect } from 'react';

const mobile = 768;

export default function useMediaQuery(width = mobile) {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback(e => {
        setTargetReached(e.matches * true);
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', e => updateTarget(e))

        if (media.matches)
            setTargetReached(true)

        return () => media.removeEventListener('change', e => updateTarget(e))
    }, [width, updateTarget]);

    return targetReached;
};
