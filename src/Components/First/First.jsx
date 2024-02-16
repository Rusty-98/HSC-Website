import React from 'react'
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

const First = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        webGLFluidEnhanced.simulation(canvasRef.current, {
            SIM_RESOLUTION: 256,
            DENSITY_DISSIPATION: 0.8,
            PRESSURE_ITERATIONS: 30,
            COLOR_PALETTE: ['#cc211b', '#f1c593', '#e87e54', '#f193a7', '#ec6fa9'],
        });
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />;
}

export default First