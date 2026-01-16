import React, { useState, useRef, useCallback, useEffect } from 'react';
import './ImageCompareSlider.css';

const ImageCompareSlider = ({
    beforeImage,
    afterImage,
    beforeLabel = "Medical Record",
    afterLabel = "What it means",
    initialPosition = 40
}) => {
    const [sliderPosition, setSliderPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [containerWidth, setContainerWidth] = useState(600);
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    // Track container width for responsive image sizing
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const getPositionFromEvent = useCallback((clientX) => {
        if (!containerRef.current) return sliderPosition;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        return Math.max(0, Math.min(100, percentage));
    }, [sliderPosition]);

    const handleMove = useCallback((clientX) => {
        if (!isDragging) return;
        const newPosition = getPositionFromEvent(clientX);
        setSliderPosition(newPosition);
    }, [isDragging, getPositionFromEvent]);

    const handleMouseDown = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
        const newPosition = getPositionFromEvent(e.clientX);
        setSliderPosition(newPosition);
    }, [getPositionFromEvent]);

    const handleMouseMove = useCallback((e) => {
        handleMove(e.clientX);
    }, [handleMove]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleTouchStart = useCallback((e) => {
        setIsDragging(true);
        const touch = e.touches[0];
        const newPosition = getPositionFromEvent(touch.clientX);
        setSliderPosition(newPosition);
    }, [getPositionFromEvent]);

    const handleTouchMove = useCallback((e) => {
        const touch = e.touches[0];
        handleMove(touch.clientX);
    }, [handleMove]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleKeyDown = useCallback((e) => {
        const step = 2;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setSliderPosition(prev => Math.max(0, prev - step));
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            setSliderPosition(prev => Math.min(100, prev + step));
        }
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

    return (
        <div
            ref={containerRef}
            className="compare-root"
            aria-label="Image comparison slider"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* After Image (background) */}
            <img
                src={afterImage}
                alt="Explained medical record - clear and readable"
                className="image after"
                draggable="false"
            />

            {/* Before Image (overlay) */}
            <div
                className="before-wrapper"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src={beforeImage}
                    alt="Raw medical record - complex and confusing"
                    className="image before"
                    style={{ width: `${containerWidth}px` }}
                    draggable="false"
                />
            </div>

            {/* Slider Handle */}
            <div
                ref={sliderRef}
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
                role="slider"
                aria-valuenow={Math.round(sliderPosition)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Drag to compare before and after images"
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <div className="slider-line">
                    <div className="slider-grip">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="compare-label compare-label-before">
                {beforeLabel}
            </div>
            <div className="compare-label compare-label-after">
                {afterLabel}
            </div>
        </div>
    );
};

export default ImageCompareSlider;
