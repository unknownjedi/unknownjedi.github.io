import React, { useEffect, useRef, useState } from "react";
import RainStream from "./RainStream";

import styles from './MatrixBackground.module.css';

const MatrixBackground = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 }); // ?{width, height}

    useEffect(() => {
        const boundingClientRect = containerRef.current?.getBoundingClientRect();
        setContainerSize({
            width: boundingClientRect?.width ?? 0,
            height: boundingClientRect?.height ?? 0,
        });
    }, []);

    const streamCount = containerSize ? Math.floor(containerSize.width / 15) : 0;
    return <div className={styles.background} ref={containerRef}>
        {new Array(streamCount).fill(0).map((_, index) => (<RainStream key={index} height={containerSize.height} />))}
    </div>;
};

export default MatrixBackground;
