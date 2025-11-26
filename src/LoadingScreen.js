import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Animation duration in ms
        const duration = 2500;
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsFading(true);
                        setTimeout(onComplete, 500); // Wait for fade out
                    }, 500); // Wait a bit at 100%
                    return 100;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    if (!onComplete) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="relative w-64 md:w-96 h-auto">
                {/* Background Dimmed Logo */}
                <img
                    src="/bambi-title.png"
                    alt="Loading..."
                    className="w-full h-full object-contain opacity-20 filter grayscale"
                />

                {/* Foreground Filling Logo */}
                <div
                    className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                >
                    <img
                        src="/bambi-title.png"
                        alt="Bambi"
                        className="w-64 md:w-96 max-w-none h-full object-contain"
                    />
                </div>

                {/* Progress Percentage (Optional, kept subtle) */}
                <div className="absolute -bottom-8 left-0 right-0 text-center">
                    <span className="text-neutral-500 text-sm font-mono tracking-widest">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>
        </div>
    );
}
